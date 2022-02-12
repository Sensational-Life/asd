import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginIcon.css";
import { getLoggedInUserData, removeUserData } from "~/assets/storage";

function LoginIcon() {
	const logout = (event) => {
		event.preventDefault();
		removeUserData();
		document.location.href = "/";
	};

	return (
		<div>
			{getLoggedInUserData() ? (
				<NavLink
					to="/signOut"
					className="signOut-icon"
					activeClassName="active-nav-links"
					onClick={logout}
				>
					LogOut <i className="fas fa-sign-out-alt"></i>
				</NavLink>
			) : (
				<NavLink
					to="/signin"
					className="login-icon"
					activeClassName="active-nav-links"
				>
					Login <i className="fas fa-user "></i>
				</NavLink>
			)}
		</div>
	);
}
export default LoginIcon;
