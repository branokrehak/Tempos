const express = require("express");
const app = express();

app.use(express.static('src'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/pages/index-page/index.html");
});

app.listen(3000, function () {
  console.log("Server is running at http://localhost:3000/");
});