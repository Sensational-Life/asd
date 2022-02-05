import SignUpForm from "~/components/Forms/User/SignUpForm";
import SignUpImage from "./SignUpPage.png";
import "./UserPage.css";

function SignUpPage() {
	return (
		<div className="user-page-container">
			<div className="form-container">
				<SignUpForm />
			</div>

			<div className="image-container">
				<img src={SignUpImage} alt="signup-img" />
			</div>
		</div>
	);
}

export default SignUpPage;
