import React, { useState } from "react";
// import Cookies from "universal-cookie";
import axios from "axios";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const initialState = {
	username: "",
	email: "",
	password: "",
};

// const cookies = new Cookies();

const Auth = () => {
	const [signup, setSignup] = useState(true);
	const [form, setForm] = useState(initialState);

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { username, password, email } = form;

		const URL = "http://localhost:3500/api/v2/auth";

		let { data } = await axios.post(`${URL}/${signup ? "signup" : "login"}`, {
			username,
			password,
			email,
		});
		console.log(data);
		navigate("/todo");

		// cookies.set("token", token);
		// cookies.set("userId", userId);
		// cookies.set("username", username);

		// if (signup) {
		// 	cookies.set("hashedPassword", hashedPassword);
		// }

		// window.location.reload();
	};
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const switchMode = () => {
		setSignup(!signup);
	};

	return (
		<div className='auth__form-container'>
			<div className='auth__form-container_fields-content'>
				<p>{signup ? "SignUp" : "Login"}</p>
				<form action='' onSubmit={handleSubmit}>
					<div className='auth__form-container_fields-content_input'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							name='username'
							id='username'
							placeholder='User name'
							onChange={handleChange}
							required
						/>
					</div>
					{signup && (
						<div className='auth__form-container_fields-content_input'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email'
								onChange={handleChange}
								required
							/>
						</div>
					)}
					<div className='auth__form-container_fields-content_input'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							onChange={handleChange}
							required
						/>
					</div>

					<div className='auth__form-container_fields-content_button'>
						<button>{signup ? "Sign Up" : "Login"}</button>
					</div>
				</form>
				<div className='auth__form-container_fields-account'>
					<p>
						{signup ? "Already have an account? " : "Don't have an account? "}
						<span onClick={switchMode}>{signup ? "SignUp" : "Login"}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Auth;
