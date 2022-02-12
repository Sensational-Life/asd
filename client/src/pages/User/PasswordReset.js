import React, { useLayoutEffect } from "react";
import PasswordResetForm from "~/components/Forms/User/PasswordReset";
import PasswordResetimg from "./PasswordReset.png";
import "./UserPage.css";

function PasswordResetPage() {
	useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
	return (
		<div className="user-page-container">
			<div className="form-container">
				<PasswordResetForm />
			</div>

			<div className="image-container">
				<img src={PasswordResetimg} alt="password-reset-img" />
			</div>
		</div>
	);
}

export default PasswordResetPage;
