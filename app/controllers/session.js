const { encode, decode } = require('../services/jwt');
const { sendEmail } = require('../services/mailer');

const config = require('../config');

const generateBody = ({ email, link }) => `
  <p>Hi, <b>${email}</b>!</p>
  <p>Click on the following link to login: <a href="${link}">LOGIN</a></p>`;

exports.login = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.send(400).send({ message: 'E-mail missing' })
  };

  const token = encode(email);

  const mailOptions = {
    from: 'My application',
    to: email,
    subject: 'Magic invitation',
    html: generateBody({ email, link: `${config.hostname}/magic_link?token=${token}` })
  };

  return sendEmail(mailOptions)
    .then(() => res.status(200).send({ message: 'E-mail has been sent' }))
    .catch(err => res.status(500).send({ message: err }));
};

exports.magicLink = (req, res) => {
  const { token } = req.query;

  try {
    const { email } = decode(token);

    if (!email) {
      return res.status(401).send({ message: 'Authentication failed' });
    }

    return res.set(config.authHeader, token).status(200).send({ message: 'Succesfully authenticated', email });
  } catch (error) {
    return res.status(400).send({ message: 'Invalid token' });
  }
};
