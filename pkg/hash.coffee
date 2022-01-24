#!/usr/bin/env coffee

import {brotliCompress as _brotliCompress} from 'zlib'
import { promisify } from 'util'
brotliCompress = promisify _brotliCompress
import {upload} from './oss'
import {encode} from 'urlsafe-base64'
import {tmpdir} from 'os'
import thisdir from '@rmw/thisdir'
import {rm,readFile,readdir} from 'fs/promises'
import {createReadStream} from 'fs'
import {join,dirname} from 'path'
import asar from 'asar'
import {createHash} from 'crypto'

DIR = dirname thisdir import.meta

HASH = 'sha3-256'

hash_bin = (bin)=>
  encode createHash(HASH).update(bin).digest()



hash = (fp)=>
  h = createHash HASH
  new Promise (resolve)=>
    createReadStream(
      fp
    ).on(
      'data'
      h.update.bind(h)
    ).on(
      'end'
      =>
        resolve encode h.digest()
    )


walkRel = (dir, len)->
  if len == undefined
    len = dir.length+1
  n = 0
  for i from await readdir(dir, { withFileTypes: true })
    p = join(dir, i.name)
    if i.isDirectory()
      yield from walkRel(p,len)
    else
      ++n
      yield [
        0
        p[len..]
      ]
  if not n
    yield [1,dir[len..]]
  return

pack = (app, dir)=>
  asar.extractAll(
    app
    dir
  )
  dir_li = []
  for await [isDir, fp] from walkRel(dir)
    if isDir
      dir_li.push fp
    else
      bin = await brotliCompress await readFile(join(dir,fp))
      console.log bin.length, hash_bin bin
  console.log dir_li
  #console.log file,await hash(join dir,file)
  return

export default main = =>
  {productName} = JSON.parse await readFile(
    join DIR,'app/package.json'
    'utf8'
  )

  app = join DIR,"release/#{productName}-darwin-x64/#{productName}.app/Contents/Resources/app.asar"

  outdir = join tmpdir(), await hash(app)

  try
    await pack app, outdir
  finally
    await rm(outdir,recursive: true, force: true)
  return

do =>
  await main()
  process.exit()

