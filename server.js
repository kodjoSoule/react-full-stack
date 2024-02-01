const express = require("express");
const app = express();
const routes = require("./Route/router");
const connectDB = require("./connectDB");
connectDB();
app.use("/", routes);
app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
