import mongoose, { connection } from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

export async function connectToDatabase() {
  if (connection.readyState) return;

  await mongoose.connect("mongodb://127.0.0.1:27017/digiessaouira" as string);

  connection.on("open", () => console.log("Connected to database ✅"));
  connection.on("error", (error) =>
    console.log(`Can't connect to database due to following error: ${error}`)
  );
}
