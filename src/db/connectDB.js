import { mongoose } from "mongoose";
import { DB_NAME } from "..//constants.js";

export const connectDB = async () => {

    try {
        const DB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB Host ${DB.connection.host}`);
    } catch (error) {
        console.log("\nMongoDB connection Faied \nerror", error);
        process.exit(1);
    }

};