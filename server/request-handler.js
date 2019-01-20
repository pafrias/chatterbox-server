//require server storage

var storage = require('./server-storage.js');
var testStorage = new storage.Storage;
var _validURLs = ['/classes/messages'];


var requestHandler = function(request, response) {

  var { method, url } = request;
  console.log(`Serving request type ${method} at ${url}`);
  var [path, data] = url.split('?');

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'application/json';
  var statusCode = 200;

  if (_validURLs.includes(path) || path === '/') {
    if (method === 'OPTIONS') { 
      response.writeHead(statusCode, headers);
      response.end();
    } else if (method === 'GET') { 
      response.writeHead(statusCode, headers);
      var results = testStorage.retrieveAll();
      var responseBody = {results: results};
      response.end(JSON.stringify(responseBody));
    } else if (method === 'POST') {
      statusCode = 201;
      let body = [];
      request.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        var message = testStorage.add(JSON.parse(body));
        response.writeHead(statusCode, headers);
        response.end(JSON.stringify(message));
      });
    } else if (method === 'DELETE') {
      statusCode = 403;
      response.writeHead(statusCode, headers);
      response.end();
    }
  } else {
    statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end();
  }
};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, data',
  'access-control-max-age': 10 // Seconds.
};

var exports = module.exports = {};
exports.requestHandler = requestHandler;