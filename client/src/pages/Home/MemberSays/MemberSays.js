import React from "react";
import Cards from "./Cards";
import "./Member.css";

function MemberSays() {
	return (
		<div
			style={{
				backgroundColor: "#1E6DD0",
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
				height: "75vh",
				alignItems: "stretch",
				gap: "40px",
				padding: "5px",
			}}
		>
			<h1 className="member-header">What Our Beloved Members Say</h1>
			<Cards />
			<button className="button" hover>
				Click here to Register
			</button>
		</div>
	);
}

export default MemberSays;
