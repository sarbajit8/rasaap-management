const mongoose = require("mongoose");

const LeaveApplicationSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    application: {
      type: String,
      required: true,
    },
    leaveType: {
      type: String,
    },
    medicalLeave: {
      type: Number,
      required: true,
      default: 0, // numeric default
    },
    casualLeave: {
      type: Number,
      required: true,
      default: 0, // numeric default
    },
    leaveStatus: {
      type: String,
      required: true,
      default: "pending", 
    },
    reply: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
  }
);

module.exports = mongoose.model("LeaveApplication", LeaveApplicationSchema);
