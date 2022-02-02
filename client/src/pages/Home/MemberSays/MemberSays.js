import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import "./Member.css";

function MemberSays() {
	return (
		<div className="memberSays-container ">
			<h1 className="member-header">What Our Beloved Members Say</h1>
			<Cards />
			<button className="register-btn"><span><Link to='Register'>Click here to Register</Link></span></button>
		</div>
	);
}

export default MemberSays;
