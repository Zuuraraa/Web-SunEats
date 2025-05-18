import express from "express"
import authenticate from "../middleware/authMiddleware.js"
import { placeOrder, getMyOrders, updateOrderStatus, getAllOrders } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authenticate,placeOrder);
orderRouter.get("/my", authenticate, getMyOrders);
orderRouter.post("/update", updateOrderStatus);
orderRouter.get("/all", getAllOrders);

export default orderRouter;