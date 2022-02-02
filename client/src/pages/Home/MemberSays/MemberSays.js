import React, { useState } from "react";
import Cards from "./Cards";
import "./Member.css";
import { Link } from "react-router-dom";

function MemberSays() {
	const [buttonShow, setButtonShow] = useState(false);
	return (
		<div className="memberSays-container ">
			<h1 className="member-header">What Our Beloved Members Say</h1>
			<Cards />
			<div className="register-btn-container">
				<Link to="/register">
					<button
						className="register-btn"
						onMouseEnter={() => setButtonShow(true)}
						onMouseLeave={() => setButtonShow(false)}
					>
						Click here to Register
					</button>
				</Link>
				{buttonShow && (
					<button className="register-btn-hover ">
						Click here to Register
					</button>
				)}
			</div>
		</div>
	);
}

export default MemberSays;
