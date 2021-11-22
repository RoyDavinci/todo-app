import React from "react";
import "./list.css";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "../../../color.js";
import { Link } from "react-router-dom";
const List = () => {
	var item = data[Math.floor(Math.random() * data.length)];
	console.log(item);
	return (
		<section className='section-center section'>
			<div className='sectionBlock_container'>
				<div className='sectionBlock_container_item'>
					<div className='sectionBlock_item__header'>
						<h1>Projects</h1>
						<SearchIcon></SearchIcon>
					</div>
					<div className='sectionBlock_item__input'>
						<input type='search' name='search' placeholder='search' />
					</div>
					<div className='sectionBlock_item_projects'>
						<div
							className='projects_item'
							style={{
								backgroundImage: `linear-gradient(to right, ${item.backgroundColor1}, ${item.backgroundColor2}`,
							}}
						>
							<p className='span'>
								<span>40 Tasks</span> <span>100%</span>
							</p>
							<p className='name'>Code</p>
						</div>
					</div>
				</div>
			</div>
			<div className='btn_container'>
				<Link to={`/create/}`}>
					<i className='fas fa-plus'></i>
				</Link>
			</div>
		</section>
	);
};

export default List;
