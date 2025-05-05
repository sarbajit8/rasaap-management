const mongoose = require("mongoose");

const KycLinkSchema = new mongoose.Schema(
  {
    name: String,
    service: String,
    link: String,
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("KycLink", KycLinkSchema);
