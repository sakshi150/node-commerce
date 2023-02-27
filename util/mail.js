const nodemailer = require('nodemailer');

const envKeys = require('../keys');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'monroe.rath@ethereal.email',
    pass: 'ka82PGAfkjHtmfyf9K',
  },
});

module.exports.send = (message, callback) => {
  transporter
    .sendMail(message)
    .then((info) => {
      callback(nodemailer.getTestMessageUrl(info));
    })
    .catch((err) => console.log(err));
};
