const { hostname } = require('os');

module.exports = {
  authHeader: 'Authorization',
  secret: process.env.NODE_JWT_SECRET,
  hostname: hostname(),
  mailer: {
    service: process.env.NODE_MAILER_SERVICE,
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASS
    }
  }
}