#!/usr/bin/env xonsh

$XONSH_SHOW_TRACEBACK = True
$RAISE_SUBPROC_ERROR = True

from os.path import dirname,abspath,join

DIR = dirname(dirname(abspath(join(__file__))))

# SVG 必须是正方形，不然生成MAC的图标会报错
SVG = join(DIR,"app/web/ico.svg")

from os.path import exists
from tempfile import mkdtemp,mktemp
from shutil import which


def install(bin, pkg):
  if which(bin) is None:
    brew install @(pkg)

def build_icns():
  ICNS = join(DIR,"pkg/ico/app.icns")
  if not exists(ICNS):
    install("rsvg-convert", "librsvg")
    mkdir -p @(dirname(ICNS))
    tmpdir = mkdtemp()
    pngdir = join(tmpdir,"icons.iconset")
    mkdir -p @(pngdir)
    cd @(pngdir)
    for i in range(4,10):
      size = (2**i)
      filename = f"icon_{size}x{size}"
      for j,suffix in ((1,""),(2,"@2x")):
        $size = j*size
        # 完全透明的地方mac下没法点击，必须要有个背景
        rsvg-convert -b "#00000001" -a -h $size -w $size @(SVG) > @(filename)@(suffix).png

    iconutil -c icns @(pngdir) -o @(ICNS)
    rm -rf @(tmpdir)

build_icns()

def build_ico():
  ico = join(DIR,"pkg/ico/app.ico")
  if not exists(ico):
    install('convert','imagemagick')
  png = join(DIR,"pkg/ico/app.png")
  rsvg-convert -h 512 -w 512 @(SVG) > @(png)
  convert -background transparent @(png) -define icon:auto-resize=16,32,48,64,128,256 @(ico)


build_ico()
