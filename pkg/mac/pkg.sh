#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
cd $DIR
set -ex

KEY=$(security find-identity -v|grep "3rd Party Mac Developer Installer"|awk -F\" '{print $2}')

productbuild --component ../../release/$1-mas-$2/$1.app /Applications --sign "$KEY" ../../release/$3/$1-$3-$2.pkg
