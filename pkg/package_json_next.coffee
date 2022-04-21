#!/usr/bin/env coffee

import DIR from './dir'
import {join} from 'path'
import {readFile,writeFile} from 'fs/promises'
import {existsSync} from 'fs'

read = (fp)=>
  readFile(fp,'utf8')

pkg_json = 'package.json'
fp_app_package = join DIR,'pkg/app/'+pkg_json

write = (package_json, version)=>
  package_json.version = version
  fp = join(DIR,'ver', version+'.md')
  if not existsSync fp
    console.error fp,'not exist'
    return false

  await writeFile(
    fp_app_package
    JSON.stringify package_json
  )
  package_json.description = await read fp

  return true


do =>
  switch process.argv[2]
    when 'ol'
      pos = 1
    when 'dev'
      pos = 2
    else
      return

  package_json = JSON.parse await read fp_app_package
  {version:version_now} = package_json
  version = version_now.split('.').map((x)=>parseInt(x))

  while pos
    if version[pos] > 65535
      version[pos] = 0
      pos -= 1
      continue
    version[pos] += 1
    break

  code = 0
  if await write(package_json, version.join('.')) == false
    code = 1
    await write(package_json, version_now)
  process.exit code
