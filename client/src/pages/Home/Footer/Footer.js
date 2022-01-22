import React from "react";
import "./Footer.css";
import logo from "https://i.postimg.cc/VkdMYP4S/Logo.jpg";
import { FacebookOption, Twitter, Instagram } from "grommet-icons";

export function Footer() {
	return (
		<div id="footer">
			{/* Section11 */}
			<div className="home_section11_parent">
				<div className="home_section11_child1">
					<img className="footer-logo" src={logo} alt="logo" />
				</div>
				<div className="home_section11_child2">
					<div>
						<p>Do want to be part of us?</p>
					</div>
					<div>
						<a
							href="/Users/megumi/Documents/GitHub/asd/client/src/pages/WeSupportYou/dummyWeSupportYou.html"
							target="_blank"
							rel="noreferrer"
							className="footer-button"
						>
							Get started
						</a>
						<div className="footer_hidden-show">Get started</div>
					</div>
				</div>
			</div>

			{/* section12 */}
			<div className="home_section12_parent">
				<div className="home_section12_child1">
					<ul>
						<li>List</li>
						<li>List</li>
						<li>List</li>
					</ul>
					<ul>
						<li>List</li>
						<li>List</li>
						<li>List</li>
					</ul>
					<ul>
						<li>List</li>
						<li>List</li>
						<li>List</li>
					</ul>
				</div>
				<div className="home_section12_child2">
					<p>Our Email address</p>
					<span>info@sensational-life.com</span>
				</div>
			</div>

			{/* section13 */}
			<div className="home_section13_parent">
				<div className="home_section13_child1">
					<FacebookOption color="#FFF8F3" />
					<Twitter color="#FFF8F3" />
					<Instagram color="#FFF8F3" />
				</div>
				<div className="home_section13_child2">
					<div>Terms&Conditions</div>
					<div>Privacy Policy</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
