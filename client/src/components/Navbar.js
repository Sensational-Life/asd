import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import ResourcesDropdown from "./ResourcesDropdown";

import AboutDropdown from "./AboutDropdown";

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
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img
						src="https://i.postimg.cc/Z55sJJwz/Logo.jpg"
						alt="sensational life logo"
					></img>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnter2}
						onMouseLeave={onMouseLeave2}
					>
						<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
							About <i className="fas fa-caret-down" />
						</Link>
						{dropdown2 && <AboutDropdown />}
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<Link
							to="/resources"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Resources <i className="fas fa-caret-down" />
						</Link>
						{dropdown && <ResourcesDropdown />}
					</li>

					<li className="nav-item">
						<Link
							to="/contact-us"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Contact
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-links"
             to="/login">
							Login <i class="fas fa-user "></i>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
