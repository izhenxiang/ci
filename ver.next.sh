#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

./.direnv/bin/coffee ./pkg/package_json.coffee

git add app
git add -u
git add ver/*.md
git commit -m '⭕️' || true

./ver.push.sh
