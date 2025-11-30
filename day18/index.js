const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Server Ready to accept Requests");
  response.writeHead(200, {
    "content-type": "application/json",
  });
  //   response.end("Hello from Server");
  response.end(
    JSON.stringify({
      message: "Hello from Server",
      status: "success",
    })
  );
});

server.listen(1234, () => {
  console.log("Server is listening on port 1234");
});
