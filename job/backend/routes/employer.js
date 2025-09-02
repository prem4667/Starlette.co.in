import express from "express";
import Employer from "../models/Employer.js";

const router = express.Router();

// Register employer
router.post("/register", async (req, res) => {
  try {
    const newEmp = new Employer(req.body);
    await newEmp.save();
    res.json({ message: "Registration submitted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employers (for admin)
router.get("/", async (req, res) => {
  const employers = await Employer.find();
  res.json(employers);
});

export default router;
// Update employer status
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    await Employer.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
