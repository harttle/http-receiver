function factory (req, body) {
    return {
        ip: req.ip,
        url: req.url,
        datetime: new Date(),
        headers: req.headers,
        body: req.body
    };
}

module.exports = factory;
