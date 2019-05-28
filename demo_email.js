var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ikennavictorofficial@gmail.com',
    pass: '08164114571'
  }
});

var mailOptions = {
  from: 'ikennavictorofficial@gmail.com',
  to: 'odohikennavictor@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 