const express = require("express");
const app = express();
//middleware
app.use(express.json());

//dbconnection
const dbconnection = require("./database/dbconnection");
dbconnection.connect();

//register the router
const webrouter = require("./routes/userRoutes");
app.use("/api/v1/users", webrouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
