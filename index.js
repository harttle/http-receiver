const Request = require('./request');
const Queue = require('./queue');
const concat = require('concat-stream');
const app = require('express')();
const receiver = require('express')();
const web = require('http').Server(app);
const io = require('socket.io')(web);
const path = require('path');

var logs = new Queue(process.env.SIZE || 10);

app.use(function (req, res, next) {
    req.pipe(concat(function (data) {
        req.body = data.toString();
        next();
    }));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

receiver.use(function (req, res) {
    var item = new Request(req);
    console.log('request received:', item);
    logs.push(item);
    io.emit('request', item);
    res.end();
});

io.on('connection', function (socket) {
    var remote = socket.request.socket;
    console.log(`${remote.localAddress}:${remote.localPort} connected`);
    io.emit('history', logs.all());
});

module.exports = {web, receiver};
