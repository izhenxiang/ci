#!/usr/bin/env coffee

import { unpack, pack } from 'msgpackr'
import {brotliCompress as _brotliCompress} from 'zlib'
import { promisify } from 'util'
brotliCompress = promisify _brotliCompress
import Oss from './oss'
import {encode} from 'urlsafe-base64'
import {tmpdir} from 'os'
import thisdir from '@rmw/thisdir'
import {rm,readFile,readdir} from 'fs/promises'
import {createReadStream} from 'fs'
import {join,dirname} from 'path'
import asar from 'asar'
import {createHash} from 'crypto'

DIR = dirname thisdir import.meta
OSS = Oss 'i-ver'
HASH = 'sha3-256'

hash_bin = (bin)=>
  createHash(HASH).update(bin).digest()[..15]

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
        resolve encode h.digest()[..15]
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


put = (bin)=>
  bin = await brotliCompress bin
  h = hash_bin(bin)
  await OSS.put_if_not_exist(
    encode(h)
    bin
  )
  h

auto_update = (app, dir)=>
  asar.extractAll(
    app
    dir
  )
  dir_li = []
  file_li = []
  hash_li = []
  for await [isDir, fp] from walkRel(dir)
    console.log fp
    if isDir
      dir_li.push fp
    else
      file_li.push fp
      hash_li.push await put await readFile(join(dir,fp))

  ver = pack([
    dir_li, file_li, hash_li
  ])
  ver = await put(ver)
  console.log ver
  #console.log file,await hash(join dir,file)
  return

export default main = =>
  {productName, version} = JSON.parse await readFile(
    join DIR,'app/package.json'
    'utf8'
  )
  console.log version
  app = join DIR,"release/#{productName}-darwin-x64/#{productName}.app/Contents/Resources/app.asar"

  outdir = join tmpdir(), await hash(app)

  try
    await auto_update app, outdir
  finally
    await rm(outdir,recursive: true, force: true)
  return

do =>
  await main()
  process.exit()

