import React from "react";
import Cards from "./Cards";
import "./Member.css";

function MemberSays() {
	return (
		<div className="memberSays-container ">
			<h1 className="member-header">What Our Beloved Members Say</h1>
			<Cards />
			<button className="register-btn">Click here to Register</button>
		</div>
	);
}

export default MemberSays;
