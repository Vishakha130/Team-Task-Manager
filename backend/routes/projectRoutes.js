const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

/* =========================
   CREATE PROJECT
========================= */
router.post("/create", async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;

    if (!title || !createdBy) {
      return res.status(400).json({
        success: false,
        message: "Title and createdBy required",
      });
    }

    const project = await Project.create({
      title,
      description,
      createdBy: createdBy.toLowerCase().trim(),
    });

    res.status(201).json({
      success: true,
      project,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* =========================
   GET ALL PROJECTS
========================= */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
});

module.exports = router;