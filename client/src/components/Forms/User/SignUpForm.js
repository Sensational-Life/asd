import { useState } from "react";
import { Link } from "react-router-dom";
import "./UserForms.css";

function SignUpForm() {
	const [showSubmitBtnToolTip, setShowSubmitBtnToolTip] = useState(false);
	return (
        <div className="user-form-container">
				<div className="user-form-header">
					<h1>Register with us</h1>
				</div>

				<form className="user-form">
					<input
						className="text-field"
						required
						id="name"
						type="text"
						placeholder="Name"
						name="name"
					/>

					<input
						className="text-field"
						required
						id="email"
						type="text"
						placeholder="Email"
						name="email"
					/>

					<input
						className="text-field"
						required
						id="password"
						type="password"
						placeholder="Password"
						name="Password"
					/>

					<button
						className="submit-button"
						onMouseEnter={() => setShowSubmitBtnToolTip(true)}
						onMouseLeave={() => setShowSubmitBtnToolTip(false)}
					>Register</button>

					<div className="submit-button-tooltip-container">
						{
							showSubmitBtnToolTip && (
								<button className="submit-button-tooltip">Register</button>
						)}
					</div>

					<div className="user-form-footer">
						<p>
							<span className="text">
								Already have an account?
							</span>
							{" "}
							<span className="link">
								<Link to="/signin">
									Sign In
								</Link>
							</span>
						</p>
					</div>
				</form>
			</div>
    );
}

export default SignUpForm;