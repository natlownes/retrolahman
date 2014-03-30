var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    util = require("util"),
    path = require("path"),
    fs = require("fs");

var port = parseFloat(process.argv[2]) || 8081;

var encodePath = function(uri) {
  var isApiRequest = uri.pathname.match(/^\/v1\//) &&
    !uri.pathname.match(/_design/)

  if ( isApiRequest ) {
    var path         = uri.pathname.replace(/^\/v1\//, '');
    var encodedPath  = encodeURIComponent(path);
    return '/v1/' + encodedPath
  } else {
    return uri.pathname
  }
}

var options = function(request) {
  var uri         = url.parse(request.url);
  var encodedPath = encodePath(uri);

  var opt = {
    host: uri.hostname,
    port: uri.port || 5984,
    path: encodedPath,
    method: request.method,
    headers: request.headers
  };
  opt.headers['connection'] = 'keep-alive';
  return opt;
}

var getHeaders = function (response) {
  headers = response.headers
  headers['Access-Control-Allow-Origin']  = '*';
  headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
  return headers;
}

http.createServer(function(request, response) {
  sys.log("--> " + request.method + " " + request.url);
  var remoteRequest = http.request(options(request), function (remoteResponse) {
    responseHeaders = getHeaders(remoteResponse);

    response.writeHead(remoteResponse.statusCode, responseHeaders);
    remoteResponse.on('end', function () {
      sys.log("<-- " + response.statusCode + " " +  request.url);
    });
    remoteResponse.pipe(response)
  });
  request.pipe(remoteRequest)
}).listen(port);

sys.log('Listening on port ' + port);
