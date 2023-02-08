const userModal = require("../database/models/usermodels");

const serverResponse = {
  message: "",
  status: 400,
  body: null,
  errors: {},
};

//addUser
module.exports.AddUser = async function (req, res) {
  const response = { ...serverResponse };
  try {
    const body = req.body;
    const newModal = new userModal(body);
    const modelresponse = await newModal.save();
    response.message = "Data added successfully";
    response.body = modelresponse;
    response.status = 200;
  } catch (error) {
    console.log(
      `something went wrong controller:AddUser\n error:-${error.message}`
    );
    response.message = "Data not added";
    response.errors.error = error.message;
  }
  res.status(response.status);
  res.send(response);
};

//getUserById
module.exports.GetUserById = async function (req, res) {
  const response = { ...serverResponse };
  const id = req.params._id;
  try {
    const modelresponse = await userModal.findById(id);
    response.message = "Data fetched successfully";
    response.body = modelresponse;
    response.status = 200;
  } catch (error) {
    console.log(
      `something went wrong controller:GetUserById\n error:-${error.message}`
    );
    response.message = "Data not added";
    response.errors.error = error.message;
  }
  res.status(response.status);
  res.send(response);

  res.status(response.status);
  res.send(response);
};

//getAllUser
module.exports.GetAllUser = async function (req, res) {
  const response = { ...serverResponse };
  try {
    const modelresponse = await userModal.find();
    response.message = "Data fetched successfully";
    response.body = modelresponse;
    response.status = 200;
  } catch (error) {
    console.log(
      `something went wrong controller:GetAllUser\n error:-${error.message}`
    );
    response.message = "Data not added";
    response.errors.error = error.message;
  }
  res.status(response.status);
  res.send(response);
};

//deleteUser
module.exports.DeleteUser = async function (req, res) {
  const response = { ...serverResponse };
  const id = req.params._id;
  try {
    const modelresponse = await userModal.findByIdAndDelete(id);
    response.message = "Data deleted successfully";
    response.body = modelresponse;
    response.status = 200;
  } catch (error) {
    console.log(
      `something went wrong controller:deleteUser\n error:-${error.message}`
    );
    response.message = "Data not deleted";
    response.errors.error = error.message;
  }
  res.status(response.status);
  res.send(response);
};

//update user
module.exports.UpdateUser = async function (req, res) {
  const response = { ...serverResponse };
  const id = req.params._id;
  const body = req.body;
  try {
    const modelresponse = await userModal.findOneAndUpdate(id, body, {
      new: true,
    });

    response.message = "Data updated successfully";
    response.body = modelresponse;
    response.status = 200;
  } catch (error) {
    console.log(
      `something went wrong controller:updateUser\n error:-${error.message}`
    );
    response.message = "Data not updated";
    response.errors.error = error.message;
  }
  res.status(response.status);
  res.send(response);
};
