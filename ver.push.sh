#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

if [ ! -f "./pkg/ico/app.icns" ]; then
./pkg/ico.xsh
fi

./.direnv/bin/coffee ./pkg/package_json.coffee

cd pkg/app


VER=`cat package.json| jq '.version' -r`


cd $DIR
git add app
git add -u
git add ver/$VER.md
git commit -m "v$VER" || true

git tag -d v$VER | true
git tag v$VER
git push origin v$VER -f
git push
