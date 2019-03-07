const mongoose = require('mongoose');
const testmodels = require('../models/index.js');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/reactBlog');
console.log("连接数据库");
//为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'));

db.once('open', () => console.log('Mongo connection successed'));
module.exports = testmodels;