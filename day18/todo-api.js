const http = require("http");
const fs = require("fs");
const { v4 } = require("uuid");

const TODOS_FILE = "todos.json";

const server = http.createServer((request, response) => {
  // Create Todos.json file
  const fileExist = fs.existsSync(TODOS_FILE);

  if (!fileExist) {
    fs.writeFile(TODOS_FILE, JSON.stringify([]), (error) => {
      if (error) {
        console.error("Failed to create todos.json");
      }
    });
  }

  const pathName = request.url;
  const method = request.method;
  const queryParams = pathName.split("?")[1];
  const queryParamId = queryParams.split("=")[1];

  if (pathName === "/" && method === "GET") {
    response.writeHead(200, {
      "content-type": "application/json",
    });
    response.end(
      JSON.stringify({
        status: "success",
        message: "Server is up and running",
      })
    );
  }

  // Get all todos
  if (pathName === "/todos" && method === "GET") {
    // Read todos file and return entire data as JSON with proper headers
    fs.readFile(TODOS_FILE, "utf-8", (error, data) => {
      if (error) {
        console.error("Error reading todos file", error);
      }
      response.writeHead(200, {
        "content-type": "application/json",
      });
      response.end(
        JSON.stringify({
          todos: JSON.parse(data),
          status: "success",
          message: "Todos fetched successfully",
        })
      );
    });
  }

  // Get Todo
  if (pathName.includes("/todos?id") && method === "GET") {
    // Read Existing File
    const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
    const parsedJSONData = JSON.parse(todoJsonData);

    // Find the element to be fetched
    const fetchedTodoItem = parsedJSONData.find(
      (item) => item.id === queryParamId
    );

    // Send response
    response.writeHead(200, {
      "content-type": "application/json",
    });
    response.end(
      JSON.stringify({
        status: "success",
        message: "Todo fetched successfully",
        data: fetchedTodoItem,
      })
    );
  }

  // Add New Todo
  if (pathName === "/todos" && method === "POST") {
    // Somehow I want incoming data from request
    let body = "";
    request.on("data", (chunk) => {
      body = body + chunk?.toString();
    });

    request.on("end", () => {
      const jsonData = JSON.parse(body);
      console.log("Incoming Data: ", typeof jsonData);

      // Update data as per our requirement
      const updatedData = {
        id: v4(),
        createdAt: new Date().toLocaleDateString(),
        ...jsonData,
      };

      console.log("Updated Data: ", updatedData);
      // Read Existing File
      const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
      console.log("todoJsonData:", todoJsonData);
      const parsedJSONData = JSON.parse(todoJsonData);
      parsedJSONData.push(updatedData);

      // Write updated data to file
      fs.writeFile(TODOS_FILE, JSON.stringify(parsedJSONData), (error) => {
        if (error) {
          console.error("Error while writing to file", error);
        }

        // Send response
        response.writeHead(201, {
          "content-type": "application/json",
        });
        response.end(
          JSON.stringify({
            status: "success",
            message: "Todo added successfully",
            data: updatedData,
          })
        );
      });
    });
  }

  // Update New Todo
  if (pathName.includes("/todos?id") && method === "PUT") {
    // Somehow I want incoming data from request
    let body = "";
    request.on("data", (chunk) => {
      body = body + chunk?.toString();
    });

    request.on("end", () => {
      const jsonData = JSON.parse(body);
      console.log("Incoming Data: ", typeof jsonData);

      // Read Existing File
      const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
      console.log("todoJsonData:", todoJsonData);
      const parsedJSONData = JSON.parse(todoJsonData);
      const elementToUpdate = parsedJSONData.find(
        (item) => item.id === queryParamId
      );
      console.log("Element To Update: ", elementToUpdate);
      const updatedTodo = {
        ...elementToUpdate,
        title: jsonData?.title || elementToUpdate.title,
        description: jsonData?.description || elementToUpdate.description,
      };

      //   Filter out the element to be updated
      const filteredData = parsedJSONData.filter(
        (item) => item.id !== queryParamId
      );
      filteredData.push(updatedTodo);

      // Write updated data to file
      fs.writeFile(TODOS_FILE, JSON.stringify(filteredData), (error) => {
        if (error) {
          console.error("Error while writing to file", error);
        }

        // Send response
        response.writeHead(200, {
          "content-type": "application/json",
        });
        response.end(
          JSON.stringify({
            status: "success",
            message: "Todo updated successfully",
            data: updatedTodo,
          })
        );
      });
    });
  }

  // Delete Todo
  if (pathName.includes("/todos?id") && method === "DELETE") {
    // Read Existing File
    const todoJsonData = fs.readFileSync(TODOS_FILE, "utf-8");
    const parsedJSONData = JSON.parse(todoJsonData);

    // Filter out the element to be updated
    const filteredData = parsedJSONData.filter(
      (item) => item.id !== queryParamId
    );

    // Write updated data to file
    fs.writeFile(TODOS_FILE, JSON.stringify(filteredData), (error) => {
      if (error) {
        console.error("Error while writing to file", error);
      }

      // Send response
      response.writeHead(200, {
        "content-type": "application/json",
      });
      response.end(
        JSON.stringify({
          status: "success",
          message: "Todo deleted successfully",
          data: null,
        })
      );
    });
  }
});

server.listen(1234, () => {
  console.log("Server is listening on port 1234");
});

/**
 * Homework for you:
 * 1. Add validation for incoming data for POST and PUT requests
 * 2. Handle errors properly and return proper status codes
 * 3. Add more fields to todo item like status (pending, completed), dueDate etc.
 * 4. Implement filtering of todos based on status and dueDate
 * 5. Implement pagination for GET /todos endpoint
 */
