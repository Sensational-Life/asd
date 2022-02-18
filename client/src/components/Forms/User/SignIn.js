import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signApi } from "~/api/user";
import { saveLoggedInUserData } from "~/assets/storage";

import "./UserForms.css";

const SignInForm = () => {
	const initialState = {
		email: "",
		pwd: "",
	};
	const [loginInputs, setLoginInputs] = useState(initialState);
	const [showSubmitBtnToolTip, setShowSubmitBtnToolTip] = useState(false);
	const [ showError,setShowError]= useState(false);
	const [errorMessage,SetErrorMessage]=useState("");
	const handleChange = (event) => {
		const { target } = event;
		const { name, value } = target;
		setLoginInputs({ ...loginInputs, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		signApi(loginInputs.email,loginInputs.pwd).then((userData) => {
			userData.success?
			(saveLoggedInUserData(userData),
		document.location.href = "/"):(
			SetErrorMessage(userData.message),
			setShowError(true)
		);
		});
	};

	return (
		<div className="user-form-container">
			<div className="user-form-header">
				<h1>Sign In</h1>
				<p>to continue</p>
			</div>
{showError&&<p className='error-message'>

	{errorMessage}
</p> }
			<form className="user-form" onSubmit={handleSubmit}>
				{/*Email  */}
				<input
					className="text-field"
					required
					id="email"
					type="text"
					placeholder="Email"
					name="email"
					onChange={handleChange}
				/>

				<input
					className="text-field"
					required
					id="password"
					type="password"
					placeholder="Password"
					name="pwd"
					onChange={handleChange}
				/>
				<button
					className="submit-button"
					onMouseEnter={() => setShowSubmitBtnToolTip(true)}
					onMouseLeave={() => setShowSubmitBtnToolTip(false)}
				>
					Sign In
				</button>
				<div className="submit-button-tooltip-container">
					{showSubmitBtnToolTip && (
						<button className="submit-button-tooltip">Sign In</button>
					)}
				</div>
				<label htmlFor="remember-me">
					<input type="checkbox" name="remember-me" /> Remember me
				</label>

				<div className="user-form-footer">
					<p>
						<span className="text">Don&apos;t have an account?</span>{" "}
						<span className="link">
							<Link to="/signup">Sign Up</Link>
						</span>
					</p>
					<p>
						<span className="text">Forgot your password?</span>{" "}
						<span className="link">
							<Link to="/password-reset">Reset Password</Link>
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
