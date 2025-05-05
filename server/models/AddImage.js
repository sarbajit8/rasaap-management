const mongoose = require("mongoose");

const AddImageSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
 

  },
  { timestamps: true }
);

module.exports = mongoose.model("AddImage", AddImageSchema);