import React from "react";
import { Link } from "react-router";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div
					className="jumbotron bg-info mx-auto"
					style={{ width: "50%" }}>
					<h1 className="display-4">Welcome to the Shoestore!</h1>
					<p className="lead" />
					<hr className="my-4" />
					<a
						className="btn btn-dark btn-lg .text-white mr-2"
						href="#"
						role="button">
						<Link to="/signup">Sign Up </Link>
					</a>
					<a
						className="btn btn-dark btn-lg .text-white"
						href="#"
						role="button">
						Login
					</a>
				</div>
			</div>
		);
	}
}
