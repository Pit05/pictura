var  express=require('express');

//var ejs = require('ejs');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var database = require('./config/database'); // mongoose for mongodb
var port  	 = process.env.PORT || 3000;
app.set('view engine', 'ejs');

//  besoin  pour  posting
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());


// Connect to the db
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
    // Create your schemas and models here.
});
mongoose.connect(database.url);
app.use(express.static(__dirname + '/public'));


require('./app/HomeRouter.js')(app);
require('./app/controllers/LoginRouter.js')(app);
require('./app/controllers/backEnd/HomeBackEnd.js')(app);
require('./app/controllers/backEnd/BadgeRouter.js')(app);
require('./app/controllers/backEnd/ThemeRouter.js')(app);
//require('./app/controllers/BadgeRouter.js')(app);

io.on('connection', function(socket){

   // console.log('a user connected');
    socket.on('chat message', function(msg){

        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    /*   socket.on('disconnect', function(){
        console.log('user disconnected');
    });*/
});

//https://cdn.socket.io/socket.io-1.2.0.js
http.listen(3000, function(){
    console.log('listening on *:3000');
});



