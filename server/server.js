const express = require("express");
const cors =require ('cors');
const dotenv = require('dotenv');
const mail = require("../server/routes/portfolioRoute")
//dotenv configuration
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/portfolio',mail);

//PORT
 const PORT =process.env.PORT || 8000;

//listen
app.listen(PORT,()=>{
    console.log(`Server Running On PORT ${PORT}`);
});
