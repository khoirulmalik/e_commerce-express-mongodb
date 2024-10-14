const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "test",
  });
});

//run server
app.listen(port, () => {
  console.log(`Server running in: http://localhost:${port}`);
});

//connect to database
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Connection Error:", error);
  });
