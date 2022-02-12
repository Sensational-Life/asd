import React, { useLayoutEffect } from "react";
import SignInForm from "~/components/Forms/User/SignIn";
import SignInImg from "./SignIn.png";
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
				<img src={SignInImg} alt="signIn-img" />
			</div>
		</div>
	);
}

export default SignInPage;
