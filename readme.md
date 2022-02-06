利用github action自动构建

之所以用github action是因为他机器型号比较全而且不要钱

国内配置 `.yarnrc` 如下

```
registry "https://registry.npm.taobao.org"
disturl "https://npm.taobao.org/dist"
electron_mirror "https://npm.taobao.org/mirrors/electron/"
```


## 调试

./debug.sh

## 如何签名

https://github.com/electron/electron-osx-sign/issues/77
