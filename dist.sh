#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

if [ ! -d dist ] ; then
tag=$(node -e "console.log(require('./app/package.json').version)")
git clone --depth=1 --branch v$tag https://github.com/izhenxiang/dist.git
else
cd dist
git -C dist pull
fi

./build.sh


.direnv/bin/coffee ./pkg/auto_update.coffee
