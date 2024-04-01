import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`db connected`.bgGreen);
    } catch (error) {
        console.log(`db not connected`.bgRed);
        
    }
}


export default dbConnection;