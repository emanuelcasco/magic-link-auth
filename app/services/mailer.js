import nodemailer from 'nodemailer';

import config from '../config';

const transporter = nodemailer.createTransport(config.mailer);

exports.sendEmail = options => {
  return new Promise(resolve => {
    transporter.sendMail(options, (error, responseInfo) => {
      if (error) {
        console.error(error);
        return mailerError('Failure sending e-mail!');
      }
      console.error('E-mail sent succesfully!');
      return resolve({ ...options, ...responseInfo });
    });
  });
};
