const mongoose = require("mongoose");

const AssignPackageSchema = new mongoose.Schema(
  {
    companyId:String,
    name: String,
    service: String,
    price: Number,
    discount: String,
    discountPrice: String,
    description: { // Corrected the field name here
      type: String,
      required: true,
    },
    duration: Number,
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("AssignPackage", AssignPackageSchema);
