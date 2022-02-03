import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WeSupportYou.css";
import ImgHands from "~/assets/images/supporting-elderly-woman.jpg";

export function WeSupportYou() {
	const [isShown, setIsShown] = useState(false);
	return (
		<div className="wesupportyou_main_container">
			<div className="wesupportyou_container">
				<h2 className="wesupportyou_header">We support you</h2>
				<p className="wesupportyou_text">
					If you are a parent of an autistic child <br /> (whether oicially
					diagnosed, on the long <br />
					winded journey or just having some <br />
					concerns), then this is the group for you!
				</p>
				<div>
					<div className="wesupportyou_join-us">
						<Link
							to="/login"
							href="https://example.com/"
							target="_blank"
							rel="noreferrer"
							className="wesupportyou_button"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
						>
							Join Us
						</Link>
					</div>
					{isShown && (
						<div className="wesupportyou_button_tooltip"> Join Us</div>
					)}
				</div>
			</div>
			<div className="wesupportyou_img_container">
				<div className="wesupportyou_img_color">children1</div>
				<img className="wesupportyou_img" src={ImgHands} alt="we-support-you" />
			</div>
		</div>
	);
}

export default WeSupportYou;
