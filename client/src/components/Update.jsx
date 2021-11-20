import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./list.css";
import "./create.css";
import axios from "axios";

const Update = () => {
	const [values, setValues] = useState({
		name: "",
		place: "",
		start: "",
		note: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const navigate = useNavigate();

	const { id } = useParams();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, start, note, place } = values;
		try {
			const response = await axios.put(`http://localhost:3500/api/v1/${id}`, {
				name,
				start_date: start,
				note,
				place,
			});
			console.log(response);
			navigate("/todo");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const getItem = async () => {
			let { data } = await axios.get(`http://localhost:3500/api/v1/${id}`);
			setValues({
				name: data.data[0].name,
				place: data.data[0].place,
				note: data.data[0].note,
			});
		};
		getItem();
	}, [id]);

	return (
		<div className='list'>
			<Link to='/todo'>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</Link>
			<h1>Edit Task</h1>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='example'>Name: </label>
					<input
						type='text'
						className='form-control'
						id='example'
						name='name'
						value={values.name}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='example'>Place: </label>
					<input
						type='text'
						className='form-control'
						id='example'
						name='place'
						value={values.place}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='start'>Start date: </label>

					<input
						type='date'
						id='start'
						name='start'
						value={values.start}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='note'>Note: </label>
					<textarea
						name='note'
						id='note'
						value={values.note}
						onChange={handleChange}
					></textarea>
				</div>
				<button type='submit' className='btn btn-primary'>
					Update
				</button>
			</form>
		</div>
	);
};

export default Update;
