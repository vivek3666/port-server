const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// routes here:

const authRoutes = require("./app/modules/authorization/auth.routes");
const momentRoutes = require("./app/modules/moments/moments.routes");
const uploadRoutes = require("./app/@moments/upload/upload.routes");
app.use(express.json({ extended: false, type: "application/json" }));

app.use(cors());

app.use("/api", authRoutes);
app.use("/api", momentRoutes);
app.use("/api", uploadRoutes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

mongoose.connect("mongodb+srv://vivek:mqUTvn5fX9op5XqM@cluster0.q2zoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,}).then(() => {
    console.log(`connection to database established`);
  })
  .catch((err) => {
    console.log(`db error ${err.message}`);
    process.exit(-1);
  });
