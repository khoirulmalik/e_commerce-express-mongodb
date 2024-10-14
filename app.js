const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "test",
  });
});

app.listen(PORT, () => {
  console.log("Server running in: http://localhost:3000");
});
