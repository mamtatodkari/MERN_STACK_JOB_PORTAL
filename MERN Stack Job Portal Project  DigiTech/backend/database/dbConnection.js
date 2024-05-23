import mongoose from "mongoose";



export const dbConnection = () => {
  mongoose.connect("mongodb://127.0.0.1:27017", {
      dbName: "JOB_PORTAL",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
