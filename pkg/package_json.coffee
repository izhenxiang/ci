#!/usr/bin/env coffee

import DIR from './dir'
import {join} from 'path'
import {readFile,writeFile} from 'fs/promises'
import {existsSync} from 'fs'

read = (fp)=>
  readFile(fp,'utf8')

pkg_json = 'package.json'

do =>
  fp_app_package = join DIR,'pkg/app/'+pkg_json

  package_json = JSON.parse await read fp_app_package
  {version} = package_json
  version = version.split('.').map((x)=>parseInt(x))

  pos = 2
  while pos
    if version[pos] >= 65535
      version[pos] = 0
      pos -= 1
      continue
    version[pos] += 1
    break

  package_json.version = version = version.join '.'

  fp = join(DIR,'ver', version+'.md')
  if not existsSync fp
    console.log fp,'not exist'
    process.exit(1)
    return

  await writeFile(
    fp_app_package
    JSON.stringify package_json
  )
  package_json.description = await read fp

  await writeFile(
    join(
      DIR,'app',pkg_json
    )
    JSON.stringify package_json
  )




