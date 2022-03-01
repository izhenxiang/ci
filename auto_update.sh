#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

AUTO_UPDATE=1 ./build.sh

