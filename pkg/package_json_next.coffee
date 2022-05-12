#!/usr/bin/env coffee

import DIR from './dir'
import {join} from 'path'
import {readFile,writeFile} from 'fs/promises'
import {existsSync} from 'fs'

read = (fp)=>
  readFile(fp,'utf8')

pkg_json = 'package.json'
fp_app_package = join DIR,'app/'+pkg_json

dist = process.argv[2]
线上版 = dist == 'ol'

write = (package_json, version)=>
  package_json.version = version
  fp = join(DIR,'ver', version+'.md')
  if not existsSync fp
    if 线上版
      console.error fp,'not exist'
      return false
  else
    package_json.description = await read fp
  await writeFile(
    fp_app_package
    JSON.stringify package_json
  )
  return true

do =>

  package_json = JSON.parse await read fp_app_package
  {version:version_now} = package_json
  version = version_now.split('.').map((x)=>parseInt(x))

  if 线上版
    pos = 2
    version[2] = 1
  else
    pos = 2

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
