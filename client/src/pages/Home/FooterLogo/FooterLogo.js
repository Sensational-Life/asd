import React, { useState } from "react";
import "./FooterLogo.css";

export function FooterLogo() {
	const [isShown, setIsShown] = useState(false);
	return (
		<div id="footerlogo">
			<div className="footerlogo_container">
				<div className="footer-logo-img_container">
					<img
						className="footer-logo-img"
						src="https://i.postimg.cc/VkdMYP4S/Logo.jpg"
						alt="logo"
					/>
				</div>
				<div className="fotter-button_container">
					<div>
						<p>Do want to be part of us?</p>
					</div>
					<div>
						<a
							href="https://example.com/"
							target="_blank"
							rel="noreferrer"
							className="footer-button"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
						>
							Get started
						</a>
						{isShown && <div className="footer_buttun_tooltip"> Get started</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterLogo;
