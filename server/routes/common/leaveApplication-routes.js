const express = require("express");
const { addEmployeeLeave, getAllLeaveByEmployee, fetchAllEmployeeLeaves, updateLeaveApplicationStatus, updateLeaveReplyById, editLeave, deleteLeaveById } = require("../../controllers/common/leaveApplication-controller");


const router = express.Router();

// ✅ Add new leave application
router.post("/add", addEmployeeLeave);

// ✅ Get all leave applications for one employee by employeeId
router.get("/list/:employeeId", getAllLeaveByEmployee);

// ✅ Get all leave applications (admin or global view)
router.get("/get", fetchAllEmployeeLeaves);

// ✅ Update leave status by ID
router.put("/update-status/:id", updateLeaveApplicationStatus);

// ✅ Update reply to a leave application
router.put("/update-reply/:id", updateLeaveReplyById);

// ✅ Edit a leave application (full update)
router.put("/edit/:id", editLeave);

router.delete("/delete/:id", deleteLeaveById);

module.exports = router;
