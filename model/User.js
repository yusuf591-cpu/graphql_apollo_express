const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  age: {
    type: Number
  },
  firstName: {
    type: String,
    maxLength: 255
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    maxLength: 255
  }

});

const User = mongoose.model("user", UserSchema)
module.exports = User;