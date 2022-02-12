import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createNewUser } from "~/api/user";
import "./UserForms.css";

function SignUpForm() {
	const initialState = {
		name: "",
		email: "",
		pwd: "",
		confirmPassword: "",
	};
	const [showSubmitBtnToolTip, setShowSubmitBtnToolTip] = useState(false);
	const [signUpInputs, setSignUpInputs] = useState(initialState);
	const [showError, setShowError] = useState(false);
	const [errorMessage, SetErrorMessage] = useState("");
	const { name, email, pwd } = signUpInputs;
	const userInputs = { name, email, pwd };
	const handleChange = (event) => {
		const { target } = event;
		const { name, value } = target;
		setSignUpInputs({ ...signUpInputs, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		signUpInputs.pwd === signUpInputs.confirmPassword
			? createNewUser(userInputs)
				.then((userData) => {
					userData.success
						? (document.location.href = "/")
						: (SetErrorMessage(userData.message), setShowError(true));
					})
			: (setShowError(true), SetErrorMessage("Password doesn't Match Confirm Password"));
	};
	return (
		<div className="user-form-container">
			<div className="user-form-header">
				<h1>Register with us</h1>
			</div>
			{showError && <p className="error-message">{errorMessage}</p>}
			<form className="user-form" onSubmit={handleSubmit}>
				<input
					className="text-field"
					required
					id="name"
					type="text"
					value={signUpInputs.name}
					placeholder="Name"
					name="name"
					onChange={handleChange}
				/>

				<input
					className="text-field"
					required
					id="email"
					type="text"
					placeholder="Email"
					name="email"
					value={signUpInputs.email}
					onChange={handleChange}
				/>

				<input
					className="text-field"
					required
					id="password"
					type="password"
					placeholder="Password"
					name="pwd"
					value={signUpInputs.pwd}
					onChange={handleChange}
				/>

				<input
					className="text-field"
					required
					id="Confirm-password"
					type="password"
					placeholder="Confirm Password"
					name="confirmPassword"
					value={signUpInputs.confirmPassword}
					onChange={handleChange}
				/>

				<button
					className="submit-button"
					onMouseEnter={() => setShowSubmitBtnToolTip(true)}
					onMouseLeave={() => setShowSubmitBtnToolTip(false)}
				>
					Register
				</button>

				<div className="submit-button-tooltip-container">
					{showSubmitBtnToolTip && (
						<button className="submit-button-tooltip">Register</button>
					)}
				</div>

				<div className="user-form-footer">
					<p>
						<span className="text">Already have an account?</span>{" "}
						<span className="link">
							<Link to="/signin">Sign In</Link>
						</span>
					</p>
				</div>
			</form>
		</div>
	);
}

export default SignUpForm;
