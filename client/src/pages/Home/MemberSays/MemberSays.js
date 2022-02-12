
import React, { useState } from "react";
import Cards from "./Cards";
import "./MemberSays.css";
import { Link } from "react-router-dom";
import { getLoggedInUserData } from "../../../assets/storage";

function MemberSays() {
	const [buttonShow, setButtonShow] = useState(false);
	return (
		<div className="memberSays-container">
			<h1 className="member-header">What Our Beloved Members Say</h1>
			<Cards />
			{!getLoggedInUserData()&&

				<div className="memberSays-button-container">
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
					<button className="register-btn-tooltip ">
							Click here to Register
						</button>
				)}
			</div>
			}

		</div>
	);
}

export default MemberSays;
