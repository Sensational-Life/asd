import React from "react";
import "./SubscribeNews.css";
import { FaChevronRight } from "react-icons/fa";
import ImgWomen from "~/assets/images/woman-using-a-mobile-phone-in-the-kitchen.jpg";

function SubscribeNews() {
	const alertMess = () => {
		return alert("Thank you very much for subscribing to our Newsletter.");
	};

	return (
		<div className="subscribeNews_container">
			<div className="subscribeNews_text">
				<div>
					<h2 className="subscribeNews_title">
						Subscribe to <br /> our newsletter
					</h2>
				</div>
				<div className="subscribeNews_form">
					<input
						className="subscribeNews_input"
						type="text"
						placeholder="What is your email address"
					/>
					<button onClick={alertMess} className="subscribeNews_button">
						<FaChevronRight />
					</button>
				</div>
			</div>

			<div className="subscribeNews_img_container">
				<div className="subscribeNews_img">
					<img src={ImgWomen} alt="img" />
				</div>
			</div>
		</div>
	);
}

export default SubscribeNews;
