import { addData } from "../db/index.js"
import nodemailer from "nodemailer"


const sentEmail = ( ) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'gmail',
        port: 'gmail',
        secure: 'true',
        auth: {
          user: 'muhammadasad00400@gmail.com',
          pass: 'euzz wjlo ecrc cokw'
        },
      });
      
var mailOptions = {
    from: 'muhammadasad@gmail.com',
    to: 'asadraza9712@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'This is a test email sent using Nodemailer!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("Error sending email",error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
      
}
const postData = async (data) => {
    sentEmail()
    return await addData(data)

}
export default postData



 
       