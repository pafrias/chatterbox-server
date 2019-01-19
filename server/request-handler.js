var _storage = []; //will need test data
var _validURLs = ['/classes/messages'];

/*{"objectId": "dau3bsscwi","username":"John","text":"Flying Killer Robots","roomname":"solitary confinement"}, 
        {"objectId": "dau3bsscqi","username":"John","text":"Flying Killer Robots","roomname":"solitary confinement"}, 
        {"objectId": "da33bsscwi","username":"John","text":"Flying Killer Robots","roomname":"solitary confinement"}, 
        {"objectId": "da13bsscwi","username":"John","text":"Flying Killer Robots","roomname":"solitary confinement"}, 
        {"objectId": "deu3bsscwi","username":"John","text":"Flying Killer Robots","roomname":"solitary confinement"}*/
var requestHandler = function(request, response) {
  
  var { method, url } = request;
  console.log(`Serving request type ${method} at ${url}`);

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'text/plain';
  var statusCode = 200;
  
  if (_validURLs.includes(url) || url === '/') {
    if (method === 'OPTIONS') { 
      response.writeHead(statusCode, headers);
      response.end();
    } else if (method === 'GET') { 
      response.writeHead(statusCode, headers);
      var results = _storage;
      var responseBody = {results: results};
      response.end(JSON.stringify(responseBody));
    } else if (method === 'POST') {
      // catch empty url
      statusCode = 201;
      let body = [];
      request.on('data', (chunk) => {
        body.push(chunk);
      }).on('end',() => {
        body = Buffer.concat(body).toString();
        _storage.push(JSON.parse(body))
      });
      // var results = _storage;
      // console.log(_storage);
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(_storage));
    } 
  } else {
    statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end();
  }
  //response.end("Poop.");

  /*
  1) if the request.method was 'GET'
  ---> (ex. request.url is from a room called disco)
  ----> get the number of messages to fetch from request.headers.data
  ----> access our storage, find that number of messages from disco
  ----> response.end(the messages from disco)
  2) if error
  --> statusCode = 4xx
  --> response.somethingabouterrors
  */
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
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var exports = module.exports = {};
exports.requestHandler = requestHandler;

/* function will have access to these object properties:
--> headers
----> the required headers of the request to be processed
      by the server
--> request
----> request.method / one of the 5 restful methods
----> request.url / the request url/path
----> request.headers / the other properties of the ajax request
------> const theFlag = response.
----> Headers
----> data is here???

--> response
----> 
*/

// if we haz bass
  // then lols
// else 
  // super cry