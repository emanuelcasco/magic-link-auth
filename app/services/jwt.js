import * as jwt from 'jsonwebtoken';

import config from '../config';

exports.encode = email => {
  return jwt.sign({ email }, config.auth.secret)
};

exports.decode = token => {
  console.log(config);
  return jwt.verify(token, config.auth.secret);
};