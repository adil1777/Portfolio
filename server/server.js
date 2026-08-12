const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors =require ('cors');
const colors = require('colors');
const user = require("./routes/email.route")


//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/portfolio',user);

//PORT
 const PORT =process.env.PORT || 8000;

//listen
app.listen(PORT,()=>{
    console.log(`Server Running On PORT ${PORT}`.bgGreen.white);
});
