const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  pwd: String
}, {
  collection: 'user'
});
const Models = {
  User: mongoose.model('User', UserSchema)
}
module.exports = Models;