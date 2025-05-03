const express = require("express");
const {
  addTerminate,
  getTerminationsByEmployee,
  updateTerminate,
  deleteTerminate
} = require("../../controllers/common/terminate-Controller");

const router = express.Router();

// Route to add a termination record
router.post("/add", addTerminate);

// Route to get all terminations for a specific employee
router.get("/employee/:employeeId", getTerminationsByEmployee);

// Route to update a termination record
router.put("/edit/:id", updateTerminate);

// Route to delete a termination record
router.delete("/delete/:id", deleteTerminate);

module.exports = router;
