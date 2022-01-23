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

./pkg/pkg.xsh
.direnv/bin/coffee ./pkg/upload.coffee

