const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'columbus.langosh34@ethereal.email',
      pass: 'FsFRGmCK9knnVra67E'
  }
});


const sendEmailController= (req,res)=>{
  try{
    const {name , email , msg} =req.body;

    //validation
    if(!name || !email || !msg){
      return res.send(500).send({
        success:false,
        message:'Please Provide All Fields'
      })
    }

     //email matter
     const info= transporter.sendMail({
      to: '"Mohd Adil" <mohdadil0760@gmail.com>',
      from: "mohdadil0760@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    console.log(info.messageId);
    return res.status(200).send({
        success:true,
        message:'Your Message Send Successfully'
    });

  }
  catch(error){
    console.log(error);
    return res.status(500).send({
        success:false,
        message:'Send Email API Failed',
        error
    })
  }
};
module.exports= {sendEmailController};
