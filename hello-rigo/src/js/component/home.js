import React from "react";
// import { Link } from "react-dom";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-info">
					<span className="navbar-brand mb-3 h1">The Shoestore</span>
				</nav>
				<div className="container mt-3">
					<div className="row">
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/266840/pexels-photo-266840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/134064/pexels-photo-134064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/186035/pexels-photo-186035.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/66259/sports-shoes-running-shoes-sneakers-marathon-shoes-66259.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/267294/pexels-photo-267294.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/40662/shoes-footwear-hiking-shoes-walking-40662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://images.pexels.com/photos/533442/pexels-photo-533442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is the shoe description
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
