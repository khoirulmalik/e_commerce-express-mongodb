const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const productRoutes = require("./routes/productRoutes");

const Product = require("./models/product"); // Import model Product
const dummyData = require("./models/dummy"); // Import data dummy

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "test",
  });
});

//parent router
app.use("/api", productRoutes);

//run server
app.listen(port, () => {
  console.log(`Server running in: http://localhost:${port}`);
});

//connect to database
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database Connected");
    // Product.insertMany(dummyData)
    //   .then(() => {
    //     console.log("Data inserted successfully!");
    //   })
    //   .catch((error) => {
    //     console.log("Error inserting data:", error);
    //   });
  })
  .catch((error) => {
    console.log("Database Connection Error:", error);
  });
