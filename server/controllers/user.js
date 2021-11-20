const bcrypt = require("bcrypt");
const db = require("../db/db");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
	const { username, password, email } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		let data = await db.query(
			"INSERT INTO users (username, password, email) VALUES($1, $2, $3) RETURNING *",
			[username, hashedPassword, email]
		);
		res.status(200).json({ message: "User Created successfully", data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "error on controller", error });
	}
};

const login = (req, res) => {
	const { email, password, username } = req.body;

	const query = {
		name: "fetch-user",
		text: "SELECT * FROM users WHERE email = $1 OR username = $2 ",
		values: [email, username],
	};
	// callback
	try {
		db.query(query, async (err, result) => {
			if (err) {
				res.status(500).json({
					message: "Error on query",
					data: err.stack,
				});
				console.log(err.stack);
			} else {
				const success = await bcrypt.compare(password, result.rows[0].password);
				const token = jwt.sign(
					{ result: result.rows[0].user_id },
					process.env.SECRET_KEY,
					{ expiresIn: "1d" }
				);
				if (success) {
					res.status(200).json({
						message: "User Login successfully",
						result: result.rows[0].password,
						token,
					});
				} else {
					res.status(500).json({ message: "Incorrect Password" });
				}
			}
		});
	} catch (error) {
		res.status(500).json({ message: "Error on controller", error });
	}
};
const getUser = async (req, res) => {
	try {
		let data = await db.query("SELECT * FROM users");
		res.status(200).json({ message: "User Created successfully", data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "error on controller", error });
	}
};

module.exports = { signup, getUser, login };
