import React from "react";
import { GrMail } from "react-icons/gr";
import "./FooterNav.css";

export function FooterNav() {
	return (
		<div id="footernav">
			<div className="footernav_container">
				<div className="nav_container">
					<div className="nav_box">
						<p>About</p>
						<a href="http://example.com/">Our Story</a>
						<a href="http://example.com/">Team</a>
					</div>
					<div className="nav_box">
						<p>Resources</p>
						<a href="http://example.com/">Timetables</a>
						<a href="http://example.com/">Referrals</a>
						<a href="http://example.com/">Useful Links</a>
					</div>
					<div className="nav_box">
						<p>Help</p>
						<a href="http://example.com/">FAQs</a>
					</div>
				</div>

				<div className="mail_container">
					<p>Our Email address</p>
					<span>
						<GrMail className="mail-icon" />
						<a href="info@sensational-life.com">info@sensational-life.com</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default FooterNav;
