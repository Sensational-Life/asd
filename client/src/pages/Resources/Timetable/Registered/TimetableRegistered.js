import React from "react";
import "./TimetableRegistered.css";
// import Cards from "./Cards";
// import React from "react";
import cardContent from "./Cards.json";
import { GrFavorite, GrDownload } from "react-icons/gr";

import ResponsivePlayer from "react-player";
import { BsPlayCircleFill } from "react-icons/bs";
import TimetableVideoImg from "~/assets/images/timetable-video.jpg";

// import "./TimetableRegistered";

import time from "~/assets/images/timetable-2-4age.jpg";

function TimetableRegistered() {
	return (
		<div className="timetable-registered-container">
			<div className="timetable-registered-section">
				<div className="timetable-registered-wrapper">
					{/* <div className="timetable-registered-grid"> */}
					<div className="timetable-registered-container">
						<div className="cards-bg">
							<div className="header-container">
								<h1 className="header">Resources</h1>
							</div>
						</div>
						<div className="card-container">
							{cardContent.map((card) => {
								const cardKey = card.title.toLowerCase().replace(/\s/gi, "");
								return (
									<div className="card" key={cardKey}>
										<h3 className="card-header">{card.title}</h3>
										<div dangerouslySetInnerHTML={{ __html: card.text }} />
										<div>
											<img className="card-image" src={time} alt={card.alt} />
										</div>
										<div className="timetable-icon-container">
											<GrFavorite className="timetable-icon" />
											<a href={card.pdflink}>
												<GrDownload className="timetable-icon" />
											</a>
										</div>
									</div>
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
								<div>
									<p className="video-description">
										How do I use these visual timetables?
									</p>
									<a href="https://youtu.be/S2bLMai0UaM" className="video-link">
										https://youtu.be/S2bLMai0UaM
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TimetableRegistered;
