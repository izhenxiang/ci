#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

if [ ! -f "./pkg/ico/app.icns" ]; then
./pkg/ico.xsh
fi

cd pkg/app


VER=v`cat package.json| jq '.version' -r`

app_package_json=$DIR/app/package.json

if [ ! -f "$app_package_json"]; then
cp package.json $app_package_json
fi

cd $DIR

git tag -d $VER | true
git tag $VER
git push origin $VER -f
git push
