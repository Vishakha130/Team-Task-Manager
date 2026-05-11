// // const express = require("express");
// // const cors = require("cors");
// // const connectDB = require("./config/db");
// // require("dotenv").config();
// // // const Task = require("../models/Task");
// // // const User = require("../models/User");


// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // connectDB();

// // app.get("/", (req, res) => {
// //   res.send("API Running");
// // });

// // const authRoutes = require("./routes/authRoutes");

// // app.use("/api/auth", authRoutes);
// // const taskRoutes = require("./routes/taskRoutes");
// // app.use("/api/tasks", taskRoutes);

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const connectDB = require("./config/db");
// const projectRoutes = require("./routes/projectRoutes");

// app.use("/api/projects", projectRoutes);

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // DB Connection
// connectDB();

// // Routes
// const authRoutes = require("./routes/authRoutes");
// const taskRoutes = require("./routes/taskRoutes");

// app.use("/api/auth", authRoutes);
// app.use("/api/tasks", taskRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.json({ message: "API Running" });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Create app FIRST (very important)
const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json()); // ✅ REQUIRED for req.body

/* =========================
   DATABASE CONNECTION
========================= */
connectDB();

/* =========================
   ROUTES
========================= */
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const projectRoutes = require("./routes/projectRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/projects", projectRoutes);

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.json({ message: "API Running Successfully 🚀" });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});