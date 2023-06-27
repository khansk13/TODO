const express = require("express");
const userroutes=require("./routes/user.routes");
const bodyparser = require("body-parser");

const app= express();
app.use(bodyparser.json());
app.use(userroutes);

module.exports=app;