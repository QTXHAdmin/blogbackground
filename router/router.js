const express = require('express');
const login = require('../controller/loginController.js');
const boke = require('../controller/bokeController.js');
const router = express.Router();
//创建登录接口
router.post('/login/createUser', login.createNewUser);
router.post('/login', login.ValidateUser);
router.post('/login/edit', login.editUser);
router.get('/login/del', login.delUser);

//后台博客接口
router.post('/addblog', boke.createNewBlog);
router.get('/getblog/', boke.togetBlogList);
router.post('/editblog/:id', boke.toeditBlog);
router.get('/delblog', boke.toDelBlog);
router.post('/blog', boke.getBlog);
module.exports = router;
