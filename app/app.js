const express = require("express");
const home = require("./src/routes/home");
const bodyPaser = require("body-parser");
app = express();


app.set("views", `${__dirname}/src/views`);
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/src/public`))
app.use("/", home);


module.exports = app;