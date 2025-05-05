import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MANGO_URI);
    console.log("databaze isledi");
  } catch (error) {
    console.log(error);
  }
};
