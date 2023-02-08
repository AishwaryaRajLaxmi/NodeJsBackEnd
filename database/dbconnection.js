const mongoose = require("mongoose");
module.exports.connect = async function () {
  try {
    const dbresponse = await mongoose.connect(
      "mongodb://127.0.0.1:27017/ManageDB"
    );
  } catch (error) {
    console.log(`Database not connected \n error:-${error.message}`);
  }
};
