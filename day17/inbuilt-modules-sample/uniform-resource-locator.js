const baseUrl = "https://example.com:8080/path/name?query=string#hash";

const url = new URL(baseUrl);

console.log("URL: ", url);
console.log("Pathname: ", url.pathname);
console.log("Search: ", url.search);
console.log("Hash: ", url.hash);
console.log("Protocol: ", url.protocol);
console.log("Host: ", url.host);
console.log("Hostname: ", url.hostname);
console.log("Port: ", url.port);

console.log("baseURL: ", baseUrl);
