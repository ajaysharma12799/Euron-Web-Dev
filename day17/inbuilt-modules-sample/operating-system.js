const os = require("os");

console.log("Total Number of CPUs: ", os.cpus());
console.log("Free Menory Available: ", os.freemem());
console.log("Host Name: ", os.hostname());
console.log("Total Memory Available : ", os.totalmem());
console.log("Platform: ", os.platform());
console.log("OS Type: ", os.type());
console.log("Uptime of the System: ", os.uptime());
console.log("User Info: ", os.userInfo());
