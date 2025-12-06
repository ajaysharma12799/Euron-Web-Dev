const express = require("express");
const fs = require("fs");
const { v4 } = require("uuid");
const app = express();

// Middleware
app.use(express.json()); // To Parse JSON Body

const TODOS_FILE = "todos.json";

function test_middleware(req, res, next) {
  console.log("----- Test Middleware Start -----");
  console.log("Request Url: ", req.url);
  next();
  console.log("----- Test Middleware End -----");
}

function authMiddleware(req, res, next) {
  console.log("Authenticating User...");
  next();
}

function adminMiddleware(req, res, next) {
  console.log("Authorizing User as Admin...");
  next();
}

function logMiddleware(req, res, next) {
  console.log(
    `Request received at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
  );
  next();
}

// Intial Route
app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    message: "Server is up and running",
  });
});

// Get all todos
app.get("/todos", test_middleware, logMiddleware, (request, response) => {
  fs.readFile(TODOS_FILE, "utf-8", (error, data) => {
    if (error) {
      console.error("Error reading todos file", error);
    }
    response.status(200).json({
      todos: JSON.parse(data),
      status: "success",
      message: "Todos fetched successfully",
    });
  });
});

app.get("/todos/:todo_id", (request, response) => {
  try {
    const todoId = request.params.todo_id;

    if (!todoId) {
      return response.status(400).json({
        status: "failure",
        message: "Todo ID is required",
      });
    }

    // Read Existing File
    const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
    const parsedJSONData = JSON.parse(todoJsonData);

    // Find the element to be fetched
    const fetchedTodoItem = parsedJSONData.find(
      (item) => item.id === Number(todoId)
    );

    // Send response
    response.status(200).json({
      status: "success",
      message: "Todo fetched successfully",
      data: fetchedTodoItem,
    });
  } catch (error) {
    console.error("Error fetching todo:", error);
    response.status(500).json({
      status: "failure",
      message: error.message || "Internal Server Error",
    });
  }
});

app.post("/todos", (request, response) => {
  const data = request.body;

  // Update data as per our requirement
  const updatedData = {
    id: v4(),
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };

  // Read Existing File
  const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
  const parsedJSONData = JSON.parse(todoJsonData);
  parsedJSONData.push(updatedData);

  // Write updated data to file
  fs.writeFile(TODOS_FILE, JSON.stringify(parsedJSONData), (error) => {
    if (error) {
      console.error("Error while writing to file", error);
    }

    // Send response
    response.status(201).json({
      status: "success",
      message: "Todo added successfully",
      data: updatedData,
    });
  });
});

app.put("/todos/:todo_id", (request, response) => {
  const todoId = request.params.todo_id;
  const data = request.body;

  const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
  const parsedJSONData = JSON.parse(todoJsonData);
  const elementToUpdate = parsedJSONData.find((item) => item.id === todoId);

  const updatedTodo = {
    ...elementToUpdate,
    title: data?.title || elementToUpdate.title,
    description: data?.description || elementToUpdate.description,
  };

  // Filter out the element to be updated
  const filteredData = parsedJSONData.filter((item) => item.id !== todoId);
  filteredData.push(updatedTodo);

  fs.writeFile(TODOS_FILE, JSON.stringify(filteredData), (error) => {
    if (error) {
      console.error("Error while writing to file", error);
    }

    // Send response
    response.status(200).json({
      status: "success",
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  });
});

app.delete("/todos/:todo_id", (request, response) => {
  try {
    const todoId = request.params.todo_id;

    if (!todoId) {
      // Return Error Response
      return response.status(400).json({
        status: "failure",
        message: "Todo ID is required",
      });
    }

    // Read Existing File
    const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
    const parsedJSONData = JSON.parse(todoJsonData);

    const elementToDelete = parsedJSONData.find((item) => item.id === todoId);

    if (!elementToDelete) {
      // Return Error Response with 404
      return response.status(404).json({
        status: "failure",
        message: "Todo not found",
      });
    }

    // Filter out the element to be updated
    const filteredData = parsedJSONData.filter((item) => item.id !== todoId);

    // Write updated data to file
    fs.writeFile(TODOS_FILE, JSON.stringify(filteredData), (error) => {
      if (error) {
        console.error("Error while writing to file", error);
      }

      // Send response
      response.status(200).json({
        status: "success",
        message: "Todo deleted successfully",
        data: null,
      });
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
    response.status(500).json({
      status: "failure",
      message: error.message || "Internal Server Error",
    });
  }
});

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
