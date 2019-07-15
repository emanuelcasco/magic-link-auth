import { hostname } from 'os';

export default {
  auth: {
    header: 'Authorization',
    secret: process.env.NODE_JWT_SECRET
  },
  common: {
    hostname: hostname()
  },
  mailer: {
    service: process.env.NODE_MAILER_SERVICE,
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASS
    }
  }
};