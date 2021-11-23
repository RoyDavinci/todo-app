const express = require("express");
const router = express.Router();

const {
	getTodoFromCategories,
	createTodoFromCategories,
} = require("../controllers/categoryTodo");

router.get("/:category", getTodoFromCategories);
router.post("/:id/:category", createTodoFromCategories);

module.exports = router;
