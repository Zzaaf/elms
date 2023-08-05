const nodemailer = require('nodemailer');
const htmlMail = require('./htmlMail');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  service: 'gmail',
  auth: {
    user: 'anna.makarova@elbrusboot.camp',
    pass: process.env.PASSWORD_GOOGLE,
  },
});

function options(email, authenticationUrl) {
  return {
    from: transporter.options.auth.user,
    to: email,
    subject: 'Elbrus Coding Bootcamp',
    html: htmlMail(authenticationUrl),
  };
}

const sendingLetter = (email, id) => {
  transporter.sendMail(options(email, id));
};

module.exports = { sendingLetter };
