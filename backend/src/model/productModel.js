import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' }
});

userSchema.methods.chooseProduct = function() {
    // Implementasi logika pemilihan produk
};

userSchema.methods.chooseProductQuantity = function() {
    // Implementasi logika pemilihan jumlah produk
};

userSchema.methods.addToCart = function() {
    // Implementasi logika menambahkan produk ke keranjang
};

const productSchema = new mongoose.Schema({
    productID: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    productDescription: { type: String },
    productPrice: { type: Number, required: true }
});

productSchema.methods.displayProduct = function() {
    // Implementasi logika menampilkan produk
};

productSchema.methods.setFilterFood = function() {
    // Implementasi logika filter makanan
};

const paymentSchema = new mongoose.Schema({
    paymentID: { type: String, required: true, unique: true },
    orderID: { type: String, required: true },
    paymentMethod: { type: String, required: true }
});

const cartSchema = new mongoose.Schema({
    cartID: { type: String, required: true, unique: true },
    userID: { type: String, required: true },
    productID: { type: String, required: true },
    productQuantity: { type: Number, required: true }
});

cartSchema.methods.getChoosenProduct = function() {
    // Implementasi logika mendapatkan produk yang dipilih
};

const orderSchema = new mongoose.Schema({
    orderID: { type: String, required: true, unique: true },
    userID: { type: String, required: true },
    transactionDescription: { type: String }
});

export const User = mongoose.model('User', userSchema);
export const Product = mongoose.model('Product', productSchema);
export const Payment = mongoose.model('Payment', paymentSchema);
export const Cart = mongoose.model('Cart', cartSchema);
export const Order = mongoose.model('Order', orderSchema);
