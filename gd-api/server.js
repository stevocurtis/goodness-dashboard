var http = require("http");

startServer();

function startServer() {
  http
    .createServer(function(request, response) {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Hello World");
      response.write("\n");
      response.write("Hello Steve");
      response.end();
    })
    .listen(8888);
}
