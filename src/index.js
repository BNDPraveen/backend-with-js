//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*

// one way of connecting to DB in index using IIFE
import express from express;
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    // if db is connected ut ecpress failed to connect
    app.on("error", (error) => {
      console.log("Err:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listenign on port ${process.env.MONGODB_URL}`);
    });
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
})();

*/
