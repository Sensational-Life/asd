import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./FooterNav.css";

export function FooterNav() {
	return (
		<div id="footernav">
			<div className="footernav_container">
				<div className="nav_container">
					<div className="nav_box">
						<p>About</p>
						<Link to="/our-story" className="footernav_link">
							Our Story
						</Link>
						<Link to="/team" className="footernav_link">
							Team
						</Link>
					</div>
					<div className="nav_box">
						<p>Resources</p>
						<Link to="/resources/timetables" className="footernav_link">
							Timetables
						</Link>
						<Link to="/resources/self-referral-pathway" className="footernav_link">
							Referrals
						</Link>
						<Link to="/resources/useful-links" className="footernav_link">
							Useful Links
						</Link>
					</div>
					<div className="nav_box">
						<p>Help</p>
						<Link to="/frequently-asked-questions" className="footernav_link">
							FAQs
						</Link>
					</div>
				</div>

				<div className="mail_container">
					<p>Our Email address</p>
					<span>
						<AiOutlineMail color="var(--pattens-blue)" className="mail-icon" />
						<Link to="#"
							onClick={(e) => {
								window.location = "mailto:info@sensational-life.com";
								e.preventDefault();
							}}>info@sensational-life.com</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default FooterNav;
