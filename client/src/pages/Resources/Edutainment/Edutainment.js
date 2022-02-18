import React from "react";
import EdutainmentCards from "./EdutainmentCards";
import "./Edutainment.css";

const Edutainment = () => {
	return (
		<div>
			<div className="edutainment-text-container">
				<div className="edutainment-text-grid">
					<div className="text-column header-column">
						Edutainment
						<br /> services
					</div>
					<div className="text-column description-column">
						Our unique Edutainment services also offers, a combination of
						entertainment with education through listed videos for toddlers and
						young children. These videos can be used in a number of ways such a as
						helping a child to go to bed or perform a certain task.
					</div>
					<div className="text-column feel-free-column">
						<p>
							Feel free to browse
							<br />
							through our videos.
						<p>

						</p>
							Enjoy!
						</p>
					</div>
				</div>
			</div>
			<div>
				<EdutainmentCards />
			</div>
		</div>
	);
};

export default Edutainment;
