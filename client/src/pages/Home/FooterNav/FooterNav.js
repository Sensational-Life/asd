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
						<Link to="/timetables" className="footernav_link">
							Timetables
						</Link>
						<Link to="/referrals" className="footernav_link">
							Referrals
						</Link>
						<Link to="/links" className="footernav_link">
							Useful Links
						</Link>
					</div>
					<div className="nav_box">
						<p>Help</p>
						<Link to="/faqs" className="footernav_link">
							FAQs
						</Link>
					</div>
				</div>

				<div className="mail_container">
					<p>Our Email address</p>
					<span>
						<AiOutlineMail color="var(--pattens-blue)" className="mail-icon" />
						<Link to="/contact-us">info@sensational-life.com</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default FooterNav;
