#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

if [ ! -d dist ] ; then
git clone https://e.coding.net/izhenxiang/desk/dist.git --depth=1
else
cd dist
git -C dist pull
fi

./build.sh

.direnv/bin/coffee ./pkg/auto_update.coffee
