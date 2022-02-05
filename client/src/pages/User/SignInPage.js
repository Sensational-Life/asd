import SignInForm from "~/components/Forms/User/SignInForm";
import SignInimg from "./SignInPage.png";
import "./UserPage.css";

function SignInPage() {
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
