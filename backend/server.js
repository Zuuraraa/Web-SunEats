// backend/server.js
import 'dotenv/config';
import { connectDB } from "./config/db.js";
import app from "./app.js";

const port = process.env.PORT || 4000;

// connect DB
connectDB();

// start server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
