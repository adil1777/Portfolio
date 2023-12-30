const nodemailer = require("nodemailer");

//transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:"mohdadil0760@gmail.com",
    pass:"sjefbfutdcmebhfe"
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
  transporter.sendMail({
    from: email,
    to:"mohdadil0760@gmail.com",
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
 
  return res.status(200).send({
    success: true,
    message: "Your Message Send Successfully",
  });

  }
  catch(error){
    console.log("Error" + error)
    return res.status(500).send({
        success:false,
        message:'Send Email API Failed',
        error
    })
  }
};
module.exports= {sendEmailController};
