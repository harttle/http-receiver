const url = require('url');

class Request {
    constructor (req) {
        this.ip = req.ip;
        this.pathname = url.parse(req.url).pathname;
        this.url = req.url;
        this.query = req.query;
        this.datetime = new Date();
        this.headers = req.headers;
        this.body = req.body;
    }
}

module.exports = Request;
