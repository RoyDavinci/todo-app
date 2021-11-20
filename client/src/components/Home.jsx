import React from "react";
import HomeImage from "../design/undraw_personal_notebook_re_d7dc.svg";
import "./home.css";
import { Link } from "react-router-dom";
import Facebook from "../design/icons8-facebook-96.png";
import Twitter from "../design/icons8-twitter-48.png";
import Google from "../design/icons8-google-30.png";

const Home = () => {
	return (
		<main className='home'>
			<section className='section' id='section'>
				<div className='image'>
					<img src={HomeImage} alt='' />
				</div>
				<div className='buttons'>
					<Link to='/login' className='login'>
						Start Now
					</Link>
				</div>
				<p>Or Sign Up With</p>
				<div className='icons'>
					<img src={Facebook} alt='' />
					<img src={Twitter} alt='' />
					<img src={Google} alt='' />
				</div>
			</section>
		</main>
	);
};

export default Home;
