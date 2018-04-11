# http-receiver

An http endpoint that provides realtime views.

## Usage

```bash
npm i -g http-receiver
PORT=8080 http-receiver
```

Visit http://localhost:8080/monitor

## Environments

* `PORT`: the port to receive data, default 3000
* `SIZE`: queue size for the cached requests, default 10
