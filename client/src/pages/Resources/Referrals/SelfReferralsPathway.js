import React from "react";
// import  {SelfReferralsPathwayContent as RestrictedContent} from "./restricted/SelfReferallsPathwayContent";
import { SelfReferralsPathwayContent as PublicContent } from "./public/SelfReferralsPathwayContent";
import { getLoggedInUserData } from "~/assets/storage";

function SelfReferralPathway() {
	return (
		<div>
			{getLoggedInUserData() ? (
				<h1>RestrictedContent component replaces this h1 </h1>
			) : (
				<PublicContent />
			)}
		</div>
	);
}
export default SelfReferralPathway;
