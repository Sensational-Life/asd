import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserForms.css";

const PasswordResetForm = () => {
    const [showSubmitBtnToolTip, setShowSubmitBtnToolTip] = useState(false);
    return (
        <div className="user-form-container">
				<div className="user-form-header">
					<h1>Reset Password</h1>
					<p>Please type your new password</p>
				</div>

				<form className="user-form">

					<input
						className="text-field"
						required
						id="password"
						type="password"
						placeholder="Password"
						name="Password"
					/>

                    <input
						className="text-field"
						required
						id="Confirm-password"
						type="password"
						placeholder="Confirm Password"
						name="password-confirm"
					/>

					{/* Sign in-Button */}
					<button
						className="submit-button"
						onMouseEnter={() => setShowSubmitBtnToolTip(true)}
						onMouseLeave={() => setShowSubmitBtnToolTip(false)}
					>Submit</button>

					<div className="submit-button-tooltip-container">
						{
							showSubmitBtnToolTip && (
								<button className="submit-button-tooltip">Submit</button>
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
};

export default PasswordResetForm;