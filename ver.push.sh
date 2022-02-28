#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

if [ ! -f "./pkg/ico/app.icns" ]; then
./pkg/ico.xsh
fi

cd pkg/app


VER=v`cat package.json| jq '.version' -r`

cd $DIR

git tag $VER
git push origin $VER
git push
