import React, { useState } from "react";
import "./list.css";
import "./create.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [values, setValues] = useState({
		name: "",
		place: "",
		start: "",
		note: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, place, start, note } = values;
		const response = await axios.post("http://localhost:3500/api/v1", {
			name,
			place,
			start_date: start,
			note,
		});
		console.log(response);
		navigate("/todo");
	};

	return (
		<div className='list'>
			<Link to='/todo'>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</Link>
			<h1>Add A New Task</h1>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='example'>Name: </label>
					<input
						type='text'
						className='form-control'
						id='example'
						placeholder='name'
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
						placeholder='place'
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
					Create
				</button>
			</form>
		</div>
	);
};

export default Create;
