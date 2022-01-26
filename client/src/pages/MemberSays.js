import React from "react";
import Cards from "./Cards";
import "./Home.css";

function MemberSays () {
	return (
		<div
			style={{
				backgroundColor: "#1E6DD0",
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
				height: "700px",
				alignItems: "stretch",
				gap: "50px",
				padding: "5px",
			}}
		>
			<h1 style={{ textAlign: "center", color: "white" , paddingTop: "20px" }}>
				What Our Beloved Members Say
			</h1>
			<Cards />
			<button className="button" hover>
				Click here to Register
			</button>
		</div>
	);
}

export default MemberSays;
