const bokeservice = require('../services/bokeService.js');

const boke = {
  createNewBlog: (req, res) => {
    console.log(req.body);
    let boke = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      wrap: req.body.wrap,
      data: new Date(),
      readNum: req.body.readNum,
      del: false,
      author_id: req.body._id,
      tag: req.tag,
      lastEditTime: new Date()
    };
    console.log(boke);
    bokeservice.addNewBlog(boke, function(data) {
      if (data) {
        data = {
          code: 0,
          msg: '博客添加成功',
          data: data
        };
      } else {
        data = {
          code: 1,
          msg: '添加失败'
        };
      }
      res.send(data);
    });
  },
  getBlog: (req, res) => {
    const blogid = req.query.id;
    bokeservice.getBlog(blogid, function(data) {
      if (data) {
        data = {
          code: 0,
          msg: '查询成功',
          data: data
        };
        console.log(data);
      } else {
        data = {
          code: 1,
          msg: '查询失败'
        };
      }
      res.send(data);
    });
  },
  togetBlogList: (req, res) => {
    const getblog = {
      curpage: req.query.curpage
    };
    console.log(getblog);

    bokeservice.getBlogList(getblog, function(data) {
      if (data) {
        data = {
          code: 0,
          msg: '查询成功',
          data: data
        };
      } else {
        data = {
          code: 1,
          msg: '查询失败'
        };
      }
      res.send(data);
    });
  },
  toeditBlog: (req, res) => {
    const editblog = {
      _id: req.body._id,
      title: req.body.title,
      author: req.body.author,
      wrap: req.body.wrap,
      data: req.body.data,
      readNum: req.body.readNum,
      del: false,
      author_id: req.body._id,
      tag: req.tag,
      lastEditTime: new Date()
    };
    bokeservice.editBlog(editblog, function(data) {
      if (data) {
        data = {
          code: 0,
          msg: '修改成功',
          data: data
        };
      } else {
        data = {
          code: 1,
          msg: '修改失败'
        };
      }
      res.send(data);
    });
  },
  toDelBlog: (req, res) => {
    console.log(req);
    const delObj = {
      objId: req.query.id
    };

    bokeservice.delBlog(delObj, function(data) {
      if (data) {
        data = {
          code: 0,
          msg: '删除成功',
          data: data
        };
      } else {
        data = {
          code: 1,
          msg: '删除失败'
        };
      }
      res.send(data);
    });
  }
};

module.exports = boke;
