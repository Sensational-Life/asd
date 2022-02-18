import React, { useLayoutEffect } from "react";
import "./SelfReferralsPathwayContent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import questionmarkImg from "~/assets/images/question-mark-low-res.png";


export default function SelfReferralsPathwayContent() {
	const [buttonShow, setButtonShow] = useState(false);
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
 }, []);
	return (
		<>
			<main className="referral-main-container">
				<section className="referral-content-container">
					<section className=" referral-text-container">
						<h1>Self - Referral Pathway</h1>
						<p>
							Do you think you might have Autism Spectrum Disorder? Or are you
							concerned about someone else but not sure what to do about it
							next?
						</p>
						<p>
							Our Self - referral pathway offer includes a resource locator may
							help you answer your questions. If you would like to use our Self-
							referral pathway, <Link to="/signin">Sign in</Link> or
						</p>

						<Link to="/signup">
							<button
								className="referral-register-button"
								onMouseEnter={() => setButtonShow(true)}
								onMouseLeave={() => setButtonShow(false)}
							>
								Click here to Register
							</button>
						</Link>
						{buttonShow && (
							<button className="referral-register-button-hover">
								Click here to Register
							</button>
						)}
					</section>

					<section className="referral-img-container">
						<img
							className="referral-primary-img"
							src={questionmarkImg}
							alt="mother and daughter browsing internet"
						/>
					</section>
				</section>
			</main>
		</>
	);
}
export { SelfReferralsPathwayContent };