## Copy and paste for free

Make http request:

```js
require('http').get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(result) {
        succeed(result);
    });
    res.on('error', function(e) {
        fail(e.message);
    })
});
```

## Http server

Just a set of templates for fast node.js server creation for tests and debug.

#### 200
```js
require('http').createServer(function(req, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello');
}).listen(8100);
```

Oneliner:
```sh
node -e "require('http').createServer(function(req, response) { response.writeHead(200, { 'Content-Type': 'text/plain' }); response.end('Hello'); }).listen(8100);"
```

#### 3XX
```js
require('http').createServer(function(req, response) {
    response.writeHead(302, {
        'Content-Type': 'text/plain',
        'Location': 'http://yandex.ru'
    });
    response.end('Hello');
}).listen(8100);
```

Oneliner:
```sh
node -e "require('http').createServer(function(req, response) { response.writeHead(302, { 'Content-Type': 'text/plain', 'Location': 'http://yandex.ru' }); response.end('Hello'); }).listen(8100);"
```

#### TODO
- 4XX
- 5XX
- send file back
- CORS
