import React, { useState, useEffect } from "react";
import "./list.css";
import "./detail.css";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";

const Detail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [item, setItem] = useState([]);

	useEffect(() => {
		const getItem = async () => {
			const response = await axios.get(`http://localhost:3500/api/v1/${id}`);

			setItem(response.data.data);
		};
		getItem();
	}, [id]);

	const deleteItem = async (id) => {
		const response = await axios.delete(`http://localhost:3500/api/v1/${id}`);
		navigate("/todo");
		console.log(response);
	};

	return (
		<div className='list'>
			<Link to='/todo'>
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
					<Link to={`/update/${id}`}>Update</Link>
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
