const models = require('../server/db.js');
//处理逻辑
const loginService = {
  // 创建新用户
  addNewUser: (user, callback) => {
    let newAccount = new models.User(user);
    //保存数据进mongoDB
    newAccount.save((err, data) => {
      if (err) {
        return err;
      } else {
        console.log('保存成功！');
        // return data = 'createUser successed' + data;
        callback(data);
      }
    });

  }

};
module.exports = loginService;