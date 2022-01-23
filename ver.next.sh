#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

git add app
git add -u
git commit -m '⭕️' || true

if [ ! -f "./pkg/ico/app.icns" ]; then
./misc/ico.xsh
fi

cd pkg/app

npm version patch

VER=v`cat package.json| jq '.version' -r`

cd $DIR

cat pkg/app/package.json | jq -c > app/package.json
git add -u
git commit -m $VER
git tag $VER
git push $VER

