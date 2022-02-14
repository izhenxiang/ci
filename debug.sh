#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

NAME=$(cat pkg/app/package.json | jq -r ".productName")

AUTO_UPDATE=1 ./pkg/pkg.xsh
exec ./release/$NAME-darwin-x64/帧享.app/Contents/MacOS/$NAME
