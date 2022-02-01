import React from "react";
import "./AdditionalSupport.css";
import additionalSupportImg from "../../images/additional-support.jpg";
import FooterNav from "../Home/FooterNav/FooterNav";
import FooterLogo from "../Home/FooterLogo/FooterLogo";
import FooterIcon from "../Home/FooterIcon/FooterIcon";

function AdditionalSupport() {
	return (
		<div className="additional-support-container">
			<div><span></span></div>
			<img
				className="hero-image"
				src={additionalSupportImg}
				alt="sensational life logo"
			></img>
			<div className="content">
				<div className="content-child1">
					<p>
						Understanding what additional support is can help when you are
						looking after your children. By ensuring that they get the right
						appropriate support for their needs from their school, local
						council, GPs, community centres etc.
					</p>
					<p>
						To learn more about Additional Support needs please{" "}
						<a href="">Sign in or Sign Up.</a>
					</p>
				</div>
				<div className="content-child2">
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
						href="https://www.nhs.uk/conditions/autism/autism-and-everyday-life/help-for-families/
"
					>
						https://www.nhs.uk/conditions/autism/autism-and-everyday-life/help-for-families/
					</a>
				</div>
			</div>
            <FooterLogo />
			<FooterNav />
            <FooterIcon />
		</div>
	);
}

export default AdditionalSupport;
