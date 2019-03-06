// Start Random Number

var numbered =   Math.floor((Math.random() * 10) + 1);


console.log(numbered);


// End Random Number



// Begin Nodemailer



var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: '/////////////////////////',
    pass: '/////////////////////////'
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"John" <john@gmail.com',
  to: 'dchavours@gmail.com',
  subject: 'subject',
  text: 'console logged 6'
};



if (numbered == 6) {
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
});

}






// End Nodemailer
