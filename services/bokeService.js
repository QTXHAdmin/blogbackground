const models = require('../server/db.js');

const boke = {
  addNewBlog: (boke, callback) => {
    let newBlog = new models.Blog(boke);
    newBlog.save((err, data) => {
      if (err) {
        callback();
      } else {
        callback(data);
      }
    });
  },
  getBlog: (id, callback) => {
    const blogid = { _id: id };
    models.Blog.find(blogid, function(err, docs) {
      if (err) {
        callback();
      }
      if (docs) {
        console.log(docs);
        callback(docs[0]);
      }
    });
  },
  getBlogList: (wrap, callback) => {
    // models.Blog.find({ author_id: wrap.author_id }, function(err, docs) {
    //   if (err) {
    //     callback();
    //   }
    //   if (docs) {
    //     console.log(docs);
    //     callback(docs);
    //   }
    // });
    // models.Blog.find({ $or: [{ author_id: wrap.author_id }, { del: false }] })
    console.log(wrap.curpage);
    models.Blog.find()
      .skip(wrap.curpage * 5)
      .limit(5)
      .sort({ _id: -1 })
      .exec((err, docs) => {
        console.log(docs);
        if (err) {
          callback();
        }
        if (docs) {
          console.log(docs);
          callback(docs);
        }
      });
    // models.Blog.find()
    //   .sort({ _id: -1 })
    //   .exec((err, docs) => {
    //     console.log(docs);
    //     if (err) {
    //       callback();
    //     }
    //     if (docs) {
    //       callback(docs);
    //     }
    //   });
  },
  editBlog: (editblog, callback) => {
    models.Blog.find({ _id: editblog._id }, function(err, docs) {
      if (err) {
        callback();
      }
      if (docs) {
        if (docs[0]._id === editblog._id) {
          docs[0] = editblog;
          callback(docs[0]);
        }
      }
    });
  },
  delBlog: (delblog, callback) => {
    // models.Blog.find({ _id: delblog.objId }, function(err, docs) {
    //   if (err) {
    //     callback();
    //   }
    //   if (docs) {
    //     console.log(docs[0]);
    //     docs[0].del = true;
    //     models.Blog.updateOne(
    //       { _id: delblog.objId },
    //       { del: docs[0].del },
    //       function(err, docs) {
    //         if (err) {
    //           callback();
    //         }
    //         if (docs) {
    //           console.log(docs);
    //           callback(docs[0]);
    //         }
    //       }
    //     );

    //     // console.log(docs);
    //   }
    // });

    models.Blog.remove({ _id: delblog.objId }, function(err, docs) {
      if (err) {
        callback();
      }
      if (docs) {
        console.log(docs);
        callback(docs);
      }
    });
  }
};

module.exports = boke;
