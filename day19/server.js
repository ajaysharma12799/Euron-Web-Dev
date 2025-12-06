const express = require("express");
const fs = require("fs");
const { TODOS_FILE } = require("./constant/extra");
const app = express();

// Middleware
app.use(express.json()); // To Parse JSON Body

// Intial Route
app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    message: "Server is up and running",
  });
});

// Routes
app.use("/api", require("./routes/todo.route"));
app.use("/api/auth", require("./routes/auth.route"));

app.listen(3000, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    const fileExist = fs.existsSync(TODOS_FILE);
    if (!fileExist) {
      fs.writeFile(TODOS_FILE, JSON.stringify([]), (error) => {
        if (error) {
          console.error("Failed to create todos.json");
        }
      });
    }

    console.log("Server is running on port http://localhost:3000");
  }
});
