const loginservice = require('../services/loginService.js');
// 用户控制器,即api
const loginController = {
  createNewUser(req, res) {
    let user = {
      userName: req.body.userName,
      pwd: req.body.password
    };
    console.log(user);
    loginservice.addNewUser(user, function(data) {
      if (data) {
        if (data === '用户名已存在') {
          data = {
            code: 2,
            mag: '用户名已存在'
          };
        } else {
          data = {
            code: 0,
            mag: '添加用户成功',
            data: data
          };
        }
      } else {
        data = {
          code: 1,
          msg: '添加用户失败'
        };
      }
      res.send(data);
    });
  },
  ValidateUser(req, res) {
    let loginuser = {
      userName: req.body.userName,
      pwd: req.body.password
    };

    loginservice.validateUser(loginuser, function(data) {
      // if (data.code === 0) {
      //   req.session.user = data.userObj;

      // }
      if (data) {
        req.session.user = data[0];
        console.log(data[0]);
        console.log(req.session.user);
        data = {
          code: 0,
          msg: '登录成功',
          data: data
        };
      } else {
        data = {
          code: 1,
          msg: '用户名或密码错误'
        };
      }
      res.send(data);
    });
  },
  editUser(req, res) {
    let editItem = {
      userId: req.body.userId,
      userName: req.body.userName,
      pwd: req.body.password
    };
    loginservice.editUser(editItem, function(data) {
      res.send(data);
    });
  },
  delUser(req, res) {
    let delUserId = {
      userId: req.body.userId,
      page:req.body.page
    };
    loginservice.DelUser(delUserId, function(data) {
      res.send(data);
    });
  }
};
module.exports = loginController;
