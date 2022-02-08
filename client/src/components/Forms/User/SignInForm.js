import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserForms.css";

const SignInForm = () => {
    const [showSubmitBtnToolTip, setShowSubmitBtnToolTip] = useState(false);
    return (
        <div className="user-form-container">
				<div className="user-form-header">
					<h1>Sign In</h1>
					<p>to continue</p>
				</div>

				<form className="user-form">
					{/*Email  */}
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
						>
							Sign In
					</button>
					<div className="submit-button-tooltip-container">
						{
							showSubmitBtnToolTip && (
								<button className="submit-button-tooltip">Sign In</button>)
						}
					</div>
					<label htmlFor="remember-me">
						<input
							type="checkbox"
							name="remember-me"
						/>{" "}Remember me</label>

					<div className="user-form-footer">
						<p>
							<span className="text">
								Don&apos;t have an account?
							</span>
							{" "}
							<span className="link">
								<Link to="/signup">
									Sign Up
								</Link>
							</span>
						</p>
						<p>
							<span className="text">
								Forgot your password?
							</span>
							{" "}
							<span className="link">
								<Link to="/password-reset">
									Reset Password
								</Link>
							</span>
						</p>
					</div>
				</form>
			</div>
    );
};

export default SignInForm;