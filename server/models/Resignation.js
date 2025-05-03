const mongoose = require("mongoose");

const ResignationSchema = new mongoose.Schema(
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
    date: {
      type: Date,
      required: true,
    },
  }
);

module.exports = mongoose.model("Resignation", ResignationSchema);
