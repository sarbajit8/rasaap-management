const mongoose = require('mongoose');

const companyDetailsSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  assigned: {
    type: String,
  },
  status: {
    type: String,
  },
  assignedfs: {
    type: String,
  },
  statusfs: {
    type: String,
  },
  items: [{
    itemName: {
      type: String,
    },
    itemQuantity: {
      type: Number,
    },
    itemPrice: {
      type: Number,
    },
  }],
  pricing: {
    totalPrice: {
      type: Number,
    },
    discount: {
      type: Number,
      default: 0,
    },
    finalPrice: {
      type: Number,
    },
  },
},
{ timestamps: true }

);

const companySchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  companies: [companyDetailsSchema],
  
}


);

module.exports = mongoose.model('Company', companySchema);
