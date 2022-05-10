#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./import.sign.sh
node ./sign.js ../../release/帧想-darwin-x64/帧想.app
