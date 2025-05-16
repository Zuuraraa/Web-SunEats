import express from "express"
import { loginUser , registerUser } from "../controllers/userController.js"
import authenticate from "../middleware/authMiddleware.js"
import { getUserData } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/me", authenticate, getUserData)

export default userRouter;


