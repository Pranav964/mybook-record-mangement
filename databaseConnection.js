const mongoose = require("mongoose");   //npm i mongoose   ///instead of json file  we can go to mongodb

function DbConnection()
 {
  const DB_URL = process.env.MONGO_URI;   //from mongo url   we want to excess variablr so thats why we use process

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;   //conect to mongodb

  db.on("error", console.error.bind("Connection error"));
  db.once("open", function () {
    console.log("DB Connected  by pranav kulkarni -!!");
  });
}
  
module.exports = DbConnection;  
