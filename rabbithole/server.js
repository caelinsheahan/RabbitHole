//var app = require('express')()
//var http = require('http').Server(app)
var io = require('socket.io')()
var Stopwatch = require('timer-stopwatch');
var timer = new Stopwatch(60000)
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html')
// })

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    timer.start()
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', timer.ms);
    }, interval);
  });
});

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });
//
// io.on('connection', function(socket){
//   socket.on('vote', function(msg){
//     io.emit('vote', msg);
//   });
// });

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
