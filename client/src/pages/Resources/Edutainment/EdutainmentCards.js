import React from "react";
import { EdutainmentMenuItems } from "../../../helpers/EdutainmentMenuitems";
import ResponsivePlayer from "react-player";

export default function EdutainmentCards() {
	return (
		<div className="grid-container">
			{EdutainmentMenuItems.map((item, index) => (
				<div className="grid-item" key={index}>
					<div className="video-wrapper">
						<ResponsivePlayer
							className="player"
							url={item.link}
							// playing={true}
							controls={true}
							width="100%"
							height="100%"
						/>
					</div>
					<h4 className="card-header">{item.title}</h4>
				</div>
			))}
		</div>
	);
}
