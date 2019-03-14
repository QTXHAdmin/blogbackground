const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userName: {
    type: String
  },
  pwd: {
    type: String
  }
});
const BlogSchema = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  wrap: { type: String },
  date: { type: Date, default: Date.now },
  readNum: { type: String },
  del: { type: Boolean },
  author_id: { type: String },
  tag: { type: String },
  lastEditTime: { type: Date, default: Date.now }
});
const Models = {
  User: mongoose.model('User', UserSchema),
  Blog: mongoose.model('Blog', BlogSchema)
};
module.exports = Models;
