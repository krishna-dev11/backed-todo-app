const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// const { response } = require("express");
const Todoroute = require("./Routers/route")

app.use("/api/v1" , Todoroute );

app.listen(PORT , ()=>{
     console.log(`server started succesfully at &{PORT}`)
}
 )

 const dbconnect = require("./config/database");
 dbconnect();

 app.get("/" , (request , response)=>{
    response.send(`<h1>this is home page baby</h1>`)
 })