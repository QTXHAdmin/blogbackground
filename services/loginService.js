const models = require('../server/db.js');
//处理逻辑
const loginService = {
  // 创建新用户
  addNewUser: (user, callback) => {
    let newAccount = new models.User(user);
    //保存数据进mongoDB
    newAccount.save((err, data) => {
      if (err) {
        // return err;
        data = {
          code: 1,
          msg: '添加用户失败',
          err: err
        }
      } else {
        data = {
          code: 0,
          mag: '添加用户成功',
          data: data
        }

      }
      callback(data);
    });

  },
  validateUser: (user, callback) => {

    models.User.find({
        userName: user.userName
      }, function (err, doc) {
        if (err) {
          return
        };
        console.log(doc);
        if (!doc.length) {
          data = {
            code: 1,
            msg: '用户名错误'
          }
        } else {
          if (user.pwd === doc[0].pwd) {
            data = {
              code: 0,
              msg: '登录成功!'
            }
          } else {
            data = {
              code: 1,
              msg: '密码错误!'
            }
          }
        }
        callback(data);

      }

    );

  }

};
module.exports = loginService;