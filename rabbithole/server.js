if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const cookieParser = require('cookie-parser')
const knex = require('knex')(config)
const port2 = process.env.PORT || 8001

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static('public'))

const token = require('./routes/token')
const users = require('./routes/users')

app.use(token)
app.use(users)

var io = require('socket.io')()
var Stopwatch = require('timer-stopwatch');
var timer = new Stopwatch(100000)
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

io.on('connection', function(socket){
  socket.on('vote1', function(msg){
    io.emit('vote1', msg);
  });
  socket.on('vote2', function(msg){
    io.emit('vote2', msg);
  });
  socket.on('response1', function(msg){
    io.emit('response1', msg);
  });
  socket.on('response2', function(msg){
    io.emit('resonse2', msg);
  });
  socket.on('topic', function(msg){
    io.emit('topic', msg);
  });
});


io.listen(process.env.PORT || 8001);
console.log('listening on port2 ', port2);

app.listen(process.env.PORT || 8000, function(){
  console.log("listening on port", this.address().port, app.settings.env);
});
