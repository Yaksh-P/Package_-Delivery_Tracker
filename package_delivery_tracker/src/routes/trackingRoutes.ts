import { Router } from "express";
import pool from "../db/db";

const router = Router();
// GET /tracking-updates - Fetch all tracking updates
router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tracking_updates ORDER BY updated_at DESC",
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching tracking updates:", error);
    res.status(500).json({ message: "Failed to fetch tracking updates" });
  }
});

export default router;
