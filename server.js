const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
require("dotenv").config()

//Scripts seedDB

const mongoose = require("mongoose");

const dbName = "googleBooks";
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${dbName}`;
const db = require("./db/models")(mongoose);

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);

// middleWare HERE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("morgan")("dev"));

// API Router here
const { GOOGLE_API_SERVER_KEY } = process.env;
const apiRouter = express.Router();
require("./routes")(apiRouter, db, axios, GOOGLE_API_SERVER_KEY);

app.use("/api", apiRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}












// -----------------------------  API ROUTES  -----------------------------
const { GOOGLE_API_SERVER_KEY } = process.env;
const apiRouter = express.Router();
require("./routes")(apiRouter, db, axios, GOOGLE_API_SERVER_KEY);

app.use("/api", apiRouter);

// Send every other request to the React app
// Define any API routes before this runs

