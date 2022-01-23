#!/usr/bin/env coffee

import {walkRel} from '@rmw/walk'
import thisdir from '@rmw/thisdir'
import {dirname,join} from 'path'
import Oss from 'ali-oss'
import {readFile} from 'fs/promises'
import {createReadStream} from 'fs'
import push from './push'

{accessKeySecret,accessKeyId} = process.env

OSS = new Oss({
  endpoint: 'oss-cn-beijing.aliyuncs.com'
  region: 'oss-cn-zhangjiakou'
  bucket: 'i-desk'
  accessKeyId
  accessKeySecret
})

DIR = dirname thisdir import.meta
{version} = JSON.parse await readFile(
  join DIR,'app/package.json'
  'utf8'
)

export default main = =>
  dir = join DIR,'release',version
  li = []
  txt = []
  for await file from walkRel dir
    txt.push "[#{file}](https://i-desk.oss-accelerate.aliyuncs.com/#{url})"
    url = version+"/"+file
    li.push OSS.putStream(
      url
      createReadStream join(dir,file)
    )
  await Promise.all li

  title = "苹果 "+version
  await push title, txt.join('\n')
  return

if process.argv[1] == decodeURI (new URL(import.meta.url)).pathname
  await main()
  process.exit()

