#!/usr/bin/env node

const request = require('./request');
const Queue = require('./queue');
const concat = require('concat-stream');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

var logs = new Queue(process.env.SIZE || 10);
var port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    req.pipe(concat(function (data) {
        req.body = data.toString();
        next();
    }));
});

app.get('/monitor', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(function (req, res) {
    var item = request(req);
    logs.push(item);
    io.emit('request', item);
    res.end();
});

io.on('connection', function (socket) {
    var remote = socket.request.socket;
    console.log(`${remote.localAddress}:${remote.localPort} connected`);
    io.emit('history', logs.all());
});

http.listen(port, () => {
    console.log('http receiver listening to', port);
    console.log(`monitor: http://localhost:${port}/monitor`);
});
