const express = require('express');
const login = require('../controller/loginController.js');
const router = express.Router();
//创建登录接口
router.post('/login/createUser', login.createNewUser);
router.post('/login', login.ValidateUser);
router.post('/login/edit', login.editUser);
router.get('/login/del', login.delUser);
module.exports = router;