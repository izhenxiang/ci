#!/usr/bin/env coffee

import {appBundleId} from './config.mjs'
import {notarize} from 'electron-notarize'
import {join,dirname} from 'path'
import {signAsync} from 'electron-osx-sign'
import thisdir from '@rmw/thisdir'

DIR = thisdir import.meta

do =>
  {argv,env} = process
  [app] = argv.slice(2)

  ###
  entitlements = join DIR,'i.plist'
  console.log 'sign', app
  await signAsync {
    app
    verbose:true
    entitlements
    'entitlements-inherit':entitlements
  }
  console.log 'signed'
  ###

  console.log '开始公证'
  await notarize({
    appBundleId
    tool:'notarytool'
    appPath:app
    teamId: env.teamId
    appleId:env.appleId
    appleIdPassword:env.appleIdPassword
  })
  console.log '公证上传完成'

  process.exit()
