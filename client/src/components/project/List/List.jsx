import React from "react";
import "./list.css";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "../../../color.js";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../../context.js";
const List = () => {
	var item = data[Math.floor(Math.random() * data.length)];
	const { id } = useParams();

	const { categories } = useGlobalContext();
	return (
		<section className='section-center'>
			<Link to={`/user/${id}`} className='learnt'>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</Link>
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
						{categories.map((category) => {
							return (
								<Link
									to={`/projects/${id}/${category.category_id}`}
									key={category.category_id}
								>
									<div
										className='projects_item'
										style={{
											backgroundImage: `linear-gradient(to right, ${item.backgroundColor1}, ${item.backgroundColor2}`,
										}}
									>
										<p className='span'>
											<span>40 Tasks</span> <span>100%</span>
										</p>
										<p className='name'>{category.category_name}</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			<div className='btn_container'>
				<Link to={`/projects/create/${id}`}>
					<i className='fas fa-plus'></i>
				</Link>
			</div>
		</section>
	);
};

export default List;
