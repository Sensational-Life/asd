import React, { useState } from "react";
import "./Advice.css";
import AdviceImg from "~/assets/images/Advice.jpg";
import AdviceCard from "./AdviceCard";

function Advice() {
	const [buttonShow, setButtonShow] = useState(false);
	return (
		<div className="Advice-container">
			<div className="Advice-img-container">
				<div className="Advice-img-color">
					<div className="Advice-img">
						<img className="Advice-main-img" src={AdviceImg} alt="Adive" />
					</div>
				</div>
			</div>
			<div className="Advice-text-container">
				<div className="Advice-header-text">
					<p className="Advice-p">Ready to get your FREE guide?</p>
				</div>
				<AdviceCard />
				<div className="Advice-but">
					<button
						className="Advice_button"
						onMouseEnter={() => setButtonShow(true)}
						onMouseLeave={() => setButtonShow(false)}
					>
						Download My Guide
					</button>
					<br />
					{buttonShow && (
						<button className="Advice_button_hover">Download My Guide</button>
					)}
				</div>
			</div>
		</div>
	);
}
export default Advice;
