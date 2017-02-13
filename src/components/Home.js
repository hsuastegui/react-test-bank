import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
	return(
		<main className="home">
			<section className="top">
				<div className="container">
					<p><img	src="images/Logo_Nopa.svg" alt="Nopa" className="logo" /></p>
					<h2>Your finances, in one place</h2>
					<p>Track of all your payments by connecting as many bank accounts as <br/> you'd like to your Nopa account and get updates your balance instantly.</p>
					<button className="button"><Link to="accounts">Get started</Link></button>
				</div>
			</section>
			<section className="middle">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<h2>There's no such things as "one size fits all" finance</h2>
							<p>We aere founded to make money simple and fair, for everyone: whether you're looking for a loan, or to get better rewards for investments.</p>
						</div>
						<div className="col-xs-12 col-md-6">
							<img className="shapes" src="images/Shapes.svg" alt="shapes" />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;