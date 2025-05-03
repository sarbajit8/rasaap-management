const express = require("express");
const {
  addResignation,
  getResignationsByEmployeeId,
  fetchAllResignations,
  editResignation,
  updateResignationReplyById,
  deleteResignationById,
} = require("../../controllers/common/resignation-controller");

const router = express.Router();

// ✅ Add a new resignation application
router.post("/add", addResignation);

// ✅ Get all resignations for a specific employee by employeeId
router.get("/list/:employeeId", getResignationsByEmployeeId);

// ✅ Get all resignations (admin or global view)
router.get("/get", fetchAllResignations);

// ✅ Edit a resignation application (full update)
router.put("/edit/:id", editResignation);

// ✅ Update reply to a resignation application
router.put("/update-reply/:id", updateResignationReplyById);

// ✅ Delete a resignation application
router.delete("/delete/:id", deleteResignationById);

module.exports = router;
