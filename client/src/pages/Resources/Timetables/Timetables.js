import React from "react";
import  { TimetablesContent as RestrictedContent } from "./restricted/TimetablesContent";
import { TimetablesContent as PublicContent } from "./public/TimetablesContent";
import { getLoggedInUserData } from "~/assets/storage";

function Timetables() {
	return (
		<div>
			{getLoggedInUserData() ? (
				<RestrictedContent />
			) : (
				<PublicContent />
			)}
		</div>
	);
}
export default Timetables;
