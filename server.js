var path = require("path");
var express = require("express");
const bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, function () {
  console.log("listening on port ", PORT);
});
