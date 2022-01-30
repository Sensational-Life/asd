import React from "react";
import "./SubscribeNews.css";
import { FaChevronRight } from "react-icons/fa";

function SubscribeNews() {


  const alertMess = ()=> {
    return alert("Thank you very much for subscribing to our Newsletter.")
  }

	return (
		<div className="subscribeNews_container">
			<div className="subscribeNews_text">
				<div className="subscribeNews_title">
					<span>
						Subscribe to <br /> our newsletter
					</span>
				</div>
				<div className="subscribeNews_form">
					<input
						className="subscribeNews_input"
						type="text"
						placeholder="What is your email address"
					/>
					<button  onClick ={alertMess} className="subscribeNews_button">
						<FaChevronRight />
        	</button>
				</div>
			</div>

			<div className="subscribeNews_img_container">
				<div className="subscribeNews_img">
					<img
						src="https://i.postimg.cc/65LfHnkV/woman-using-a-mobile-phone-in-the-kitchen-2021-08-30-13-43-41-utc-1.jpg"
						alt="img"
					/>
				</div>
			</div>
		</div>
	);
}

export default SubscribeNews;
