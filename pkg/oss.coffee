#!/usr/bin/env coffee

import OSS from 'ali-oss'

{accessKeySecret,accessKeyId} = process.env

class Oss
  constructor:(bucket)->
    @_ = new OSS({
      endpoint: 'oss-cn-beijing.aliyuncs.com'
      region: 'oss-cn-zhangjiakou'
      bucket # 'i-desk'
      accessKeyId
      accessKeySecret
      #timeout:5000
      #retryMax: 9
    })


  put_if_not_exist:(url,bin)->
    try
      await @_.head(url)
    catch err
      if err.status != 404
        throw err
      loop
        try
          return await @_.put(url,bin)
        catch err
          console.trace err
          continue
    return

  upload:(url, file, checkpoint)->
    new Promise (resolve)=>
      @_.multipartUpload(
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
          console.error url, err
          await @upload url, file, checkpoint
          resolve()
          return
      )

export default (args...)=>
  new Oss(...args)
