Note: to use service of gmail, visit https://myaccount.google.com/lesssecureapps and and turn ON access

const http=require('http');
const nodemailar=require("nodemailer");

var transporter=nodemailar.createTransport({
    service:'gmail',
    auth:{
        user:'amolbd1987@gmail.com',
        pass:'password'
    }
});
const mailOptions = {
    from: 'amolbd1987@gmail.com', // sender address
    to: 'to@email.com', // list of receivers
    subject: 'Testing my Email using NodeMailer', // Subject line
    html: '<H2>This is Exciting</H2>'// plain text body
  };
transporter.sendMail(mailOptions,function(err,info){
    if(err)
        console.log(err);
    else
        console.log(info);
})

const server=http.createServer("/",(req,res,next)=>{
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello Testing NodeMailer Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(8080);

