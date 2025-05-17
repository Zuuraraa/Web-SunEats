import { response } from "express";
import userModel from "../model/userModel.js"

// add items to user cart
const addToCart = async (req, res) => {
  try {
    const userId = req.userId; 
    const itemId = req.body.itemId;

    let user = await userModel.findById(userId);
    let cartData = user.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};


// remove item from user cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const itemId = req.body.itemId;

    let user = await userModel.findById(userId);
    let cartData = user.cartData || {};

    // Cek apakah item memang ada
    if (cartData[itemId]) {
      cartData[itemId] -= 1;

      // Kalau jumlahnya jadi 0, hapus item dari cart
      if (cartData[itemId] <= 0) {
        delete cartData[itemId];
      }

      await userModel.findByIdAndUpdate(userId, { cartData });

      res.json({ success: true, message: "Removed from cart" });
    } else {
      res.status(404).json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error removing from cart" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    const userId = req.userId;
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {}; // default ke object kosong kalau belum ada

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching cart data" });
  }
};

const updateQuantity = async (req, res) => {
  try {
    const userId = req.userId;
    const { itemId, quantity } = req.body;

    if (quantity < 1) {
      return res.status(400).json({ success: false, message: "Quantity must be at least 1" });
    }

    let user = await userModel.findById(userId);
    let cartData = user.cartData || {};

    cartData[itemId] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart quantity updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error updating quantity" });
  }
};


export {addToCart, removeFromCart, getCart, updateQuantity}
