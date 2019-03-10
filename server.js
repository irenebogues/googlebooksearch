const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
require("dotenv").config()
const routes = require("./routes")
const PORT = process.env.PORT || 5000

// / middleWare HERE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("morgan")("dev"));


//Scripts seedDB

const mongoose = require("mongoose");

const dbName = "googleBooks";
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${dbName}`;
// const db = require("./db/models")(mongoose);

// mongoose.connect(
//   MONGODB_URI,
//   { useNewUrlParser: true }
// );


// API Router here


app.use("/api", routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, ()=>{
  console.log("server is listening")
}) 




