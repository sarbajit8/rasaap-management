const Attendance = require("../../models/Attendance");

// MARK ATTENDANCE
const markAttendance = async (req, res) => {
    const { userId, userName, type, time } = req.body;
  
    const today = new Date().toISOString().split('T')[0];
  
    try {
      let record = await Attendance.findOne({ userId, date: today });
  
      if (!record) {
        record = new Attendance({
          userId,
          userName,
          date: today,
          logins: [],
          logouts: [],
          lunchIns: [],
          lunchOuts: [],
        });
      }
  
      switch (type) {
        case 'login': record.logins.push(time); break;
        case 'logout': record.logouts.push(time); break;
        case 'lunch-in': record.lunchIns.push(time); break;
        case 'lunch-out': record.lunchOuts.push(time); break;
        default:
          return res.status(400).json({ success: false, message: 'Invalid type' });
      }
  
      await record.save();
      res.status(200).json({ success: true, message: 'Attendance updated', data: record });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  
// GET ATTENDANCE LIST
 const getAttendance = async (req, res) => {
  const { userId } = req.params;

  try {
    const records = await Attendance.find({ userId }).sort({ date: -1 });
    res.status(200).json({ success: true, data: records });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error fetching attendance' });
  }
};

// GET ALL ATTENDANCE RECORDS (Admin view)
const getAllAttendance = async (req, res) => {
    try {
      const records = await Attendance.find().sort({ date: -1 });
      res.status(200).json({
        success: true,
        message: "Fetched all attendance records",
        data: records,
      });
    } catch (error) {
      console.error("Error fetching all attendance:", error);
      res.status(500).json({
        success: false,
        message: "Server error while fetching all attendance",
      });
    }
  };
  
  module.exports = { markAttendance, getAttendance, getAllAttendance };
  

