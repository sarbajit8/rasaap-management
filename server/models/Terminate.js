const mongoose = require("mongoose");

const TerminateSchema = new mongoose.Schema(
  {
    content: {type: String,
        required: true,},
    title: {type: String,
         required: true,},
    employeeId: {type: String,
              required: true,
              },
    date: {
                type: Date,
                required: true,
              }, 
  },
);

module.exports = mongoose.model("Trminate", TerminateSchema);