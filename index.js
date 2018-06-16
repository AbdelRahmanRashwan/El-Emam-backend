const express = require('express');
const app = express();
var education = require('./modules/Education');
var position = require('./modules/Positions');
var achievement = require('./modules/Achievements');
const port = 4000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/education', function(req, res){
  var educationList = [];
  for (var i=0 ; i<4 ; i++){
    educationList.push(education);
  }
  res.json({"education":educationList});
});

app.get('/achievements', function(req, res){
  var achievementList = [];
  for (var i=0 ; i<6 ; i++){
    achievementList.push(achievement);
  }
  res.json({"achievements":achievementList});
});

app.get('/positions', function(req, res){
  var positionList = [];
  for (var i=0 ; i<6 ; i++){
    positionList.push(position);
  }
  res.json({"positions":positionList});
});


app.listen(port, ()=>{
  console.log('server started on port '+port);
});
