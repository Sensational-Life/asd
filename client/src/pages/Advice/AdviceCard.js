import React from "react";
import "./AdviceCardContent";
import "./AdviceCard.css";
import AdviceCardContent from "./AdviceCardContent";

function AdviceCard() {
	return (
		<div className="Advice-card-container">
			{AdviceCardContent.map((value, index) => (
				<div className="Advice-card-index" key={index}>
					<h3 className="Advice-Vlue-Title">{value.Advicetitle}</h3>
					<p className="Advice-value-content">{value.AdviceContent}</p>
				</div>
			))}
		</div>
	);
}
export default AdviceCard;
