#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

# https://localazy.com/blog/how-to-automatically-sign-pkgos-apps-using-github-actions
security create-keychain -p $KEYCHAIN_PASSWORD pkg.keychain || true
security default-keychain -s pkg.keychain
security unlock-keychain -p $KEYCHAIN_PASSWORD pkg.keychain

p12(){
  security import $DIR/$1.p12 -k pkg.keychain -P $P12_PASSWORD -T /usr/bin/codesign -T /usr/bin/productbuild -T /usr/bin/security > /dev/null
}

p12 dev.id
p12 3rd
p12 mas
p12 3rd.app

security set-key-partition-list -S apple-tool:,apple:,codesign:,productbuild: -s -k $KEYCHAIN_PASSWORD pkg.keychain > /dev/null

#curl -o wwdr_2023.cer 'https://developer.apple.com/certificationauthority/AppleWWDRCA.cer'
security add-certificates -k pkg.keychain wwdr_2023.cer || true

#curl -o wwdr_2030.cer 'https://www.apple.com/certificateauthority/AppleWWDRCAG3.cer'
security add-certificates -k pkg.keychain wwdr_2030.cer || true

# 将钥匙串的设置更改为“无超时”
security set-keychain-settings pkg.keychain

# 看看是否导入成功
security find-identity -v
