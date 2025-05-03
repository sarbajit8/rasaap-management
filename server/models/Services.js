const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {    
    name: String,  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);