const LeaveApplication = require("../../models/LeaveApplication");

// Add new leave
const addEmployeeLeave = async (req, res) => {
    try {
      const {
        employeeName,
        employeeId,
        title,
        application,
        leaveType,
        leaveStatus,
        date,
        medicalLeave,     // NEW
        casualLeave       // NEW
      } = req.body;
  
      const newLeave = new LeaveApplication({
        employeeName,
        employeeId,
        title,
        application,
        leaveType,
        leaveStatus,
        date,
        medicalLeave,
        casualLeave
      });
  
      await newLeave.save();
  
      res.status(201).json({
        success: true,
        data: newLeave,
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        success: false,
        message: "Error occurred while adding leave.",
      });
    }
  };
  
// Get all leaves for one employee
const getAllLeaveByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const leaves = await LeaveApplication.find({ employeeId });

    if (!leaves.length) {
      return res.status(404).json({
        success: false,
        message: "No leave applications found for this employee.",
      });
    }

    res.status(200).json({
      success: true,
      data: leaves,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching leaves.",
    });
  }
};

// Get all leaves
const fetchAllEmployeeLeaves = async (req, res) => {
  try {
    const leaves = await LeaveApplication.find({}).sort({ date: -1 });

    res.status(200).json({
      success: true,
      data: leaves,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching leave applications.",
    });
  }
};

// Edit leave by ID
const editLeave = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        employeeName,
        employeeId,
        title,
        application,
        leaveType,
        leaveStatus,
        date,
        medicalLeave,     // NEW
        casualLeave       // NEW
      } = req.body;
  
      const leave = await LeaveApplication.findById(id);
      if (!leave) {
        return res.status(404).json({
          success: false,
          message: "Leave application not found.",
        });
      }
  
      leave.employeeName = employeeName || leave.employeeName;
      leave.employeeId = employeeId || leave.employeeId;
      leave.title = title || leave.title;
      leave.application = application || leave.application;
      leave.leaveType = leaveType || leave.leaveType;
      leave.leaveStatus = leaveStatus || leave.leaveStatus;
      leave.date = date || leave.date;
  
      if (typeof medicalLeave === "number") {
        leave.medicalLeave = medicalLeave;
      }
  
      if (typeof casualLeave === "number") {
        leave.casualLeave = casualLeave;
      }
  
      await leave.save();
  
      res.status(200).json({
        success: true,
        data: leave,
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        success: false,
        message: "Error occurred while editing leave application.",
      });
    }
  };
  

// Update leave status
const updateLeaveApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { leaveStatus } = req.body;

    const leave = await LeaveApplication.findById(id);
    if (!leave) {
      return res.status(404).json({
        success: false,
        message: "Leave application not found.",
      });
    }

    leave.leaveStatus = leaveStatus;
    await leave.save();

    res.status(200).json({
      success: true,
      message: "Leave status updated successfully.",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating leave status.",
    });
  }
};

// Update leave reply
const updateLeaveReplyById = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    const leave = await LeaveApplication.findById(id);
    if (!leave) {
      return res.status(404).json({
        success: false,
        message: "Leave application not found.",
      });
    }

    leave.reply = reply;
    await leave.save();

    res.status(200).json({
      success: true,
      message: "Reply updated successfully.",
      data: leave,
    });
  } catch (error) {
    console.error("Error updating reply:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating leave reply.",
    });
  }
};


// ✅ Delete leave application
const deleteLeaveById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedLeave = await LeaveApplication.findByIdAndDelete(id);

    if (!deletedLeave) {
      return res.status(404).json({
        success: false,
        message: "Leave application not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Leave application deleted successfully.",
    });
  } catch (e) {
    console.error("Error deleting leave application:", e);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting leave application.",
    });
  }
};


module.exports = {
  addEmployeeLeave,
  getAllLeaveByEmployee,
  fetchAllEmployeeLeaves,
  updateLeaveApplicationStatus,
  editLeave,
  updateLeaveReplyById,
  deleteLeaveById
};
