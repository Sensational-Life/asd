import React, { useState } from "react";
import "./Advice.css";
import AdviceImg from "~/assets/images/family-photo-advice-page.jpg";
import AdviceCard from "./AdviceCard";
function Advice() {
	const [buttonShow, setButtonShow] = useState(false);
	return (
		<div className="advice-container">
			<div className="img-container">
				<div className="color">
					<div className="main-img">
						<img src={AdviceImg} alt="Adive" />
					</div>
				</div>
			</div>
			<div className="text-container">
					<p className="header">Ready to get your FREE guide?</p>
						<AdviceCard />
				<div className="advice-but">
					<button
						className="a-button"
						onMouseEnter={() => setButtonShow(true)}
						onMouseLeave={() => setButtonShow(false)}
					>
						Download My Guide
					</button>
					<br />
					{buttonShow && (
						<button className="button-hover">Download My Guide</button>
					)}
				</div>
			</div>
		</div>
	);
}
export default Advice;
