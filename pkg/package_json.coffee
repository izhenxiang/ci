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

  package_json.description = await read fp
  await writeFile(
    fp_app_package
    JSON.stringify package_json
  )

  return true


do =>
  package_json = JSON.parse await read fp_app_package
  {version} = package_json
  code = 0
  if await write(package_json, version) == false
    code = 1
  process.exit code
