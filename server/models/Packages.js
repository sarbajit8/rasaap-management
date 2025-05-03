const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema(
  {
    name: String,
    service: String,
    price: Number,
    discount: String,
    description: { // Corrected the field name here
      type: String,
      required: true,
    },
    duration: Number,
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", PackageSchema);
