# http-receiver

An http endpoint that provides realtime views.

![record](https://user-images.githubusercontent.com/4427974/38619045-dd4027de-3dcd-11e8-99d7-8ae740be0fec.gif)

## Get Started

Copy the following code into your page:

```html
<script>
window.rlog = window.remoteLog = function () {
    var text = Array.prototype.slice.call(arguments).map(function (arg) {
        return typeof arg === 'object' ? JSON.stringify(arg) : arg;
    }).join(' ');
    var img = document.createElement('img');
    img.src = 'receiver.harttle.com/?text=' + encodeURIComponent(text);
};
rlog('foo', '我爱你中国', {foo: 'bar'});    // send anything using rlog
</script>
```

Checkout  <http://monitor.harttle.com> for your log.

## Host Yourself

The receiver is a Node.js-based server and available on npm:

```bash
npm i -g http-receiver
PORT=8080 http-receiver
```

Send log to <http://localhost:3000> and checkout <http://localhost:8080/monitor> for your log.

## Environments

* `PORT`: the port to receive data, default 3000
* `SIZE`: queue size for the cached requests, default 10
