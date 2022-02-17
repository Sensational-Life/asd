import React from "react";
import EdutainmentCards from "./EdutainmentCards";
import "./Edutainment.css";

const Edutainment = () => {
	return (
		<div>
			<div className="edutainment-text-container">
				<div className="header-column">
					Edutainment
					<br /> services
				</div>
				<div className="description-column">
					Our unique Edutainment services also offers, a combination of
					entertainment with education through listed videos for toddlers and
					young children. These videos can be used in a number of ways such a as
					helping a child to go to bed or perform a certain task.
				</div>
				<div className="feel-free-column">
					<h3>
						Feel free to browse
						<br />
						through our videos.
					</h3>
					<h3>Enjoy!</h3>
				</div>
			</div>
			<div>
				<EdutainmentCards />
			</div>
		</div>
	);
};

export default Edutainment;
