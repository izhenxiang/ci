#!/usr/bin/env coffee

import {join,dirname} from 'path'
import {signAsync} from 'electron-osx-sign'
import thisdir from '@rmw/thisdir'

DIR = thisdir import.meta


do =>
  [app] = process.argv.slice(2)
  entitlements = join DIR,'mac/i.plist'
  console.log 'sign', app
  await signAsync {
    app
    verbose:true
    entitlements
    'entitlements-inherit':entitlements
  }
  console.log 'signed'
  process.exit()
