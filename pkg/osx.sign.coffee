#!/usr/bin/env coffee

import {join} from 'path'
import {signAsync} from 'electron-osx-sign'
import thisdir from '@rmw/thisdir'

DIR = thisdir import.meta

do =>
  entitlements = join DIR,'mac/i.plist'
  app = '/Users/z/git/rv/ci/release/帧享云录屏-darwin-x64/帧享云录屏.app'
  await signAsync {
    app
    verbose:true
    identity:'Apple Development: zsp042@gmail.com (TPD3V6ZM8Z)'
    #entitlements
    #'entitlements-inherit':entitlements
  }
