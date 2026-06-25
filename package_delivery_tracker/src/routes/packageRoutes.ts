import { Router } from "express";
import pool from "../db/db";

// This creates a router object where all package-related routes are defined.
const router = Router();

// GET /packages - Fetch all packages
router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM packages");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ message: "Failed to fetch packages" });
  }
});

// GET /packages/:id - Fetch a specific package by ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM packages WHERE package_id = ?",
      [req.params.id],
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching package:", error);
    res.status(500).json({ message: "Failed to fetch package" });
  }
});

// GET /packages/:id/tracking - Fetch tracking updates for a specific package
router.get("/:id/tracking", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tracking_updates WHERE package_id = ? ORDER BY updated_at DESC",
      [req.params.id],
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching tracking updates:", error);
    res.status(500).json({ message: "Failed to fetch tracking updates" });
  }
});

// POST /packages - Create a new package
router.post("/", async (req, res) => {
  const {
    tracking_number,
    sender_user_id,
    receiver_name,
    receiver_address,
    package_weight,
    status,
  } = req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO packages
      (tracking_number, sender_user_id, receiver_name, receiver_address, package_weight, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [
        tracking_number,
        sender_user_id,
        receiver_name,
        receiver_address,
        package_weight,
        status,
      ],
    );

    res.status(201).json({
      message: "Package created successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ message: "Failed to create package" });
  }
});

// PUT /packages/:id - Update a specific package by ID
router.put("/:id", async (req, res) => {
  const {
    tracking_number,
    sender_user_id,
    receiver_name,
    receiver_address,
    package_weight,
    status,
  } = req.body;

  try {
    const [result] = await pool.query(
      `UPDATE packages
      SET tracking_number = ?, sender_user_id = ?, receiver_name = ?, receiver_address = ?,
          package_weight = ?, status = ?
      WHERE package_id = ?`,
      [
        tracking_number,
        sender_user_id,
        receiver_name,
        receiver_address,
        package_weight,
        status,
        req.params.id,
      ],
    );

    res.json({
      message: "Package updated successfully",
      result,
    });
  } catch (error) {
    console.error("Error updating package:", error);
    res.status(500).json({ message: "Failed to update package" });
  }
});

// DELETE /packages/:id - Delete a specific package by ID
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM tracking_updates WHERE package_id = ?", [
      req.params.id,
    ]);

    const [result] = await pool.query(
      "DELETE FROM packages WHERE package_id = ?",
      [req.params.id],
    );

    res.json({
      message: "Package deleted successfully",
      result,
    });
  } catch (error) {
    console.error("Error deleting package:", error);
    res.status(500).json({ message: "Failed to delete package" });
  }
});

// POST /packages/:id/tracking - Add a tracking update for a specific package
router.post("/:id/tracking", async (req, res) => {
  const { location, status_note } = req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO tracking_updates (package_id, location, status_note, updated_at)
      VALUES (?, ?, ?, NOW())`,
      [req.params.id, location, status_note],
    );

    res.status(201).json({
      message: "Tracking update added successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating tracking update:", error);
    res.status(500).json({ message: "Failed to add tracking update" });
  }
});

export default router;
