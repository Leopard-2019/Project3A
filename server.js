const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

const PORT = process.env.PORT || 3001;

const users = require("./routes/api/users");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/authologin");

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
