import React from "react";
import TimetablesCards from "./TimetablesCards.js";
import ResponsivePlayer from "react-player";
import { BsPlayCircleFill } from "react-icons/bs";
import TimetableVideoImg from "~/assets/images/timetable-video.jpg";
import CardComponent from "./CardComponent";
import "./TimetablesContent.css";

export default function TimetablesContent() {
	return (
		<div className="timetable-registered-container">
			<div className="timetable-registered-section">
				<div className="timetable-registered-wrapper">
					<div className="timetable-registered-container">
						<div className="cards-bg">
							<div className="header-container">
								<h1 className="header">Resources</h1>
							</div>
						</div>
						<div className="cards-container">
							{TimetablesCards.map((card) => {
								return (
									<CardComponent key={card.id} card={card} />
								);
							})}

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

								<p className="video-description">
									How do I use these visual timetables?
								</p>
								<p>
									<a href="https://youtu.be/S2bLMai0UaM" className="video-link">
										https://youtu.be/S2bLMai0UaM
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { TimetablesContent };
