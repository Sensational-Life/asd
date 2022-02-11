import React from "react";
import "./TimetableRegistered.css";
import CardContent from "./CardContent.js";
import { BsDownload } from "react-icons/bs";
import ResponsivePlayer from "react-player";
import { BsPlayCircleFill } from "react-icons/bs";
import TimetableVideoImg from "~/assets/images/timetable-video.jpg";
import Bookmark from "./Bookmark";

function TimetableRegistered() {
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
							{CardContent.map((card) => {
								return (
									<div className="card-container" key={card.id}>
										<div className="card-header">{card.title}</div>
										<div className="card-items">
											<div dangerouslySetInnerHTML={{ __html: card.text }} />
											<div className="card-image-container">
												<img
													className="card-image"
													src={card.src}
													alt={card.alt}
												/>
											</div>
											<div className="timetable-icon-container">
												<Bookmark card={card} />
												<a href={card.pdflink}>
													<BsDownload className="timetable-icon-download" />
												</a>
											</div>
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
