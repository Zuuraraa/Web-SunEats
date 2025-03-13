import mongoose from 'mongoose';

const userData = new mongoose.Schema({
    usernameID: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userRole: { type: String, enum: ['admin', 'customer'], default: 'customer'}
});

export default mongoose.model('User', userData);
