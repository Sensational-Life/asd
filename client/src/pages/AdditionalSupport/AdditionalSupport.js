import React from "react";
import { Link } from "react-router-dom";
import "./AdditionalSupport.css";
import additionalSupportImg from "~/assets/images/additional-support.jpg";

function AdditionalSupport() {
	return (
		<>
			<main className="additional-support-container">
				<img
					className="hero-image"
					src={additionalSupportImg}
					alt="sensational life logo"
				/>
				<section className="content">
					<section className="content-left-container">
						<p>
							Understanding what additional support is can help when you are
							looking after your children. By ensuring that they get the right
							appropriate support for their needs from their school, local
							council, GPs, community centres etc.
						</p>
						<p>
							To learn more about Additional Support needs please{" "}
							<Link to="/login">Sign in or Sign Up.</Link>
						</p>
					</section>
					<section className="content-right-container">
						<h2>Useful links:</h2>
						<a href="https://www.autism.org.uk/advice-and-guidance/topics/education/extra-help-at-school/scotland">
							https://www.autism.org.uk/advice-and-guidance/topics/education/extra-help-at-school/scotland
						</a>
						<br></br>
						<a href="https://enquire.org.uk/parents/what-is-asl/">
							https://enquire.org.uk/parents/what-is-asl/
						</a>
						<br></br>
						<a
							href="https://www.nhs.uk/conditions/autism/autism-and-everyday-life/help-for-families/"

						>
							https://www.nhs.uk/conditions/autism/autism-and-everyday-life/help-for-families/
						</a>
					</section>
				</section>
			</main>
		</>
	);
}

export default AdditionalSupport;
