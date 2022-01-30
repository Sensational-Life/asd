import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ResourcesDropdown from "./ResourcesDropdown";

import AboutDropdown from "./AboutDropdown";
import LoginIcon from "./LoginIcon";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
		<>
			<nav className="navbar">
				<NavLink to="/home" className="navbar-logo" onClick={closeMobileMenu}>
					<img
						src="https://i.postimg.cc/Z55sJJwz/Logo.jpg"
						alt="sensational life logo"
					></img>
				</NavLink>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<NavLink
							to="/home"
							className="nav-links"
							activeClassName="active-nav-links"
							onClick={closeMobileMenu}
						>
							Home
						</NavLink>
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnter2}
						onMouseLeave={onMouseLeave2}
					>
						<NavLink
							to="/about"
							className="nav-links"
							activeClassName="active-nav-links"
							onClick={closeMobileMenu}
						>
							About
						</NavLink>
						{dropdown2 && <AboutDropdown />}
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<NavLink
							to="/resources"
							className="nav-links"
							activeClassName="active-nav-links"
							onClick={closeMobileMenu}
						>
							Resources
						</NavLink>
						{dropdown && <ResourcesDropdown />}
					</li>

					<li className="nav-item">
						<NavLink
							to="/contact"
							className="nav-links"
							activeClassName="active-nav-links"
							onClick={closeMobileMenu}
						>
							Contact
						</NavLink>
					</li>
					<li className="nav-item">
						<LoginIcon />
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
