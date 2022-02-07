import React, { useLayoutEffect } from "react";
import SignInForm from "~/components/Forms/User/SignInForm";
import SignInimg from "./SignInPage.png";
import "./UserPage.css";

function SignInPage() {
	useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
	return (
		<div className="user-page-container">
			<div className="form-container">
				<SignInForm />
			</div>

			<div className="image-container">
				<img src={SignInimg} alt="signin-img" />
			</div>
		</div>
	);
}

export default SignInPage;
