import { useState } from "react";
import "./TimetableRegistered.css";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
// import { Bookmark } from "grommet-icons";

function Bookmark(props) {
	const [saved, setSaved] = useState(props.card.saved);
	return (
		<div>
			{saved ? (
				<BsHeart
					className="timetable-icon-heart-not-saved"
					onClick={() => {
						setSaved(false);
					}}
				/>
			) : (
				<BsFillHeartFill
					className="timetable-icon-heart-saved"
					onClick={() => {
						setSaved(true);
					}}
				/>
			)}
		</div>
	);
}
export default Bookmark;
