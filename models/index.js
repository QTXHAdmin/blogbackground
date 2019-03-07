const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userName: {
    type: String
  },
  pwd: {
    type: String
  }
});
const Models = {
  User: mongoose.model('User', UserSchema)
}
module.exports = Models;