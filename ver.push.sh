#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

if [ ! -f "./pkg/ico/app.icns" ]; then
./pkg/ico.xsh
fi

./.direnv/bin/coffee ./pkg/package_json.coffee

cd pkg/app


VER=v`cat package.json| jq '.version' -r`


cd $DIR
git add app
git add -u
git add ver/*.md
git commit -m '$VER' || true

git tag -d $VER | true
git tag $VER
git push origin $VER -f
git push
