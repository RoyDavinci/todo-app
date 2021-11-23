import React from "react";
import "./user.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Button from "@mui/material/Button";

const User = () => {
	const { user, categories } = useGlobalContext();
	const { id } = useParams();

	return (
		<div className='user'>
			<header>
				<div className='menu'>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
				</div>
				<div className='menu-notifs'>
					{user?.name ? (
						<>
							<IconButton>
								<SearchIcon></SearchIcon>
							</IconButton>
							<IconButton>
								<NotificationsIcon></NotificationsIcon>
							</IconButton>
						</>
					) : (
						<Button>
							<Link to='/login'>Login</Link>
						</Button>
					)}
				</div>
			</header>

			{user?.name ? <h1>What's Up, {user?.name}</h1> : <h1>Welcome, User </h1>}
			<p className='blue para'>
				<Link to={`/projects/${id}`}>ALL CATEGORIES</Link>
			</p>
			{categories.map((category) => {
				return (
					<div className='categories' key={category.category_id}>
						<div className='category-bar'>
							<p>40 Tasks</p>
							<h3>{category.category_name}</h3>
						</div>
					</div>
				);
			})}

			<div className='today'>
				<div className='tasks'>
					<h3 className='blue'>TODAY'S TASKS</h3>
					<Link to={`/${id}/todo/${id}`} className='blue'>
						VIEW TASKS
					</Link>
				</div>
				<div className='today-taskbar'>
					<div className='bar'>
						<button></button>
						<p>Daily Meeting With Team</p>
					</div>
					<div className='bar'>
						<button></button>
						<p>Pay For Checks</p>
					</div>
					<div className='bar'>
						<button></button>
						<p>Check Emails</p>
					</div>
					<div className='bar'>
						<button></button>
						<p>Lunch With Emma</p>
					</div>
					<div className='bar'>
						<button></button>
						<p>Meditation</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
