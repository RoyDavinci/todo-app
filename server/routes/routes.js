const express = require("express");
const router = express.Router();

const {
	getAllTodos,
	getSingleTodo,
	updateTodo,
	createTodo,
	deleteTodo,
} = require("../controllers/todo");

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getSingleTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
