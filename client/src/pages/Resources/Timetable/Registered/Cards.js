import React from "react";
import cardContent from "./Cards.json";
import { GrFavorite, GrDownload } from "react-icons/gr";

import "./TimetableRegistered";

export default function Cards() {
    const time = "~/assets/images/timetable-2-4age.jpg";
	return (
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
										<GrDownload className="timetable-icon" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		// </div>
	);
}
