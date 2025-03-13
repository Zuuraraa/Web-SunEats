import mongoose from 'mongoose';
import { type } from 'os';

const cartData = new mongoose.Schema({
    cartID: { type: String, required: true, unique: true },
    userID: { type: String, required: true, unique: true },
    productID: { type: String, required: true, unique: true },
    productQuantity: { type: Integer}
});

export default mongoose.model('User', userData);
