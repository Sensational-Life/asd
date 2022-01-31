import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/Logo.jpeg";
import "./FooterLogo.css";

export function FooterLogo() {
	const [isShown, setIsShown] = useState(false);
	return (
		<div id="footer_logo">
			<div className="footer_logo_container">
				<div className="footer_logo_img_container">
					<img
						className="footer_logo_img"
						src={logo}
						alt="logo"
					/>
				</div>
				<div className="fotter_button_container">
					<div>
						<p>Do you want to be part of us?</p>
					</div>
					<div>
						<Link to="/login"
							target="_blank"
							rel="noreferrer"
							className="footer_button"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
						>
							Get started
						</Link>
						{isShown && <div className="footer_buttun_tooltip"> Get started</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterLogo;
