#!/usr/bin/env xonsh

import sys
from os.path import dirname,abspath,join,exists

PWD=dirname(abspath(__file__))
sys.path.insert(0, PWD)

p"~/.xonshrc".exists() && source ~/.xonshrc

$XONSH_SHOW_TRACEBACK = True
$RAISE_SUBPROC_ERROR = True
$XONSH_TRACE_SUBPROC = True

from config import NAME,appBundleId
from json import loads,dumps
from mako.template import Template
from os import remove, makedirs, getenv
from pathlib import Path
from shutil import which
import platform
import shutil

FOR_AUTO_UPDATE = getenv('AUTO_UPDATE')
ROOT = dirname(PWD)

def read(fp):
  with open(fp,encoding="utf-8") as f:
    return f.read()

def write(fp,txt):
  with open(fp,"w",encoding="utf-8") as o:
    o.write(txt)


PKG = join(ROOT,"pkg")
TEMPLATE = join(PKG,"template")
RELEASE = join(ROOT,"release")

app_package_json = "package.json"

PKG_JSON = join(ROOT,'app',app_package_json)

def build(ico,arch, args=""):
  cd dist/@(sys.platform)-@(arch)
  yarn
  exe = f"npx --yes electron-packager . --overwrite  --icon={PKG}/ico/app.{ico} --prune=true --out={RELEASE} --asar --name {NAME} --appBundleId {appBundleId}".split(' ')
  @(exe+args.split(' '))
  cd @(ROOT)

PACKAGE = loads(read(PKG_JSON))

VERSION = PACKAGE['version']
makedirs(f"{RELEASE}/{VERSION}", exist_ok=True)

def _darwin(platform, arch):
  build(
    "icns",
    arch,
    f"--platform={platform} --arch={arch}"
  )
  if FOR_AUTO_UPDATE:
    return

  app_path = f"{NAME}-{platform}-{arch}/{NAME}.app"
  app_fullpath = f"{RELEASE}/{app_path}"
  node @(PKG)/mac/sign.js @(app_fullpath)

  is_mas = platform == "mas"

  if is_mas:
    suffix = "pkg"
  else:
    suffix = "dmg"

  app_name = f"{NAME}-{VERSION}-{arch}.{suffix}"

  app = join(
    RELEASE,
    VERSION+'/'+app_name
  )

  rm -rf @(app)

  if is_mas:
    @(PKG)/mac/pkg.sh @(NAME) @(arch) @(VERSION)
  else:
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
        "path": f"../{app_path}"
      }
      ],
      "window": {
        "size": {
          "width": 640,
          "height": 480
        }
      }
    }

    tmpdir = join(RELEASE,f"tmp")
    rm -rf @(tmpdir)
    mkdir -p @(tmpdir)
    fp = join(tmpdir,f"mac.{platform}.{arch}.json")

    write(fp, dumps(config))

    tmp = join(tmpdir, f"{app_name}")

    npx --yes appdmg @(fp) @(tmp)
    hdiutil convert @(tmp) -format UDZO -o @(app)
    rm -rf @(tmpdir)


def darwin():
  @(PKG)/mac/import.sign.sh

  for arch in ['x64','arm64']:
    for platform in ['darwin','mas']:
      _darwin(platform, arch)
      if FOR_AUTO_UPDATE:
        return


def win():

  arch = 'x64'
  build("ico", arch)

  inno = "inno.iss"
  write(
    join(RELEASE,inno),
    Template(read(join(TEMPLATE,inno))).render(**PACKAGE)
  )


  cd @(RELEASE)
  shutil.rmtree(NAME, ignore_errors=True)

  app_path = NAME+f"-win32-{arch}"
  Path(app_path).rename(NAME)

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

  Path(NAME).rename(app_path)

def _platform():
  platform = sys.platform
  if platform.startswith("linux"):
    platform = platform[:5]
  elif platform.startswith("win"):
    platform = platform[:3]
  return platform

locals()[_platform()]()
