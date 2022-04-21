#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

git pull

if [ ! -f "./pkg/ico/app.icns" ]; then
./pkg/ico.xsh
fi

cd app

VER=`cat package.json| jq '.version' -r`

tag(){
git commit -m "v$VER" || true
git tag -d v$VER | true
git tag v$VER
git push origin v$VER -f
}

cd $DIR/dist
tag

cd $DIR
git add -u
git add ver/$VER.md || true
tag
git push
