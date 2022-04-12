#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

git pull

if [ ! -f "./pkg/ico/app.icns" ]; then
./pkg/ico.xsh
fi

cd pkg/app

VER=`cat package.json| jq '.version' -r`

cd $DIR
git add -u
git add ver/$VER.md
git commit -m "v$VER" || true

git tag -d v$VER | true
git tag v$VER
git push origin v$VER -f
git push
