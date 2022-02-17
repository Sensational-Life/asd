import React from "react";
// import  {TimetablesContent as RestrictedContent} from "./restricted/TimetablesContent";
import { TimetablesContent as PublicContent } from "./public/TimetablesContent";
import { getLoggedInUserData } from "~/assets/storage";

function Timetables() {
	return (
		<div>
			{getLoggedInUserData() ? (
				<h1>timetables RestrictedContent component replaces this h1 </h1>
			) : (
				<PublicContent />
			)}
		</div>
	);
}
export default Timetables;
