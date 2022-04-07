使用github action自动构建

github action的机器型号比较全，而且对于开源repo来说免费

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

macOS开发 证书等配置/打包后导出及上架
https://juejin.cn/post/6986175350875095071

Electron 打包Mac安装包代码签名问题解决方案
http://alonesuperman.com/?p=77

Electron Builder MacOS 签名及公证
https://xingzx.org/blog/electron-builder-macos

iOS开发：生成CertificateSigningRequest文件（CSR文件）的方法步骤
https://blog.csdn.net/CC1991_/article/details/66974135

https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html#appbundleid
