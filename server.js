var express = require('express');
var app = express();

var public = __dirname+'/public';

app.get('/', function(req, res) {
    res.sendFile(public+'/index.html');
});


// Public files: The messy way
app.use("/", express.static(public));


app.listen(8085, function () {
  console.log('Server listening on port 8085!');
});
