function authMiddleware(req, res, next) {
  console.log("Authenticating User...");
  next();
}

module.exports = authMiddleware;
