const fs = require("fs");
const { v4 } = require("uuid");
const { TODOS_FILE } = require("../constant/extra");

const getAllTodos = (request, response) => {
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
};

const getTodoById = (request, response) => {
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
};

const addTodo = (request, response) => {
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
};

const updateTodo = (request, response) => {
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
};

const deleteTodo = (request, response) => {
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
};

module.exports = {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
};
