import React, { useState } from "react";
import "./create.css";
import Dev from "../../../design/undraw_dev_productivity_umsq.svg";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const Create = () => {
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const { id } = useParams();

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let { data } = axios.post("http://localhost:3500/api/v2", { name });
		console.log(data);
		navigate(`/projects/${id}`);
	};

	return (
		<main className='main__container' id='main'>
			<Link to={`/projects/${id}`} className='learn'>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</Link>
			<img src={Dev} alt='' />
			<h1>Create a New Project/Category</h1>
			<form action='' onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					value={name}
					onChange={handleChange}
					placeholder='Project Name'
				/>
				<button className='create-btn'>Create</button>
			</form>
		</main>
	);
};

export default Create;
