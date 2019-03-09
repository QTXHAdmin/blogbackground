const models = require('../server/db.js');
//处理逻辑
const loginService = {
  // 创建新用户
  addNewUser: (user, callback) => {
    let newAccount = new models.User(user);
    models.User.find({
      userName: user.userName
    }, function (err, docs) {
      // console.log(doc);
      if (err) {
        callback();
      }
      console.log(docs.length);
      if (docs.length) {
        callback("用户名已存在");

      } else {
        newAccount.save((err, data) => {
          if (err) {
            callback();
          } else {
            callback(data);
          }

        });


      }
    })
    //保存数据进mongoDB

  },
  //校验用户
  validateUser: (user, callback) => {
    // let data;
    models.User.find({
        userName: user.userName
      }, function (err, doc) {
        if (err) {
          return
        };
        console.log(doc);
        if (!doc.length) {
          // data = {
          //   code: 1,
          //   msg: '用户名错误'
          // }
          callback();
        } else {
          if (user.pwd === doc[0].pwd) {

            callback(doc);
          } else {

            callback();
          }
        }
        // callback(data);

      }

    );

  },
  //修改用户
  editUser: (editUser, callback) => {

    models.User.update({
      '_Id': editUser.userId
    }, {
      $set: {
        '_Id': editUser.userId
      }
    }, function (err, docs) {
      if (err) {
        callback();
      } else {
        callback(docs);
      }
    })

  },

  //删除用户
  DelUser: (delUserId, callback) => {
    models.remove({
      '_Id': delUserId
    }, (err, doc) => {
      if (err) {
        callback()
      } else {
        callback(doc);
      }
    })
  }

};
module.exports = loginService;