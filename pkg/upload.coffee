#!/usr/bin/env coffee

import {walkRel} from '@rmw/walk'
import thisdir from '@rmw/thisdir'
import {dirname,join} from 'path'
import Oss from 'ali-oss'
import {readFile} from 'fs/promises'
import push from './push'
import os from 'os'

{accessKeySecret,accessKeyId} = process.env

DIR = dirname thisdir import.meta
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
  OSS = new Oss({
    endpoint: 'oss-cn-beijing.aliyuncs.com'
    region: 'oss-cn-zhangjiakou'
    bucket: 'i-desk'
    accessKeyId
    accessKeySecret
  })

  dir = join DIR,'release',version
  li = []
  title = OS_NAME + " 帧享云录屏 "+version
  txt = []

  upload = (file)=>
    console.log '>', file
    url = version+"/"+file
    txt.push "[#{file}](https://i-desk.oss-accelerate.aliyuncs.com/#{url})"
    OSS.multipartUpload(
      url
      join(dir,file)
      timeout: 120000
    )

  console.log dir
  for await file from walkRel dir
    li.push upload(file)
  await Promise.all li

  await push title, txt.join('\n\n')
  return

do =>
  await main()
  process.exit()

