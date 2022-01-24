#!/usr/bin/env xonsh

p"~/.xonshrc".exists() && source ~/.xonshrc

$XONSH_SHOW_TRACEBACK = True
$RAISE_SUBPROC_ERROR = True
$XONSH_TRACE_SUBPROC = True

import shutil
from pathlib import Path
from os import remove, makedirs, getenv
from mako.template import Template
from os.path import dirname,abspath,join,exists
from shutil import which
from json import loads,dumps
import sys
import platform

FOR_AUTO_UPDATE = getenv('AUTO_UPDATE')

def read(fp):
  with open(fp,encoding="utf-8") as f:
    return f.read()

def write(fp,txt):
  with open(fp,"w",encoding="utf-8") as o:
    o.write(txt)

ROOT = dirname(dirname(abspath(__file__)))

cat @(ROOT)/pkg/app/package.json | jq -c > @(ROOT)/app/package.json

APP = join(ROOT,"app")
PKG = join(ROOT,"pkg")
TEMPLATE = join(PKG,"template")
RELEASE = join(ROOT,"release")
PKG_JSON = join(PKG,"app/package.json")

def build(ico, args=""):
  cd @(APP)
  exe = f"npx --yes electron-packager . --overwrite  --icon={PKG}/ico/app.{ico} --prune=true --out={RELEASE} --asar".split(' ')
  @(exe+args.split(' '))
  cd @(ROOT)

PACKAGE = loads(read(PKG_JSON))

NAME = PACKAGE['productName']
VERSION = PACKAGE['version']
makedirs(f"{RELEASE}/{VERSION}", exist_ok=True)

def _darwin(platform, arch):
  build(
    "icns",
    f"--platform={platform} --arch={arch}"
  )
  if FOR_AUTO_UPDATE:
    return
  config = {
    "title": NAME,
    "format": "UDRO",
    "icon": f"{PKG}/ico/app.icns",
    "contents": [{
      "x": 448,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file",
      "path": f"./{NAME}-{platform}-{arch}/{NAME}.app"
    }
    ],
    "window": {
      "size": {
        "width": 640,
        "height": 480
      }
    }
  }
  fp = join(RELEASE,f"mac.{platform}.{arch}.json")
  write(fp, dumps(config))

  name = NAME
  if platform != "darwin":
    name += "-"+platform
  app_name = f"{name}-{VERSION}-{arch}.dmg"
  app = join(
    RELEASE,
    VERSION+'/'+app_name
  )
  tmp = join(RELEASE, f"tmp.{app_name}")
  rm -rf @(app)
  rm -rf @(tmp)
  npx --yes appdmg @(fp) @(tmp)
  rm -rf @(fp)
  hdiutil convert @(tmp) -format ULMO -o @(app)
  rm -rf @(tmp)

def darwin():
  for arch in ['x64','arm64']:
    for platform in ['darwin','mas']:
      _darwin(platform, arch)
      if FOR_AUTO_UPDATE:
        return


def win():

  build("ico")

  inno = "inno.iss"
  write(
    join(RELEASE,inno),
    Template(read(join(TEMPLATE,inno))).render(**PACKAGE)
  )

  arch = 'x64'

  cd @(RELEASE)
  shutil.rmtree(NAME, ignore_errors=True)
  Path(NAME+f"-win32-{arch}").rename(NAME)

  for i in (
    join(NAME, "LICENSE"),
    join(NAME, "LICENSES.chromium.html")
  ):
    remove(i)

  pdir = "C:\\Program Files (x86)\\Inno Setup 6\\"
  ChineseSimplified = pdir+'Languages\\ChineseSimplified.isl'
  if not exists(ChineseSimplified):
    import urllib.request
    response = urllib.request.urlopen('https://raw.githubusercontent.com/jrsoftware/issrc/main/Files/Languages/Unofficial/ChineseSimplified.isl')
    with open(ChineseSimplified,"wb") as f:
      f.write(response.read())
  @(pdir+"ISCC.exe") .\@(inno)

  out = f"{VERSION}/{NAME}-{VERSION}-win.{arch}."
  mv app.exe @(out)exe

  try:
    import py7zr
  except ImportError:
    pip3 install py7zr
    import py7zr

  with py7zr.SevenZipFile(f"{out}7z", 'w') as z:
    z.writeall('./'+NAME)

def _platform():
  platform = sys.platform
  if platform.startswith("linux"):
    platform = platform[:5]
  elif platform.startswith("win"):
    platform = platform[:3]
  return platform

locals()[_platform()]()

