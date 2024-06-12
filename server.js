const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3001;
const userRoute = require("./routes/userRoute");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

//
//
//
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("mongoDB connected successfullly");
    //
    app.listen(PORT, (err) => {
      if (err) console.log(err);
      console.log(`Server is listening on the port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

//
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

//
//
app.use("/api/user", userRoute);
