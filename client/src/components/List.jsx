import React, { useState, useEffect } from "react";
import "./list.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

const List = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getTodos = async () => {
			let { data } = await axios.get("http://localhost:3500/api/v1");
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
						<Link to={`/detail/${todo.todo_id}`} key={todo.todo_id}>
							<li>
								<p>{todo.name}</p>{" "}
								{todo?.start_date !== null ? (
									<Moment format='YYYY/MM/DD'>{todo.start_date}</Moment>
								) : (
									<p>No Date</p>
								)}
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
