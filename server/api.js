// const models = require('./db.js');
// const express = require('express');
// const router = express.Router();

// /************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/


// // 创建账号接口
// router.post('/api/login/createAccount', (req, res) => {
//   // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
//   let newAccount = new models.Login({
//     account: req.body.account,
//     password: req.body.password
//   });
//   // 保存数据newAccount数据进mongoDB
//   newAccount.save((err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send('createAccount successed');
//     }
//   });
// });
// // 获取已有账号接口
// router.get('/api/test', (req, res) => {
//   // 通过模型去查找数据库
//   models.Login.find((err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

// module.exports = router;