#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

init(){
cd $1
if [ ! -d "node_modules" ]; then
yarn --prefer-offline --frozen-lockfile
fi
cd $DIR
}

init pkg
init .

if ["$(uname)"=="Darwin"];then
init pkg/mac
fi

if ! [ -x "$(command -v xonsh)" ]; then
pip3 install -r requirements.txt
fi

./pkg/pkg.xsh

if [ $AUTO_UPDATE ];then
script=auto_update
else
script=upload
fi

.direnv/bin/coffee ./pkg/$script.coffee
