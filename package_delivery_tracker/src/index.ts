import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import pool from "./db/db";
import packageRoutes from "./routes/packageRoutes";
import trackingRoutes from "./routes/trackingRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Package Delivery Tracker API is running" });
});

app.use("/users", userRoutes);
app.use("/packages", packageRoutes);
app.use("/tracking-updates", trackingRoutes);

app.listen(port, async () => {
  try {
    await pool.getConnection();
    console.log(`Database connected successfully`);
  } catch (error) {
    console.error("Database connection failed:", error);
  }

  console.log(`Server running on http://localhost:${port}`);
});
