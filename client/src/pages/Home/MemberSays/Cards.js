import React from "react";
import "./Member.css";
import cardContent from "./cardContent";

export default function Cards() {
	return (
		<div className="grid-container">
			{cardContent.map((item, index) => (
				<div className="grid-item" key={index}>
					<h4 className="card-header">{item.Header}</h4>
					<p className="card-text">{item.Content}</p>
				</div>
			))}
		</div>
	);
}
