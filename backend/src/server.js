import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database.js';

import cartRoutes from './routes/cartRoutes.js';

dotenv.config();
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/cart', cartRoutes);

//Koneksi Database & Jalankan Server
connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
