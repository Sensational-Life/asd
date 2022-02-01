import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WhatWeDo.css";
import CuteGirl from "../../../assets/images/cute-girl-with-down-syndrome-in-mothers-arms.jpg";

function WhatWeDo() {
	const [buttonShow, setButtonShow] = useState(false);
	return (
		<div className="whatwedo_main_container">
			<div className="whatwedo_container">
				<div className="whatwedo_text_container">
					<div>
						<h2 className="whatwedo_header">What We Do? </h2>
					</div>
					<div className="whatwedo_text">
						<span>
							{" "}
							We are provide advice, signposting, tips and <br />
							products to help support parents of autistic <br />
							children on their autism journey within the <br />
							neurodiverse family.
						</span>
					</div>
					<Link
						to="/whatwedo"
						onMouseEnter={() => setButtonShow(true)}
						onMouseLeave={() => setButtonShow(false)}
					>
						<button className="whatwedo_button">Read More</button>{" "}
					</Link>
					<br />
					{buttonShow && (
						<button className="whatwedo_button_hover">Read More</button>
					)}
				</div>
				<div className="whatwedo_img_container">
					<div className="whatwedo_img_color">
						<div className="whatwedo_img">
							<img src={CuteGirl} alt="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhatWeDo;
