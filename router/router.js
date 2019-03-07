const express = require('express');
const login = require('../controller/loginController.js');
const router = express.Router();
//创建登录接口
router.post('/api/login/createUser', login.createNewUser);
module.exports = router;