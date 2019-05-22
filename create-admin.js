"use strict";
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const User = require("./db/models/admin.js");
const {DB_URI} = require('./config/development.js');
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true  });

const _user = new User();
_user.email = 'test@test.com';
_user.password =  _user.hashPassword('12345678');
_user.save().then(()=>{
  console.log('--- NEW USER SAVED ---')
  mongoose.connection.close();
})
.catch(e => {
  console.log(e)
  mongoose.connection.close();
});