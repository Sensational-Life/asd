import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginIcon.css";

function LoginIcon() {
	return (
		<NavLink
			to="/signin"
			className="login-icon"
			activeClassName="active-nav-links"
		>
			Login <i className="fas fa-user "></i>
		</NavLink>
	);
}
export default LoginIcon;
