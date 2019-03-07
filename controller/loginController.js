const loginservice = require('../services/loginService.js');
// 用户控制器,即api
const loginController = {
  createNewUser(req, res) {
    let user = {
      userName: req.body.userName,
      pwd: req.body.password
    }
    loginservice.addNewUser(user, function (data) {
      res.send(data);
    });
  },
  ValidateUser(req, res) {
    user = {
      userName: req.body.userName,
      pwd: req.body.password
    }
    loginservice.validateUser(user, function (data) {
      res.send(data);
    });

  },
  editUser(req, res) {
    let editItem = {
      userId: req.body.userId,
      userName: req.body.userName,
      pwd: req.body.password
    }
    loginservice.editUser(editItem, function (data) {
      res.send(data);
    })

  },
  delUser(req, res) {
    let delUserId = {

    }

  }


}
module.exports = loginController;