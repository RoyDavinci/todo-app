const db = require("../db/db");

const getAllTodos = async (req, res) => {
	const id = req.params.id;

	try {
		let data = await db.query(`SELECT * FROM todos WHERE user_id = $1`, [id]);
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
	const todo = req.params.todo;
	try {
		let data = await db.query(
			"SELECT * FROM todos WHERE user_id = $1 AND todo_id = $2",
			[id, todo]
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

const updateTodo = async (req, res) => {
	const { name, place, start_date, note } = req.body;
	const id = req.params.id;
	const todo = req.params.todo;

	try {
		let data = await db.query(
			"UPDATE todos SET name = $1, place = $2, start_date = $3, note = $4 WHERE user_id = $5 AND todo_id = $6 RETURNING *",
			[name, place, start_date, note, id, todo]
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
	const id = req.params.id;

	try {
		let data = await db.query(
			"INSERT INTO todos (name , place, start_date, note, user_id)  VALUES($1, $2, $3, $4, $5)  RETURNING *",
			[name, place, start_date, note, id]
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
	const todo = req.params.todo;

	try {
		let data = await db.query(
			"DELETE FROM todos WHERE user_id = $1 AND todo_id = $2 RETURNING *",
			[id, todo]
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
