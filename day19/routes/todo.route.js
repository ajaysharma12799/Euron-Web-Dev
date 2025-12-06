const express = require("express");
const logMiddleware = require("../middleware/logger.middleware");
const {
  getAllTodos,
  addTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
} = require("../controller/todo.controller");
const router = express.Router();

router.get("/todos", logMiddleware, getAllTodos);

router.get("/todos/:todo_id", logMiddleware, getTodoById);

router.post("/todos", logMiddleware, addTodo);

router.put("/todos/:todo_id", logMiddleware, updateTodo);

router.delete("/todos/:todo_id", logMiddleware, deleteTodo);

module.exports = router;
