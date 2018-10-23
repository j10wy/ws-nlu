// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
// Setup Socket.io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
io.on('connection', function(){ 
  console.log('A user connected');
});

// listen for requests :)
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});