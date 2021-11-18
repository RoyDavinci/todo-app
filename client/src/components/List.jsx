import React, { useState, useEffect } from "react";
import "./list.css";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getTodos = async () => {
			let { data } = await axios.get("http://localhost:3500/api/v1");
			console.log(data.data);
			setTodos(data.data);
		};
		getTodos();
	}, []);

	return (
		<div className='list'>
			<h1>All Tasks</h1>
			<ul>
				{todos.map((todo) => {
					return (
						<Link to={`/update/${4}`}>
							<li key={todo.id}>
								<p>{todo.name}</p> <button></button>
							</li>
						</Link>
					);
				})}
			</ul>
			<button className='btns'>
				<Link to='/create'>
					<i className='fas fa-plus    '></i>
				</Link>
			</button>
		</div>
	);
};

export default List;
