const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
  getAllEmployees,
  updateUser,
  deleteUser,
} = require("../../controllers/auth/auth-controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

router.get("/all", authMiddleware, getAllEmployees);
router.put('/update/:id', authMiddleware, updateUser);    // Update user
router.delete('/delete/:id', authMiddleware, deleteUser); // Delete user


module.exports = router;
