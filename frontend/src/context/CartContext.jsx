import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { FoodContext } from "./FoodContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { menu_list } = useContext(FoodContext);

  const [cartItems, setCartItems] = useState([]);

  // Ambil token dari localStorage (atau tempat penyimpanan tokenmu)
  const getHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  // Fetch cart dari backend dan sinkronisasi ke frontend
  const fetchCart = async () => {
    try {
      const res = await axios.post(
        "https://web-suneats-backend.onrender.com/api/cart/get",
        {},
        { headers: getHeaders() }
      );
      const cartData = res.data.cartData || {};

      // Konversi object {id: qty} ke array lengkap dengan detail item
      const cartArray = Object.entries(cartData)
        .map(([id, quantity]) => {
          const item = menu_list.find((item) => item._id === id);
          if (!item) return null;
          return { ...item, quantity };
        })
        .filter(Boolean);

      setCartItems(cartArray);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [menu_list]);

  // Add item ke cart backend dan frontend
  const addToCart = async (item) => {
    try {
      await axios.post(
        "https://web-suneats-backend.onrender.com/api/cart/add",
        { itemId: item._id },
        { headers: getHeaders() }
      );

      // Update frontend state
      setCartItems((prev) => {
        const existingItem = prev.find((cartItem) => cartItem._id === item._id);
        if (existingItem) {
          return prev.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prev, { ...item, quantity: 1 }];
        }
      });
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  };

  // Remove item dari cart backend dan frontend
  const removeFromCart = async (_id) => {
    try {
      await axios.post(
        "https://web-suneats-backend.onrender.com/api/cart/remove",
        { itemId: _id },
        { headers: getHeaders() }
      );

      setCartItems((prev) => prev.filter((item) => item._id !== _id));
    } catch (error) {
      console.error("Failed to remove from cart", error);
    }
  };

  // Update quantity di backend dan frontend
  const updateQuantity = async (_id, newQuantity) => {
    try {
      await axios.post(
        "https://web-suneats-backend.onrender.com/api/cart/update",
        { itemId: _id, quantity: newQuantity },
        { headers: getHeaders() }
      );

      setCartItems((prev) =>
        prev.map((item) =>
          item._id === _id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
