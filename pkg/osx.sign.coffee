#!/usr/bin/env coffee

import {join,dirname} from 'path'
import {signAsync} from 'electron-osx-sign'
import thisdir from '@rmw/thisdir'

DIR = thisdir import.meta

do =>
  entitlements = join DIR,'mac/i.plist'
  app = join dirname(DIR),'release/帧享-darwin-x64/帧享.app'
  console.log app

  console.log 'sign'
  await signAsync {
    app
    verbose:true
    entitlements
    'entitlements-inherit':entitlements
  }
  console.log 'signed'
  process.exit()
