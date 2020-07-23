var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('/Users/hazemhamed/Desktop/V2embedded/V2embedded.html');
});
app.listen(process.env.PORT ||3000, function () {
  console.log('Example app listening on port 3000!');
});