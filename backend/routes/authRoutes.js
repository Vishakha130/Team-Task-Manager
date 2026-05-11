// // // // const express = require("express");
// // // // const bcrypt = require("bcryptjs");
// // // // const jwt = require("jsonwebtoken");
// // // // const User = require("../models/User");

// // // // const router = express.Router();

// // // // /* =========================
// // // //    SIGNUP
// // // // ========================= */
// // // // router.post("/signup", async (req, res) => {
// // // //   try {
// // // //     let { name, email, password, role } = req.body;

// // // //     const existingUser = await User.findOne({ email });

// // // //     if (existingUser) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "User already exists",
// // // //       });
// // // //     }

// // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // //     // ✅ FORCE LOWERCASE ROLE (IMPORTANT FIX)
// // // //     role = role ? role.toLowerCase() : "member";

// // // //     const user = new User({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //       role,
// // // //     });

// // // //     await user.save();

// // // //     res.status(201).json({
// // // //       success: true,
// // // //       message: "User created successfully",
// // // //     });

// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       message: "Server error",
// // // //     });
// // // //   }
// // // // });

// // // // /* =========================
// // // //    LOGIN
// // // // ========================= */
// // // // router.post("/login", async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;

// // // //     if (!process.env.JWT_SECRET) {
// // // //       return res.status(500).json({
// // // //         success: false,
// // // //         message: "JWT_SECRET not set",
// // // //       });
// // // //     }

// // // //     const user = await User.findOne({ email });

// // // //     if (!user) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "User not found",
// // // //       });
// // // //     }

// // // //     const isMatch = await bcrypt.compare(password, user.password);

// // // //     if (!isMatch) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "Invalid credentials",
// // // //       });
// // // //     }

// // // //     const token = jwt.sign(
// // // //       { id: user._id, role: user.role },
// // // //       process.env.JWT_SECRET,
// // // //       { expiresIn: "1d" }
// // // //     );

// // // //     res.json({
// // // //       success: true,
// // // //       token,
// // // //       user: {
// // // //         id: user._id,
// // // //         name: user.name,
// // // //         email: user.email,
// // // //         role: user.role, // always lowercase now
// // // //       },
// // // //     });

// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       message: "Server error",
// // // //     });
// // // //   }
// // // // });

// // // // /* =========================
// // // //    GET ALL USERS (TEAM PAGE)
// // // // ========================= */
// // // // router.get("/users", async (req, res) => {
// // // //   try {
// // // //     const users = await User.find();

// // // //     res.json({
// // // //       success: true,
// // // //       users,
// // // //     });

// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       message: "Failed to fetch users",
// // // //     });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // const express = require("express");
// // // const bcrypt = require("bcryptjs");
// // // const jwt = require("jsonwebtoken");
// // // const User = require("../models/User");
// // // const Task = require("../models/Task"); // IMPORTANT for stats

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

// // //     // FORCE CLEAN ROLE
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

// // //     if (!process.env.JWT_SECRET) {
// // //       return res.status(500).json({
// // //         success: false,
// // //         message: "JWT_SECRET not set",
// // //       });
// // //     }

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
// // //    GET ALL USERS + TASK STATS (TEAM PAGE)
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
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");

// // const User = require("../models/User");
// // const Task = require("../models/Task");

// // const router = express.Router();

// // /* =========================
// //    SIGNUP
// // ========================= */
// // router.post("/signup", async (req, res) => {
// //   try {
// //     let { name, email, password, role } = req.body;

// //     const existingUser = await User.findOne({ email });

// //     if (existingUser) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "User already exists",
// //       });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const user = new User({
// //       name,
// //       email: email.toLowerCase(),
// //       password: hashedPassword,
// //       role: role ? role.toLowerCase() : "member",
// //     });

// //     await user.save();

// //     res.status(201).json({
// //       success: true,
// //       message: "User created",
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: "Server error",
// //     });
// //   }
// // });

// // /* =========================
// //    LOGIN
// // ========================= */
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const user = await User.findOne({ email: email.toLowerCase() });

// //     if (!user) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "User not found",
// //       });
// //     }

// //     const match = await bcrypt.compare(password, user.password);

// //     if (!match) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid credentials",
// //       });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "1d" }
// //     );

// //     res.json({
// //       success: true,
// //       token,
// //       user,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: "Server error",
// //     });
// //   }
// // });

// // /* =========================
// //    USERS + TASK STATS (FIXED)
// // ========================= */
// // router.get("/users", async (req, res) => {
// //   try {
// //     const users = await User.find();

// //     const result = await Promise.all(
// //       users.map(async (user) => {
// //         const email = user.email.toLowerCase();

// //         const total = await Task.countDocuments({ assignedTo: email });

// //         const completed = await Task.countDocuments({
// //           assignedTo: email,
// //           status: "Completed",
// //         });

// //         const pending = await Task.countDocuments({
// //           assignedTo: email,
// //           status: { $ne: "Completed" },
// //         });

// //         return {
// //           name: user.name,
// //           email: user.email,
// //           role: user.role,
// //           total,
// //           pending,
// //           completed,
// //         };
// //       })
// //     );

// //     res.json({
// //       success: true,
// //       users: result,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch users",
// //     });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const Task = require("../models/Task");

// const router = express.Router();

// /* =========================
//    SIGNUP
// ========================= */
// router.post("/signup", async (req, res) => {
//   try {
//     let { name, email, password, role } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       email: email.toLowerCase().trim(),
//       password: hashedPassword,
//       role: (role || "member").toLowerCase(),
//     });

//     await user.save();

//     res.status(201).json({
//       success: true,
//       message: "User created",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });

// /* =========================
//    LOGIN
// ========================= */
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email: email.toLowerCase().trim() });

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//       success: true,
//       token,
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });

// /* =========================
//    TEAM MEMBERS + TASK STATS (FINAL FIX)
// ========================= */
// router.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();

//     const result = await Promise.all(
//       users.map(async (user) => {
//         const email = user.email.toLowerCase().trim();

//         const total = await Task.countDocuments({ assignedTo: email });
//         const completed = await Task.countDocuments({
//           assignedTo: email,
//           status: "Completed",
//         });
//         const pending = await Task.countDocuments({
//           assignedTo: email,
//           status: { $ne: "Completed" },
//         });

//         return {
//           _id: user._id,
//           name: user.name,
//           email,
//           role: user.role,
//           total,
//           pending,
//           completed,
//         };
//       })
//     );

//     res.json({
//       success: true,
//       users: result,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch users",
//     });
//   }
// });

// module.exports = router;
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Task = require("../models/Task");

const router = express.Router();

/* =========================
   SIGNUP
========================= */
router.post("/signup", async (req, res) => {
  try {
    let { name, email, password, role } = req.body;

    email = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: (role || "member").toLowerCase(),
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
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
   LOGIN
========================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const cleanEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: cleanEmail });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token,
      user,
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
   TEAM USERS + TASK STATS (FIXED)
========================= */
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    const result = await Promise.all(
      users.map(async (user) => {
        const email = user.email.toLowerCase().trim();

        const total = await Task.countDocuments({ assignedTo: email });

        const completed = await Task.countDocuments({
          assignedTo: email,
          status: "Completed",
        });

        const pending = await Task.countDocuments({
          assignedTo: email,
          status: { $ne: "Completed" },
        });

        return {
          _id: user._id,
          name: user.name,
          email,
          role: user.role,
          total,
          pending,
          completed,
        };
      })
    );

    res.json({
      success: true,
      users: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
});

module.exports = router;