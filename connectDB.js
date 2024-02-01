const mongoose = require("mongoose");

require("dotenv").config();
// const uri = process.env["MONGO_URI"]; //"mongodb://localhost:27017/test";
//const uri = "mongodb+srv://kodjo:19BilRvQghE3LRMP@cluster0.wsxcqin.mongodb.net/?retryWrites=true&w=majority";
const uri = process.env.uri;
async function connectToDB() {
  console.log("connecting...");
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "db_full_stack",
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch(() => {
      console.error(`Error connecting to db`);
    });
}

module.exports = connectToDB;
