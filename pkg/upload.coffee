#!/usr/bin/env coffee

import {OSS_DESK, OSS_DESK_HOST} from './config.coffee'
import DIR from './dir'
import {join} from 'path'
import Oss from './oss.coffee'
import {walkRel} from '@rmw/walk'
import {readFile} from 'fs/promises'
import push from './push'
import os from 'os'

OSS = Oss OSS_DESK

{version, productName, description} = JSON.parse await readFile(
  join DIR,'app/package.json'
  'utf8'
)

platform = os.platform()
if platform == 'darwin'
  OS_NAME = '苹果'
else if platform.startsWith('win')
  OS_NAME = '视窗'
else
  OS_NAME = platform

export default main = =>

  dir = join DIR,'release',version
  li = []
  title = OS_NAME + " #{productName} "+version
  txt = []

  _upload = (file)=>
    console.log '>', file
    url = version+"/"+file
    txt.push """
→ #{file}
https://#{OSS_DESK_HOST}/#{url}

"""
    OSS.upload(
      url
      join(dir,file)
    )
  txt = txt.concat [
    "更新日志 :"
    description
  ]
  for await file from walkRel dir
    li.push _upload(file)
  await Promise.all li

  await push title, txt.join('\n')
  return

do =>
  await main()
  process.exit()
