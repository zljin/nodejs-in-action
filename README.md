# nodejs-in-action

> nodejs快速扫盲

## feature

Node.js 运行在服务端的后端jsm，像springboot一样可以内置HTTP服务器模块，快速搭建http服务器等后台服务

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，它使得 JavaScript 可以脱离浏览器运行在服务器端。

Node.js 的核心特性之一是其非阻塞 I/O适合高并发，异步编程的直接体现就是回调


## 工具链: 包管理工具npm

> npm类似maven 和 pip的一种js的包管理工具

> pom.xml:package.json node_modules:maven_repo

https://www.runoob.com/nodejs/nodejs-npm.html


vscode 配置nodejs运行开发环境:

安装以下插件: Node.js Extension Pack,Code Runner,JavaScript (ES6) code snippets


## code content

服务代码 server.js

回调函数 callback1.js callback2.js

事件循环 eventloop1.js

事件驱动 eventdriver1.js

全局对象和属性 global.js

包的自定义导入 myModule.js


## express 

> node.js Web应用框架,可用于快速创建一个RESTful API

代码目录 src/express/server.js

https://www.runoob.com/nodejs/nodejs-express-framework.html

npm install express

### 用户增删改查接口

- 创建用户: `POST /api/users`
- 获取所有用户: `GET /api/users`
- 获取用户详情: `GET /api/users/:id`
- 更新用户: `PUT /api/users/:id`
- 删除用户: `DELETE /api/users/:id`

初始用户数据存储在 `src/express/user.json` 文件中。

### 跨域请求

使用 `cors` 中间件来支持跨域请求。

```bash
npm install cors
```