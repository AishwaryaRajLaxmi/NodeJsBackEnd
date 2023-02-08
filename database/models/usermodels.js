const mongoose = require("mongoose");

const ManagementSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    address: String,
    phoneNumber: Number,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserManageMent", ManagementSchema);
