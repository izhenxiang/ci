#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./.direnv/bin/coffee ./pkg/package_json_next.coffee


