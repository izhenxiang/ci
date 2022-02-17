#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./quickpkg/quickpkg ../../release/帧享-darwin-x64/帧享.app --output ../../release/0.0.94/帧享-darwin-x64.pkg

