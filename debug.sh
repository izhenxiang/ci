#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

NAME=$(cat pkg/app/package.json | jq -r ".productName")

exec ./release/$NAME-darwin-x64/帧享云录屏.app/Contents/MacOS/$NAME
