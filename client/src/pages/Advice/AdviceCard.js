import React from "react";
import "./AdviceCardContent";
import "./AdviceCard.css";
import AdviceCardContent from "./AdviceCardContent";

function AdviceCard() {
	return (
		<div className="Advice-card-container">
			{AdviceCardContent.map((value, index) => (
				<div className="Advice-card-index" key={index}>
					<p className="Advice-Vlue-Title">{value.Advicetitle}</p>
					<p className="Advice-value-content">{value.AdviceContent}</p>
				</div>
			))}
		</div>
	);
}
export default AdviceCard;
