import React from "react";
// import TimetableRegistered from "./registered/meg's component here";
import  TimetableNotRegistered from "./public/TimetableNotRegistered";
import { getLoggedInUserData } from "~/assets/storage";

function Timetables() {
	return (
		<div>
			{getLoggedInUserData() ? (
				<h1>timetable registered component here</h1>
			) : (
				<TimetableNotRegistered/>
			)}
		</div>
	);
}
export default Timetables;
