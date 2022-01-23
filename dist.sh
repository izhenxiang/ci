#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

init(){
cd $1
if [ ! -d "node_modules" ]; then
yarn
fi
cd $DIR
}

init app
init pkg
init .

if ! [ -x "$(command -v xonsh)" ]; then
pip3 install -r requirements.txt
fi

if [ ! -f "./pkg/ico/app.icns" ]; then
./misc/ico.xsh
fi

git add app
git add -u
git commit -m '⭕️' || true

cd pkg/app

npm version patch

VER=`cat package.json| jq '.version' -r`

cd $DIR

cat pkg/app/package.json | jq -c > app/package.json
git add -u
git commit -m "v$VER"
git push

./pkg/pkg.xsh
.direnv/bin/coffee ./pkg/upload.coffee

