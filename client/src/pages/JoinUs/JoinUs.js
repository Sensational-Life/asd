import React from "react";
import { Link } from "react-router-dom";
import JoinUsimg from "~/assets/images/Join-us.jpg";
import "./JoinUs.css";

function JoinUs() {
	return (
		<div className="join-us-container">
			<div className="content">
				<div className="image-container">
					<div className="image-shadow">
						<img src={JoinUsimg} alt="JoinUs" />
					</div>
				</div>
				<div className="text-container">
					<div className="wrapper">
						<h1 >Come along!</h1>
						<p>
							Come and join our FREE parent support group - a great online support
							community, with regular guest speakers, advice from autistic members
							along with non - judgemental fellow parents who &apos;get it&apos;!
						</p>
						<p>
							<Link to="https://www.facebook.com/groups/autismandparentsupport">
								Check Out Our FREE Facebook Support Group.
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JoinUs;
