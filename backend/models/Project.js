const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    status: {
      type: String,
      default: "Active",
    },
    teamMembers: [String], // emails or names
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);