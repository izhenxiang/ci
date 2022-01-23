利用github action自动构建

之所以用github action是因为他机器型号比较全而且不要钱

国内配置 `.yarnrc` 如下

```
registry "http://mirrors.cloud.tencent.com/npm/"
electron_custom_dir "17.0.0-beta.1"
electron_custom_filename "electron-v17.0.0-beta.1-darwin-x64.zip"
electron_mirror "https://npm.taobao.org/mirrors/electron/"
```

package.json 中要写`=17.0.0-beta.1`，把'^'改成'='
