#!/usr/bin/env coffee

import {tmpdir} from 'os'
import thisdir from '@rmw/thisdir'
import {walkRel} from '@rmw/walk'
import {readFile} from 'fs/promises'
import {createReadStream} from 'fs'
import {join,dirname} from 'path'
import asar from 'asar'
import {createHash} from 'crypto'

DIR = dirname thisdir import.meta

export default main = =>
  {productName} = JSON.parse await readFile(
    join DIR,'app/package.json'
    'utf8'
  )

  app = join DIR,"release/#{productName}-darwin-x64/#{productName}.app/Contents/Resources/app.asar"

  hash = createHash 'sha3-256'
  hash = new Promise (resolve)=>
    createReadStream(
      app
    ).on(
      'data'
      hash.update.bind(hash)
    ).on(
      'end'
      =>
        resolve hash
    )
  console.log hash
  #console.log tmpdir()
  #console.log asar.extractAll(
  #  app
  #)
  #console.log app
  return

do =>
  await main()
  process.exit()

