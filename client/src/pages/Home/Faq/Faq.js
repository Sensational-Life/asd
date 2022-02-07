import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Faq.css";

function Faq() {
	const [isShown, setIsShown] = useState(false);

	return (
		<div className="faq_container">
			<div className="faq_button">
				<Link
					to="/frequently-asked-questions"
					className="faq_button_link"
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}
				>
					Frequently Asked Questions
				</Link>
			</div>
			{isShown && (
				<div className="faq_button_tooltip"> Frequently Asked Questions</div>
			)}
		</div>
	);
}

export default Faq;
