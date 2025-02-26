 const mongoose = require("mongoose");

 require("dotenv").config();

 const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>console.log("connection established between database and server"))
    .catch((error)=>{
        console.log(`error occurs  between database and server connection ${error}`)
        process.exit(1)
    });
 }

 module.exports = dbconnect;
