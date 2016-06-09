var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');

var port = 9999;
var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/jobs', mainCtrl.getJobs);
app.get('/jobs/latest', mainCtrl.getLastJob);
app.get('/hobby', mainCtrl.getHobbies);
app.get('/hobby/:type', mainCtrl.getHobbyType);




app.listen(port, function () {
  console.log("Listening to port:", port);
});
