import React from "react";
import "./AdviceCardContent";
import "./Card-ad.css";
import AdviceCardContent from "./AdviceCardContent";

function AdviceCard() {
	return (
		<div className="Advice-card-container">
			{AdviceCardContent.map((value, index) => (
				<div key={index}>
					<p className="title">{value.Advicetitle}</p>
					<p className="content">{value.AdviceContent}</p>
				</div>
			))}
		</div>
	);
}
export default AdviceCard;
