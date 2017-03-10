## MINA CLI (微信小程序脚手架)

****************
### Usage
用于快速创建微信小程序。没有很复杂的功能，只是方便最常用的功能。

避免每次创建新的 demo 还需要重新新建文件。

避免每次都输入 `mkdir x, touch x.json, touch x.js, touch x.wxml` 等。

执行命令，直接生成相应的目录和文件，以及在 app.json 中注册相应的模块。

由于微信开发工具自带了压缩，编译等功能，此处不重复写此功能。

*************
### How
``` javascript
git clone this_project
minaapp init
minaapp create module
```

#### minaapp init
输入 `minaapp init`, 此时 terminal 会提示输入项目名称，输入项目名称即可。

#### minaapp create
输入 `minaapp create yourModuleName`, 输入需要的 pages 下面的模块即可。
支持一次性创建多个模块，使用逗号隔开即可。

****************
### Examples
``` javascript
npm install
minaapp init myapp
minaapp create user,log
```
会生成一个 myapp 小程序， 并且在 pages 目录下生成 user,log 等模块。

user,log 中自动带有相应的 user.wxml, user.json 等等文件。

app.json 中已注册好 user 和 log 模块。

利用微信开发者工具打开创建好的 myapp 文件即可。

下次再新建模块，同样 `minaapp create user,log`
************
### Sample image
![](http://www.cailidan.cn/images/picinstruct.png)

*****************
###
未发布到 npm.js 中。直接 clone 本项目即可。
