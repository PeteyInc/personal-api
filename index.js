var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');
var port = 9999;
var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);




app.listen(port, function () {
  console.log("Listening to port:", port);
});
