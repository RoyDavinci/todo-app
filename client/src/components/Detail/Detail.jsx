import React, { useState, useEffect } from "react";
import "../List/list.css";
import "./detail.css";
import axios from "axios";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";

const Detail = () => {
	const { pathname } = useLocation();
	const id = pathname.split("/")[1];
	const todo = pathname.split("/")[3];
	const navigate = useNavigate();
	const [item, setItem] = useState([]);

	useEffect(() => {
		const getItem = async () => {
			const response = await axios.get(
				`http://localhost:3500/api/v1/${id}/${todo}`
			);
			console.log(response);
			setItem(response.data.data);
		};
		getItem();
	}, [id, todo]);

	const deleteItem = async (id) => {
		const response = await axios.delete(
			`http://localhost:3500/api/v1/${id}/${todo}`
		);
		navigate(`/${id}/todo/${todo}`);
		console.log(response);
	};

	return (
		<div className='list'>
			<Link to={`/${id}/todo/${todo}`}>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</Link>
			<h1>{item[0]?.name}</h1>
			<h4>
				Place :
				<span>
					{item[0]?.place !== null ? (
						item[0]?.place
					) : (
						<p>Location not Provided</p>
					)}
				</span>
			</h4>
			<div className='time'>
				<p>Time : </p>
				<span className='time'>
					<Moment format='YYYY/MM/DD'>{item[0]?.start_date}</Moment>
				</span>
			</div>
			<div className='note'>
				<p className='note-para'>Note : </p>
				<p>{item[0]?.note}</p>
			</div>

			<div className='button'>
				<button className='update'>
					<Link to={`/update/${id}/${todo}`}>Update</Link>
				</button>
				<button
					onClick={() => {
						deleteItem(id);
					}}
					className='delete'
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Detail;
