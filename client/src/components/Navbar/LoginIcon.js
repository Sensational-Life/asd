import React from "react";
import { Link } from "react-router-dom";

import "./LoginIcon.css"

function LoginIcon(){
    return (
			<Link className="login-icon" to="/login">
				Login <i className="fas fa-user "></i>
			</Link>
		);
    
}
export default LoginIcon;