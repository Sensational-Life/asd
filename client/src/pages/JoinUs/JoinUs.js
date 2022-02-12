import React from "react";
import "./JoinUs.css";
import JoinUsimg from "~/assets/images/Join-us.jpg";

function JoinUs() {
	return (
		<div className="join-us-container">
			<div className="join-us-container-img">
				<div className="join-us-img-color">
					<div className="join-us-img">
						<img className="join-us-main-img" src={JoinUsimg} alt="JoinUs" />
					</div>
				</div>
			</div>
			<div className="join-us-container-text-header">
				<div className="join-us-text-header">
					<h5 className="join-us-tilte-header">Come along!</h5>
					<p className="join-us-p">
						Come and join our FREE parent support group - a great online support
						community, with regular guest speakers, advice from autistic members
						along with non - judgemental fellow parents who ‘get it’!
					</p>
					<h6 className="join-us-checkout-text">
						<a
							className="join-us-link-faceBook"
							href="https://www.facebook.com/groups/autismandparentsupport/"
						>
							Check Out Our FREE Facebook Support Group.
						</a>
					</h6>
				</div>
			</div>
		</div>
	);
}

export default JoinUs;
