import express from "express";
import mongoose from "mongoose";
import * as db from "../config/db.js";
import request from "supertest";

// Mock middleware authenticate supaya selalu lolos autentikasi saat testing
jest.mock("../middleware/authMiddleware.js", () => ({
  __esModule: true,
  default: (req, res, next) => {
    req.userId = "6827623d7a88dab0bf122cf4"; // Inject userId
    next();
  }
}));

import cartRoutes from "../routes/cartRoute.js";

// Setup Express app
const app = express();
app.use(express.json());

// Pasang route cart
app.use("/api/cart", cartRoutes);

// Connect DB sebelum test
beforeAll(async () => {
  await db.connectDB();
});

// Close koneksi DB setelah test selesai
afterAll(async () => {
  await mongoose.connection.close();
});

describe("Cart API Test", () => {

  it("POST /api/cart/get → Ambil data cart", async () => {
    const res = await request(app).post("/api/cart/get");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("cartData");
  });

  it("POST /api/cart/add → Tambah item ke cart", async () => {
    const res = await request(app)
      .post("/api/cart/add")
      .send({ itemId: "test-item-123" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body.message).toBe("Added to Cart");
  });

  it("POST /api/cart/remove → Hapus item dari cart", async () => {
    const res = await request(app)
      .post("/api/cart/remove")
      .send({ itemId: "test-item-123" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body.message).toBe("Removed from cart");
  });

  it("POST /api/cart/update → Update quantity item", async () => {
    const res = await request(app)
      .post("/api/cart/update")
      .send({ itemId: "test-item-123", quantity: 3 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body.message).toBe("Cart quantity updated");
  });

});
