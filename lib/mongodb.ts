import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8"]);

const MONGODB_URI: string = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

export async function connectDB() {
  try {
    console.log("DNS servers:", dns.getServers());
    console.log("Connecting to MongoDB...");

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}