import React from "react";
import { SelfReferralsPathwayContent as PublicContent } from "./public/SelfReferralsPathwayContent";
import { getLoggedInUserData } from "~/assets/storage";

function SelfReferralPathway() {
	return (
		<div>
			{getLoggedInUserData() ? (
				// todo: should be replaced with restricted content later...
				<PublicContent />
			) : (
				<PublicContent />
			)}
		</div>
	);
}
export default SelfReferralPathway;
