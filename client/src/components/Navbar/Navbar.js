import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ResourcesDropdown from "./ResourcesDropdown";

import AboutDropdown from "./AboutDropdown";
import LoginIcon from "./LoginIcon";

import SearchBox from "./SearchBox";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [menuResourcesSelected, setMenuResourcesSelected] = useState(false);
  const [menuAboutSelected, setMenuAboutSelected] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);
  const closeMobileMenu = () => setIsClicked(false);

  const onMouseEnterResourcesMenu = () => {
	setMenuResourcesSelected(true);
  };

  const onMouseLeaveResourcesMenu = () => {
    if (window.innerWidth < 960) {
      setMenuResourcesSelected(false);
    } else {
      setMenuResourcesSelected(false);
    }
  };
  const onMouseEnterAboutMenu = () => {
	setMenuAboutSelected(true);
  };

  const onMouseLeaveAboutMenu = () => {
    if (window.innerWidth < 960) {
      setMenuAboutSelected(false);
    } else {
      setMenuAboutSelected(false);
    }
  };

  return (
		<>
			<nav className="navbar">
				<NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img
						src="https://i.postimg.cc/Z55sJJwz/Logo.jpg"
						alt="sensational life logo"
					></img>
				</NavLink>
				<div className="menu-icon" onClick={handleClick}>
					<i className={isClicked ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={isClicked ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<NavLink
							exact to="/"
							className="nav-links"
							activeClassName="active-nav-links"
							onClick={closeMobileMenu}
						>
							Home
						</NavLink>
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnterAboutMenu}
						onMouseLeave={onMouseLeaveAboutMenu}
					>
						<NavLink
							to="/about"
							className="nav-links"
							activeClassName="active-nav-links"
							onClick={closeMobileMenu}
						>
							About
						</NavLink>
						{menuAboutSelected && <AboutDropdown />}
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnterResourcesMenu}
						onMouseLeave={onMouseLeaveResourcesMenu}
					>
						<NavLink
							to="/resources"
							className="nav-links"
							activeClassName="active-nav-links"
							onClick={closeMobileMenu}
						>
							Resources
						</NavLink>
						{menuResourcesSelected && <ResourcesDropdown />}
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
						<SearchBox />
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
