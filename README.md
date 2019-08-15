# vue-login

* 用户名: `admin`
* 密码：`admin`
* 本地地址：http://localhost:8008

***

## 技术栈

* vue
* vue-router
* vuex
* axios
* element-ui
* nprogress (进度条)
* scss
* es6
* blueimp-md5 (MD5加密)
* vue-element-admin (template)

## 目录

```
.
├── LICENSE
├── README.md
├── build
├── config
├── doc 文档库
├── index.html
├── src
│   ├── App.vue
│   ├── api
│   ├── assets 资源库（image，font）
│   ├── components 公共组件
│   ├── main.js
│   ├── permission.js 权限控制
│   ├── router 路由
│   ├── store 状态库
│   ├── styles 样式库
│   ├── utils 工具库
│   └── views 页面
├── static
```

## 文档

1. 需求文档，原型 以及 UI 规范见 `doc` 目录
2. 后端 Api 接口用 svn 管理，详情问相关后台人员要接口文档

## 规范

* 建议使用 `vscode, webstorm` 编辑器
* 使用 `ESlint` 做代码检查，规则见 `.eslintrc.js` 文件
* `webstorm` eslint 自动格式化设置参考见 [链接](http://www.bubuko.com/infodetail-2454899.html?tdsourcetag=s_pctim_aiomsg)
* element 组件规范见 [vue-element-admin](https://panjiachen.github.io/vue-element-admin/#/dashboard)
* 样式使用 [BEM](https://www.cnblogs.com/dujishi/p/5862911.html) 命名规范
* javascript 请统一使用 ES6 语法
* 均使用全等符号 '==='
* 关于不确定的变量，请做好 空值/类型 的判断，建议多引入异常捕获
* 文件，变量的命名采用驼峰命名，私有变量加下划线前缀区分 ex: let _demoData = data
* 请勿使用中文拼音，严格杜绝拼写错误
* 图片使用中横线命名，图片前加模块前缀，ex：bg-demo.png  icon-delete.png 
* 该项目基于 [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/) 构建
* 参考 [vue 风格规范](https://cn.vuejs.org/v2/style-guide/)

## 构建

``` bash
npm install

常用的`.npmrc`内容
```
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=https://registry.npm.taobao.org
```

npm install

# 在 localhost:8008 中启动服务
npm run dev

# 打包项目
npm run build

# 产出报告
npm run build --report
```

***

## git管理规范

``` bash
dev 为开发分支，dev-[name] 对应开发人员私有分支，建议在各自分支开发;

代码提交前请务必确保冲突已解决，确保无任何编译 error（包括 eslint 校验提示）;

master 为用于发布版本的分支

```

***

## 浏览器支持

支持现代浏览器与 IE 10 以上

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions
