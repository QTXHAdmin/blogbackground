// 引入编写好的api
const api = require('../router/router.js');
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 引入Express
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const validateUserLogin = require('./validate.js');
const app = express();

app.use(cors());
app.use(cookieParser('sessionuser'));
app.use(session({
  secret: 'sessionuser',
  resave: true,
  saveUninitialized: true
}));
app.use(validateUserLogin);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(api);
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
// app.use(express.static(path.resolve(__dirname, '../dist')))
// app.use(express.static(path.resolve(__dirname, '../public')));
// 因为是单页应用 所有请求都走/dist/index.html
// app.get('*', function (req, res) {
//   // const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//   const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8')
//   res.send(html)
// })
// 监听8088端口
app.listen(8088);
console.log('success listen…………');