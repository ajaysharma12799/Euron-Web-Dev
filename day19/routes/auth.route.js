const express = require("express");
const router = express.Router();

router.post("/login", (request, response) => {
  response.status(200).json({
    status: "success",
    message: "Login route",
  });
});

module.exports = router;
