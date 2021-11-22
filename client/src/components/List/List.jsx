import React, { useState, useEffect } from "react";
import "./list.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import Create from "../../design/undraw_personal_notebook_re_d7dc.svg";
const List = () => {
	const { pathname } = useLocation();
	const id = pathname.split("/")[1];
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getTodos = async () => {
			let { data } = await axios.get(`http://localhost:3500/api/v1/${id}`);
			setTodos(data.data);
		};
		getTodos();
	}, [id]);

	const initialRender = () => {
		return (
			<>
				<div className='list'>
					<Link to={`/user/${id}`} className='back'>
						<i className='fa fa-arrow-left' aria-hidden='true'></i>
					</Link>
					<div className='list-container'>
						<img src={Create} alt='' className='create' />
						<h1 className='initial-header'>Create A New Todo</h1>
						<button className='btns'>
							<Link to={`/create/${id}`}>
								<i className='fas fa-plus'></i>
							</Link>
						</button>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			{todos.length > 0 ? (
				<div className='list'>
					<Link to={`/user/${id}`} className='back'>
						<i className='fa fa-arrow-left' aria-hidden='true'></i>
					</Link>
					<div className='list-container'>
						<h1>All Tasks</h1>
						<ul>
							{todos.map((todo) => {
								return (
									<Link to={`/${id}/detail/${todo.todo_id}`} key={todo.todo_id}>
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
							<Link to={`/create/${id}`}>
								<i className='fas fa-plus'></i>
							</Link>
						</button>
					</div>
				</div>
			) : (
				initialRender()
			)}
		</>
	);
};

export default List;
