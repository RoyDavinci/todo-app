const db = require("../db/db");

const getAllTodos = async (req, res) => {
	try {
		let data = await db.query(`SELECT * FROM todos`);
		res.status(200).json({
			message: "Data Sent",
			amount: data.rows.length,
			data: data.rows,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error in controller", error });
	}
};

const getSingleTodo = async (req, res) => {
	const id = req.params.id;
	try {
		let data = await db.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
		res.status(200).json({
			message: "Data Sent",
			data: data.rows,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error in controller", error });
	}
};

const updateTodo = async (req, res) => {
	const { name, place, start_date, note } = req.body;
	const id = req.params.id;

	try {
		let data = await db.query(
			"UPDATE todos SET name = $1, place = $2, start_date = $3, note = $4 WHERE todo_id = $5 RETURNING *",
			[name, place, start_date, note, id]
		);
		res.status(200).json({
			message: "Data Sent",
			data: data.rows,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error in controller", error });
	}
};

const createTodo = async (req, res) => {
	const { name, place, start_date, note } = req.body;

	try {
		let data = await db.query(
			"INSERT INTO todos (name , place, start_date, note) VALUES($1, $2, $3, $4) RETURNING *",
			[name, place, start_date, note]
		);
		res.status(200).json({
			message: "Data Sent",
			data,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error in controller", error });
	}
};

const deleteTodo = async (req, res) => {
	const id = req.params.id;

	try {
		let data = await db.query(
			"DELETE FROM todos WHERE todo_id = $1 RETURNING *",
			[id]
		);
		res.status(200).json({ message: "Data sent", data: data.rows });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error in controller", error });
	}
};

module.exports = {
	getAllTodos,
	getSingleTodo,
	updateTodo,
	createTodo,
	deleteTodo,
};
