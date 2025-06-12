import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("connected to DB");
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("mongoDB connection error:", error);
  }
};
