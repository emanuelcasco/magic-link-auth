const jwt = require('jsonwebtoken');

const config = require('../config');

exports.encode = email => {
  return jwt.sign({ email }, config.secret)
};

exports.decode = token => jwt.verify(token, config.secret);