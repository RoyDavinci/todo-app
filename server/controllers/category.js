const db = require("../db/db");

const getCategories = async (req, res) => {
	try {
		let data = await db.query(
			"SELECT * FROM category ORDER BY category_id ASC"
		);
		res.status(200).json({ message: "Category successfully gotten", data });
	} catch (error) {
		res.status(500).json({ message: "error in controller", error });
	}
};

const createCategory = async (req, res) => {
	const { name } = req.body;

	try {
		let data = await db.query(
			"INSERT INTO category(category_name) VALUES($1) RETURNING *",
			[name]
		);
		res.status(200).json({
			message: "Category successfully created",
			id: data.rows[0].category_id,
			name: data.rows[0].category_name,
		});
	} catch (error) {
		res
			.status(500)
			.json({ message: "error in controller", error: error.detail });
	}
};

const updateCategory = async (req, res) => {
	const id = req.params.id;
	const { name } = req.body;
	try {
		let data = await db.query(
			"UPDATE category SET category_name = $1 WHERE category_id = $2 RETURNING *",
			[name, id]
		);
		res.status(200).json({ message: "Category successfully updated", data });
	} catch (error) {
		res.status(500).json({ message: "error in controller", error });
	}
};

const getSingleCategory = async (req, res) => {
	const id = req.params.id;
	try {
		let data = await db.query("SELECT * FROM category WHERE category_id = $1", [
			id,
		]);
		res
			.status(200)
			.json({ message: "Category successfully gotten", data: data.rows[0] });
	} catch (error) {
		res.status(500).json({ message: "error in controller", error });
	}
};

const deleteCategory = async (req, res) => {
	const id = req.params.id;
	try {
		let data = await db.query(
			"DELETE FROM category WHERE category_id = $1 RETURNING *",
			[id]
		);
		res.status(200).json({ message: "Category successfully deleted", data });
	} catch (error) {
		res.status(500).json({ message: "error in controller", error });
	}
};

module.exports = {
	getCategories,
	createCategory,
	updateCategory,
	getSingleCategory,
	deleteCategory,
};
