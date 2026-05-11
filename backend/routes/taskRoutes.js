// // // const express = require("express");
// // // const bcrypt = require("bcryptjs");
// // // const jwt = require("jsonwebtoken");
// // // const User = require("../models/User");
// // // const Task = require("../models/Task"); // IMPORTANT

// // // const router = express.Router();

// // // /* =========================
// // //    SIGNUP
// // // ========================= */
// // // router.post("/signup", async (req, res) => {
// // //   try {
// // //     let { name, email, password, role } = req.body;

// // //     const existingUser = await User.findOne({ email });

// // //     if (existingUser) {
// // //       return res.status(400).json({
// // //         success: false,
// // //         message: "User already exists",
// // //       });
// // //     }

// // //     const hashedPassword = await bcrypt.hash(password, 10);

// // //     role = role ? role.toLowerCase() : "member";

// // //     const user = new User({
// // //       name,
// // //       email,
// // //       password: hashedPassword,
// // //       role,
// // //     });

// // //     await user.save();

// // //     res.status(201).json({
// // //       success: true,
// // //       message: "User created successfully",
// // //     });

// // //   } catch (error) {
// // //     console.log(error);
// // //     res.status(500).json({
// // //       success: false,
// // //       message: "Server error",
// // //     });
// // //   }
// // // });

// // // /* =========================
// // //    LOGIN
// // // ========================= */
// // // router.post("/login", async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;

// // //     const user = await User.findOne({ email });

// // //     if (!user) {
// // //       return res.status(400).json({
// // //         success: false,
// // //         message: "User not found",
// // //       });
// // //     }

// // //     const isMatch = await bcrypt.compare(password, user.password);

// // //     if (!isMatch) {
// // //       return res.status(400).json({
// // //         success: false,
// // //         message: "Invalid credentials",
// // //       });
// // //     }

// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: "1d" }
// // //     );

// // //     res.json({
// // //       success: true,
// // //       token,
// // //       user: {
// // //         id: user._id,
// // //         name: user.name,
// // //         email: user.email,
// // //         role: user.role,
// // //       },
// // //     });

// // //   } catch (error) {
// // //     console.log(error);
// // //     res.status(500).json({
// // //       success: false,
// // //       message: "Server error",
// // //     });
// // //   }
// // // });

// // // /* =========================
// // //    GET USERS + TASK STATS (MAIN FIX)
// // // ========================= */
// // // router.get("/users", async (req, res) => {
// // //   try {
// // //     const users = await User.find();

// // //     const usersWithStats = await Promise.all(
// // //       users.map(async (user) => {

// // //         const total = await Task.countDocuments({
// // //           assignedTo: user.email,
// // //         });

// // //         const completed = await Task.countDocuments({
// // //           assignedTo: user.email,
// // //           status: "Completed",
// // //         });

// // //         const pending = await Task.countDocuments({
// // //           assignedTo: user.email,
// // //           status: { $ne: "Completed" },
// // //         });

// // //         return {
// // //           _id: user._id,
// // //           name: user.name,
// // //           email: user.email,
// // //           role: user.role,

// // //           total,
// // //           pending,
// // //           completed,
// // //         };
// // //       })
// // //     );

// // //     res.json({
// // //       success: true,
// // //       users: usersWithStats,
// // //     });

// // //   } catch (error) {
// // //     console.log(error);
// // //     res.status(500).json({
// // //       success: false,
// // //       message: "Failed to fetch users",
// // //     });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require("express");
// // const Task = require("../models/Task");

// // const router = express.Router();

// // /* =========================
// //    CREATE TASK
// // ========================= */
// // router.post("/create", async (req, res) => {
// //   try {
// //     console.log("🔥 CREATE TASK:", req.body);

// //     const { title, description, priority, dueDate, assignedTo, assignedName } = req.body;

// //     if (!title || !assignedTo || !assignedName) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "All fields required",
// //       });
// //     }

// //     const task = await Task.create({
// //       title,
// //       description,
// //       priority,
// //       dueDate,
// //       assignedTo: assignedTo.toLowerCase(),
// //       assignedName,
// //       status: "Pending",
// //     });

// //     res.status(201).json({
// //       success: true,
// //       task,
// //     });
// //   } catch (error) {
// //     console.log("CREATE ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Server error",
// //     });
// //   }
// // });

// // /* =========================
// //    GET TASKS (FILTER)
// // ========================= */
// // router.get("/", async (req, res) => {
// //   try {
// //     const email = req.query.email;

// //     const filter = email
// //       ? { assignedTo: email.toLowerCase() }
// //       : {};

// //     const tasks = await Task.find(filter).sort({ createdAt: -1 });

// //     res.json({
// //       success: true,
// //       tasks,
// //     });
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch tasks",
// //     });
// //   }
// // });

// // /* =========================
// //    UPDATE TASK
// // ========================= */
// // router.put("/:id", async (req, res) => {
// //   try {
// //     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
// //       new: true,
// //     });

// //     res.json({
// //       success: true,
// //       task,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: "Update failed",
// //     });
// //   }
// // });

// // /* =========================
// //    DELETE TASK
// // ========================= */
// // router.delete("/:id", async (req, res) => {
// //   try {
// //     await Task.findByIdAndDelete(req.params.id);

// //     res.json({
// //       success: true,
// //       message: "Task deleted",
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: "Delete failed",
// //     });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const Task = require("../models/Task");

// const router = express.Router();

// /* =========================
//    CREATE TASK
// ========================= */
// router.post("/create", async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       priority,
//       dueDate,
//       assignedTo,
//       assignedName,
//     } = req.body;

//     if (!title || !assignedTo || !assignedName) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields",
//       });
//     }

//     const task = await Task.create({
//       title,
//       description,
//       priority: priority || "Medium",
//       dueDate,
//       assignedTo: assignedTo.toLowerCase().trim(), // ✅ FIX
//       assignedName,
//       status: "Pending",
//     });

//     res.status(201).json({
//       success: true,
//       task,
//     });
//   } catch (error) {
//     console.log("CREATE TASK ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });

// /* =========================
//    GET ALL TASKS
// ========================= */
// router.get("/", async (req, res) => {
//   try {
//     const email = req.query.email;

//     const filter = email
//       ? { assignedTo: email.toLowerCase().trim() }
//       : {};

//     const tasks = await Task.find(filter).sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       tasks,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch tasks",
//     });
//   }
// });

// module.exports = router;
const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

/* =========================
   CREATE TASK
========================= */
router.post("/create", async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      assignedName,
    } = req.body;

    if (!title || !assignedTo || !assignedName) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const task = await Task.create({
      title,
      description,
      priority: priority || "Medium",
      dueDate,
      assignedTo: assignedTo.toLowerCase().trim(),
      assignedName,
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
    console.log("CREATE TASK ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* =========================
   GET TASKS
========================= */
router.get("/", async (req, res) => {
  try {
    const email = req.query.email;

    const filter = email
      ? { assignedTo: email.toLowerCase().trim() }
      : {};

    const tasks = await Task.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
    });
  }
});

/* =========================
   GET SINGLE TASK (FOR EDIT PAGE)
========================= */
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch task",
    });
  }
});

/* =========================
   UPDATE TASK
========================= */
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Update failed",
    });
  }
});

/* =========================
   DELETE TASK
========================= */
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Task deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
});

module.exports = router;