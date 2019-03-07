const loginservice = require('../services/loginService.js');

// 用户控制器,即api
const loginController = {
  createNewUser(req, res) {

    let user = {
      userName: req.body.userName,
      pwd: req.body.password
    }
    loginservice.addNewUser(user, function (data) {
      console.log(data);
      res.send(data);
    });
    // console.log(data);
    // res.send(data);


  }

}
module.exports = loginController;