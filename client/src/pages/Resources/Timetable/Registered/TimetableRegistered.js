import React from "react";
import ResponsivePlayer from "react-player";
import { BsPlayCircleFill } from "react-icons/bs";
import TimetableVideoImg from "~/assets/images/timetable-video.jpg";
import "./TimetableRegistered.css";
import Cards from "./Cards";

function TimetableRegistered() {
	return (
		<div className="timetable-registered-container">
			<div className="timetable-registered-section">
				<Cards />
				<div className="video-container">
					<div className="video-wrapper">
						<ResponsivePlayer
							className="player"
							url="https://www.youtube.com/watch?v=S2bLMai0UaM"
							playing={true}
							playIcon={<BsPlayCircleFill className="player-button" />}
							controls={true}
							light={TimetableVideoImg}
							width="100%"
							height="100%"
						/>
					</div>
					<div className="video-description">
						<p>How do I use these visual timetables?</p>
						<a href="https://youtu.be/S2bLMai0UaM">
							https://youtu.be/S2bLMai0UaM
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TimetableRegistered;