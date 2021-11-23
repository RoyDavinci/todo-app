const express = require("express");
const router = express.Router();
const {
	getCategories,
	createCategory,
	updateCategory,
	getSingleCategory,
	deleteCategory,
} = require("../controllers/category");

router.get("/", getCategories);
router.get("/:id", getSingleCategory);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
