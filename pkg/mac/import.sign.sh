#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

# https://localazy.com/blog/how-to-automatically-sign-macos-apps-using-github-actions
security create-keychain -p $P12_PASSWORD build.keychain || true
security default-keychain -s build.keychain
security unlock-keychain -p $P12_PASSWORD build.keychain

p12(){
  security import $DIR/$1.p12 -k build.keychain -P $P12_PASSWORD -T /usr/bin/codesign
}

p12 dev.id
p12 3rd
p12 mas
p12 3rd.app

security set-key-partition-list -S apple-tool:,apple:,codesign: -s -k $P12_PASSWORD build.keychain > /dev/null

#curl -o wwdr_2023.cer 'https://developer.apple.com/certificationauthority/AppleWWDRCA.cer'
security add-certificates -k build.keychain wwdr_2023.cer || true

#curl -o wwdr_2030.cer 'https://www.apple.com/certificateauthority/AppleWWDRCAG3.cer'
security add-certificates -k build.keychain wwdr_2030.cer || true

# 将钥匙串的设置更改为“无超时”
security set-keychain-settings build.keychain

# 看看是否导入成功
# security find-identity -v
export SIGN_IMPORTED=1
