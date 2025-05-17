import express from "express"
import { addToCart, removeFromCart, getCart, updateQuantity } from "../controllers/cartController.js"
import authenticate from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.post("/add",authenticate,addToCart)
cartRouter.post("/remove",authenticate,removeFromCart)
cartRouter.post("/get",authenticate,getCart)
cartRouter.post("/update", authenticate, updateQuantity);


export default cartRouter;
