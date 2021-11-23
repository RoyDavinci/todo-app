import React, { useState, useEffect } from "react";
import "./update.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Updates from "../../../design/undraw_content_re_33px.svg";
const Update = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const category = pathname.split("/")[2];
	const [item, setItem] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:3500/api/v2/${id}`, {
			name: item,
		});
		navigate(`/projects/${category}`);
	};

	const handleChange = (e) => {
		setItem(e.target.value);
	};

	useEffect(() => {
		const fetchItem = async () => {
			let { data } = await axios.get(`http://localhost:3500/api/v2/${id}`);
			setItem(data.data);
		};
		fetchItem();
	}, [id]);

	return (
		<section className='update_section'>
			<img src={Updates} alt='' />
			<form action='' onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					value={item.category_name}
					onChange={handleChange}
					placeholder='Project Name'
				/>
				<button className='update-btn'>Update</button>
			</form>
		</section>
	);
};

export default Update;
