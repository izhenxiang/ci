#!/usr/bin/env coffee

import thisdir from '@rmw/thisdir'
import {walkRel} from '@rmw/walk'
import {readFile} from 'fs/promises'
import {join,dirname} from 'path'

DIR = dirname thisdir import.meta

export default main = =>
  {productName} = JSON.parse await readFile(
    join DIR,'app/package.json'
    'utf8'
  )

  app = join DIR,"release/#{productName}-darwin-x64/#{productName}.app/Contents/Resources/app.asar"

  console.log app
  return

do =>
  await main()
  process.exit()

