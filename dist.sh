#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./build.sh

if [ "$(uname)" == "Darwin" ]; then
.direnv/bin/coffee ./pkg/auto_update.coffee
fi
