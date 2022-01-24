#!/usr/bin/env coffee

import Oss from 'ali-oss'

{accessKeySecret,accessKeyId} = process.env

OSS = new Oss({
  endpoint: 'oss-cn-beijing.aliyuncs.com'
  region: 'oss-cn-zhangjiakou'
  bucket: 'i-desk'
  accessKeyId
  accessKeySecret
  timeout: 120000
  retryMax: 9
})

export upload = (url, file)=>
  new Promise (resolve)=>
    OSS.multipartUpload(
      url
      file
    ).then(
      resolve
      (err)=>
        console.error err
        await upload file
        resolve()
        return
    )
