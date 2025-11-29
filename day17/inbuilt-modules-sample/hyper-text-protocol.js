const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Server Created Successfully");
});

server.listen(1234, () => {
  console.log("Server is listening on port 1234");
});
