const express = require("express");
// import { getAttendance, markAttendance } from '../../controllers/common/attendance-controller';
const {
    getAttendance,
    markAttendance,
    getAllAttendance,
   
  } = require("../../controllers/common/attendance-controller");
const router = express.Router();

router.post('/mark', markAttendance);              // POST /api/attendance/mark
router.get('/user/:userId', getAttendance);        // GET /api/attendance/user/:userId
router.get('/all', getAllAttendance); 


module.exports = router;

