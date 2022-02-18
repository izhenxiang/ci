// Generated by CoffeeScript 2.6.1
//!/usr/bin/env coffee
var DIR;

process.env.DEBUG = 'electron-notarize*';

import {
  appBundleId
} from './config.mjs';

import {
  notarize
} from 'electron-notarize';

import {
  join,
  dirname
} from 'path';

import {
  signAsync
} from 'electron-osx-sign';

import thisdir from '@rmw/thisdir';

DIR = thisdir(import.meta);

(async() => {
  var app, argv, entitlements, env;
  ({argv, env} = process);
  [app] = argv.slice(2);
  entitlements = join(DIR, 'i.plist');
  console.log('sign', app);
  await signAsync({
    app,
    verbose: true,
    hardenedRuntime: true,
    //gatekeeperAssess:false
    'gatekeeper-assess': false,
    entitlements,
    'entitlements-inherit': entitlements
  });
  console.log('signed');
  console.log('开始公证');
  await notarize({
    appBundleId,
    //tool:'notarytool'
    appPath: app,
    teamId: env.teamId,
    appleId: env.appleId,
    appleIdPassword: env.appleIdPassword
  });
  console.log('公证上传完成');
  return process.exit();
})();
