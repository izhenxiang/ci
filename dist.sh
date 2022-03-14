#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./build.sh

.direnv/bin/coffee ./pkg/auto_update.coffee
