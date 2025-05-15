import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://suneats:AaBb1122@cluster0.98k62gv.mongodb.net/suneats').then(()=> console.log("DB Connected"));
}