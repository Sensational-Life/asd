import React, { useState } from "react";
import "./WeSupportYou.css";
import section7Image from "/Users/megumi/Documents/GitHub/asd/client/src/supporting-elderly-woman-2021-09-24-03-07-01-utc.jpg";


export function WeSupportYou() {
	const [isShown, setIsShown] = useState(false);
	return (
		<div className="home-section7">
			<div className="home-section7-desc">
				<h2 className="home-section7-title">We support you</h2>
				<p className="home-section7-paragraph">
					If you are a parent of an autistic child (whether oicially diagnosed,
					on the long winded journey or just having some concerns), then this is
					the group for you!
				</p>
				<div>
					<div className="home_section7_join-us">
						<a
							href="/Users/megumi/Documents/GitHub/asd/client/src/pages/WeSupportYou/dummyWeSupportYou.html"
							target="_blank"
							rel="noreferrer"
							className="home-section7-button"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
						>
							Join Us
						</a>
					</div>
					{isShown && <div className="hidden-show"> Join Us</div>}
				</div>
			</div>
			<div className="home-section7-img-parent">
				<div className="home-section7-img-children1">children1</div>
				<img
					className="home-section7-img-children2"
					src={section7Image}
					alt="we-support-you"
				/>
			</div>
		</div>
	);
}

export default WeSupportYou;
