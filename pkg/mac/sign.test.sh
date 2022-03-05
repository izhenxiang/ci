#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./import.sign.sh
node ./sign.js ../../release/帧享-darwin-x64/帧享.app
