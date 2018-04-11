# http-receiver

An http endpoint that provides realtime views.

![record](https://user-images.githubusercontent.com/4427974/38619045-dd4027de-3dcd-11e8-99d7-8ae740be0fec.gif)

## Usage

```bash
npm i -g http-receiver
PORT=8080 http-receiver
```

Visit http://localhost:8080/monitor

## Environments

* `PORT`: the port to receive data, default 3000
* `SIZE`: queue size for the cached requests, default 10
