#!/usr/bin/env coffee

import {walkRel} from '@rmw/walk'
import thisdir from '@rmw/thisdir'
import {dirname,join} from 'path'
import Oss from 'ali-oss'
import {readFile} from 'fs/promises'
import {createReadStream} from 'fs'
import push from './push'
import os from 'os'

{accessKeySecret,accessKeyId} = process.env

OSS = new Oss({
  endpoint: 'oss-cn-beijing.aliyuncs.com'
  region: 'oss-cn-zhangjiakou'
  bucket: 'i-desk'
  accessKeyId
  accessKeySecret
})

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
  dir = join DIR,'release',version
  li = []
  title = OS_NAME + " 帧享云录屏 "+version
  txt = []
  for await file from walkRel dir
    url = version+"/"+file
    txt.push "[#{file}](https://i-desk.oss-accelerate.aliyuncs.com/#{url})"
    li.push OSS.putStream(
      url
      createReadStream join(dir,file)
    )
  await Promise.all li

  await push title, txt.join('\n\n')
  return

if process.argv[1] == decodeURI (new URL(import.meta.url)).pathname
  #await main()
  console.log os.platform()
  process.exit()

