import React from "react";
import "./list.css";
import "./create.css";
import { Link } from "react-router-dom";

const Create = () => {
	return (
		<div className='list'>
			<Link to='/'>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</Link>
			<h1>Add A New Task</h1>
			<form>
				<div className='form-group'>
					<label htmlFor='example'>Name: </label>
					<input
						type='text'
						className='form-control'
						id='example'
						placeholder='name'
						name='name'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='example'>Place: </label>
					<input
						type='text'
						className='form-control'
						id='example'
						placeholder='name'
						name='place'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='start'>Start date: </label>

					<input type='date' id='start' name='time' />
				</div>
				<div className='form-group'>
					<label htmlFor='note'>Note: </label>
					<textarea name='note' id='note'></textarea>
				</div>
				<button type='submit' className='btn btn-primary'>
					Create
				</button>
			</form>
		</div>
	);
};

export default Create;
