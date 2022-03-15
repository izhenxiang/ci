#!/usr/bin/env python3

import os
import oss2

auth = oss2.Auth(os.getenv('accessKeyId'), os.getenv('accessKeySecret'))
bucket = oss2.Bucket(auth, 'https://oss-cn-beijing.aliyuncs.com', 'i-desk-ver')
prefix = ""

# 删除指定前缀的文件。
for obj in oss2.ObjectIterator(bucket, prefix=prefix):
  print(obj.key)
  bucket.delete_object(obj.key)
