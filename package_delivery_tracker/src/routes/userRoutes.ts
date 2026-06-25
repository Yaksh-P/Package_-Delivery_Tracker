import { Router } from "express";
import pool from "../db/db";

const router = Router();
// GET /users - Fetch all users
router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

export default router;
