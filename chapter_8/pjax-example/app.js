var express = require("express")
var app = express()

app.get("/rambo-5", function (req, res) {
  res.send("<p>Rambo 5 is the 5. best movie of the Rambo series</p>")
})

app.use(express.static('public'));

var server = app.listen(3000, function () {
  console.log("App started... visit http://localhost:3000")
})

