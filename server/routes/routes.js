const express = require("express");
const router = express.Router();

const {
	getAllTodos,
	getSingleTodo,
	updateTodo,
	createTodo,
	deleteTodo,
} = require("../controllers/todo");

router.get("/:id", getAllTodos);
router.post("/:id", createTodo);
router.get("/:id/:todo", getSingleTodo);
router.put("/:id/:todo", updateTodo);
router.delete("/:id/:todo", deleteTodo);

module.exports = router;
