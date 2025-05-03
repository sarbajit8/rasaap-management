const express = require("express");
const { addWarning, getWarningsByEmployee, deleteWarning, updateWarning } = require("../../controllers/common/warning-controller");


const router = express.Router();

router.post("/add", addWarning);
router.get("/list/:employeeId", getWarningsByEmployee);
router.put("/edit/:id", updateWarning);
router.delete("/delete/:id", deleteWarning);

module.exports = router;
