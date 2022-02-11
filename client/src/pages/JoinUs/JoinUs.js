import React from "react";
import "./JoinUs.css";
import JoinUsimg from "~/assets/images/Join-us.jpg";

function JoinUs() {
	return (
		<div className="JoinUs-container">
			<div className="JoinUs-container-img">
				<div className="JoinUs-img-color">
					<div className="JoinUs-img">
						<img className="JoinUs-main-img" src={JoinUsimg} alt="JoinUs" />
					</div>
				</div>
			</div>
			<div className="JoinUs-container-text-header">
				<div className="JoinUs-text-header">
					<h5 className="JoinUs-tilte-header">Come along!</h5>
					<p className="JoiunUs-p">
						Come and join our FREE parent support group - a great online support
						community, with regular guest speakers, advice from autistic members
						along with non - judgemental fellow parents who ‘get it’!
					</p>
					<h6 className="Joinus-checkout-text">
						Check Out Our FREE Facebook Support Group.
					</h6>
				</div>
			</div>
		</div>
	);
}

export default JoinUs;
