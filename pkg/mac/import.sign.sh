#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

# https://localazy.com/blog/how-to-automatically-sign-macos-apps-using-github-actions
security create-keychain -p $keychain_password build.keychain
security default-keychain -s build.keychain
security unlock-keychain -p $keychain_password build.keychain
security import $DIR/dev.id.p12 -k build.keychain -P $keychain_password -T /usr/bin/codesign

# TODO 注释掉
security find-identity -v
