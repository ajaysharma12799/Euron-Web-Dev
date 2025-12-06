function logMiddleware(req, res, next) {
  console.log(
    `Request received at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
  );
  next();
}

module.exports = logMiddleware;
