var express= require("express");
var app = express()

app.listen(7000, function () {
  console.log('Example app listening on port 7000!')
})
app.use(express.static('client'));
