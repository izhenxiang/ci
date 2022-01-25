#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./.direnv/bin/coffee ./pkg/package_json.coffee

git add app
git add -u
git commit -m '⭕️' || true

if [ ! -f "./pkg/ico/app.icns" ]; then
./misc/ico.xsh
fi

cd pkg/app


VER=v`cat package.json| jq '.version' -r`

cd $DIR

git add .
git add -u
git commit -m $VER
git tag $VER
git push origin $VER
git push
