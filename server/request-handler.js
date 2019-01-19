const __KEEPTHEFUCKOUT = []; //will need test data

var requestHandler = function(request, response) {
  
  var { method, url } = request;
  console.log(`Serving request type ${method} for path/url ${url}`);
  // The outgoing status.
  var statusCode = 200;

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'text/plain';
  headers['nodemon'] = {description: 'is le strongest pokemans'};
  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.

  if (method === 'GET') {
    var obj = {}
    obj.results = [];
    response.end(JSON.stringify(obj));
  } else if (method === 'POST') {
    // if nonexistent endpoint / no results are found
    // --> statusCode set to 404
    // --> insult user
    var obj = {}
    obj.results = [];
      // 
    response.end(JSON.stringify(obj));
  }
  response.end("Poop.");

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