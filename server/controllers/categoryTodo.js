const db = require("../db/db");

const getTodoFromCategories = async (req, res) => {
	const id = req.params.id;
	try {
		let data = await db.query("SELECT * FROM todos WHERE category_id = $1", [
			id,
		]);
		res.status(200).json({ message: "Successfully gotten data", data });
	} catch (error) {
		res.status(500).json({ message: "error on controller", error });
	}
};

const createTodoFromCategories = async (req, res) => {
	const { name, place, start_date, note } = req.body;
	const id = req.params.id;
	const category = req.params.category;
	try {
		let data = await db.query(
			"INSERT INTO todos (name , place, start_date, note, user_id, category_id)  VALUES($1, $2, $3, $4, $5, $6)  RETURNING *",
			[name, place, start_date, note, id, category]
		);
		res.status(200).json({ message: "Successfully gotten data", data });
	} catch (error) {
		res.status(500).json({ message: "error on controller", error });
		console.log(error);
	}
};

module.exports = { getTodoFromCategories, createTodoFromCategories };
