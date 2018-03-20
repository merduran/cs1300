var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');
var engines = require('consolidate');
app.engine('html', engines.hogan);
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');

var identifiersArray = [];
var index = 0;
var roomID;
var username;

var db = require('any-db-sqlite3');
var conn = db.createConnection('sqlite3://chatroom.db');
var create = "CREATE TABLE message (id INTEGER PRIMARY KEY AUTOINCREMENT, roomID TEXT, username TEXT, body TEXT, time INTEGER);";
conn.query(create);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(4000);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/templates/home.html'));
});

app.post('/', function(req, res){
  console.log("2");
  roomID = req.body.roomID;
  if (roomID === undefined){
    roomID = generateUniqueIDGenerator();
  } else {
    // var sql = "SELECT * from message WHERE roomID=" + "'" + req.body.roomID + "'" + " ORDER BY time ASC";
    // if (conn.query()){

    // } 
  }
  res.redirect('/chatroom/' + roomID);
});

app.get('/chatroom/:roomID', function(req, res){
  res.render(path.join(__dirname + '/templates/room.html'), {roomID: roomID});
});

app.post('/chatroom/:roomID', saveMessage);

app.post('/chatroom/:roomID/messages', function(req, res){
  // Not user fed input, so no SQL injection.
  var sql = "SELECT username, body, time from message WHERE roomID=" + "'" + req.body.roomID + "'" + " ORDER BY time ASC";
  conn.query(sql, function(err, result){
    res.send(result.rows);
  });
});

function saveMessage(req, res){
  // req.params.roomID not user fed.
  var sql = "INSERT INTO message VALUES(NULL," + "'" + req.params.roomID + "','" + req.body.username + "','" + req.body.body + "'," + "'" + new Date() + "');"
  conn.query(sql);
}

function generateUniqueIDGenerator(){
	var ID = '';   	
   	identifiersArray.push(ID);
   	while (identifiersArray.includes(ID)){
   		ID = generateRoomIdentifier();
   	}
   	identifiersArray.push(ID);
   	identifiersArray.splice(index, 1);
   	index++;
   	return ID;
}

function generateRoomIdentifier() {
  var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var result = '';
  for (var i = 0; i < 6; i++){
      result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}





