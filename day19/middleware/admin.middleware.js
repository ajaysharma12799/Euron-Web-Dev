function adminMiddleware(req, res, next) {
  console.log("Authorizing User as Admin...");
  next();
}

module.exports = adminMiddleware;
