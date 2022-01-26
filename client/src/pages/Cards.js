import React from "react";
import "./Home.css";

const cardContent = [
	{
		Header: "Kate - UK",
		Content:
			"“Thank you so much this is great. I home school my daughter due to her high anxiety, so this will be used all time”",
	},

	{
		Header: "Anonymous",
		Content:
			"“This group has given me the courage to go against the system and fight to get my daughter the help needs.”",
	},

	{
		Header: "SENsational Life",
		Content:
			"“So happy that our closed parent support group has such an impact. Come on and over join us.”",
	},
];

export default function Cards() {
	return (
		<div className="grid-container">
			{cardContent.map((x) => (
				<div className="grid-item">
					<h4>{x.Header}</h4>
					<p>{x.Content}</p>
				</div>
			))}
		</div>
	);
}
