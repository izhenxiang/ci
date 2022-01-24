#!/usr/bin/env coffee

import Oss from 'ali-oss'

{accessKeySecret,accessKeyId} = process.env

OSS = new Oss({
  endpoint: 'oss-cn-beijing.aliyuncs.com'
  region: 'oss-cn-zhangjiakou'
  bucket: 'i-desk'
  accessKeyId
  accessKeySecret
  retryMax: 9
})

export upload = (url, file, checkpoint)=>
  new Promise (resolve)=>
    OSS.multipartUpload(
      url
      file
      {
        checkpoint
        progress:(p,ckp)=>
          console.log (Math.round(p*10000)/100)+"%", ckp.name
          checkpoint = ckp
          return
      }
    ).then(
      resolve
      (err)=>
        console.error err
        await upload url, file, checkpoint
        resolve()
        return
    )
