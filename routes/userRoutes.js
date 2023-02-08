const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

//getAllUser
router.get("/getAllUser", userController.GetAllUser);

//createToDo
router.post("/addUser", userController.AddUser);

//getToDoById
router.get("/getUser/:_id", userController.GetUserById);

//deleteToDoById
router.delete("/deleteUser/:_id", userController.DeleteUser);

//updateUserInfo
router.put("/updateUserInfo/:id",userController.UpdateUser);

module.exports = router;
