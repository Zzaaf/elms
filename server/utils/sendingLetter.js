const nodemailer = require('nodemailer');

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
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <style>
     .email{
        width:60vw;
         display:flex; 
         height:60vh;
        align-items:center ;
         justify-content: center;
          background:#EFECF5;
    }
    .container{
      width:50vw;
      height:60vh;
      border-radius:10px !important;
      background-color:white !important;
      display:flex;
      flex-direction: column !important;
      align-items: center !important;
    }
    .divImg{
      width:50vw;
      height:30vh;
    }
        </style>
    </head>
    <body>
        <div class='email'>
            <div class="container">
            <div class='divImg'>
                <img style='width:100%;' alt='ELbrus' src='https://media.proglib.io/events/2020/06/05/139630d138c5138dcc0f1dfaf06b3846.jpg'/>
            </div>
            <h1>Привет, друг 👋</h1>
            <h3>Для завершения регистрации перейди по ссылке ниже 👇 </h3>
            <button style='background:#29EDFF; border-radius:10px'> <h3 style='color:#4520AB;'>http://localhost:3000/${authenticationUrl}</h3></button>
            </div>
       </div>
    </body>
    </html>
 `,
  };
}

const sendingLetter = (email, id) => {
  transporter.sendMail(options(email, id));
};

module.exports = { sendingLetter };
