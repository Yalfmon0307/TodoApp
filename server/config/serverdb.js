import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectdb = async ()=>{
    try {
        const connect = await mongoose.connect(`mongodb+srv://montesyalfred0:IoOaxYk9c7drWxZ2@cluster0.rid11.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('coneccion exitosa')
        return connect
    } catch (error) {
        console.log(error)
    }
}

