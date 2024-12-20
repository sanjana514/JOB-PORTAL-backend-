import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(Process.env.MONGO_URI);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection failed");
    process.exit(1);
  }
};

export default connectDB;
