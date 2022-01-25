#!/usr/bin/env coffee

import DIR from './dir'
import {join} from 'path'
import Oss from './oss.coffee'
import {walkRel} from '@rmw/walk'
import {readFile} from 'fs/promises'
import push from './push'
import os from 'os'

OSS = Oss 'i-desk'

{version, 帧享云录屏} = JSON.parse await readFile(
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
  title = OS_NAME + " 帧享云录屏 "+version
  txt = []

  _upload = (file)=>
    console.log '>', file
    url = version+"/"+file
    txt.push "[#{file}](https://i-desk.oss-accelerate.aliyuncs.com/#{url})"
    OSS.upload(
      url
      join(dir,file)
    )

  for await file from walkRel dir
    li.push _upload(file)
  await Promise.all li

  await push title, txt.join('\n\n')
  return

do =>
  await main()
  process.exit()

