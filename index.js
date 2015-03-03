var  express=require('express');

//var ejs = require('ejs');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var session = require('client-sessions');
var database = require('./config/database'); // mongoose for mongodb
var port  	 = process.env.PORT || 3000;
app.set('view engine', 'ejs');

//  besoin  pour  posting
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());
app.use(session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
}));


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

require('./app/controllers/frontend/accueilRooter.js')(app);
require('./app/controllers/ConnectionRouter.js')(app);
//require('./app/HomeRouter.js')(app);
require('./app/controllers/LoginRouter.js')(app);
require('./app/controllers/WebService/service')(app);
require('./app/controllers/frontend/PhotosRouter.js')(app);
require('./app/controllers/backEnd/HomeBackEnd.js')(app);
require('./app/controllers/backEnd/BadgeRouter.js')(app);
require('./app/controllers/frontend/ProfileRouter.js')(app);
//require('./app/controllers/BadgeRouter.js')(app);

var usernames = {};
var numUsers = 0;

io.on('connection', function (socket) {
    var addedUser = false;

    // when the client emits 'new message', this listens and executes
    socket.on('new message', function (data) {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });

    // when the client emits 'add user', this listens and executes
    socket.on('add user', function (username) {
        // we store the username in the socket session for this client
        socket.username = username;
        // add the client's username to the global list
        usernames[username] = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', function () {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });

    // when the client emits 'stop typing', we broadcast it to others
    socket.on('stop typing', function () {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
        // remove the username from global usernames list
        if (addedUser) {
            delete usernames[socket.username];
            --numUsers;

            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});

//https://cdn.socket.io/socket.io-1.2.0.js
http.listen(3000, function(){
    console.log('listening on *:3000');
});



