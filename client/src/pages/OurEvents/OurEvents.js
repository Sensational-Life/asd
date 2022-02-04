import React from "react";
import imgEvent from "~/assets/images/our_event.jpg";
// import imgHouse from "~/assets/images/play-house.jpg";
// import imgXmas from "~/assets/images/xmas.jpg";
// import imgAspire from "~/assets/images/aspire.jpg";

import "./OurEvents.css";
import  events   from "./event.json";
import { FaAngleRight } from "react-icons/fa";

function OurEvents() {
	console.log(events);
	return (
		<div className="ourevent_container_main">
			<div className="ourevent_img">
				<img src={imgEvent} alt="Event" />
			</div>
			<div className="container_cart">
				{events.map((event, i) => {
					// const imgLink = require(event.img);
					return (
						<div key={i} className="ourevent_container">
							<div className="ourevent_small_img">
								<img src={require(event.img).default} alt="img" />
							</div>
							<div className="ourevent_title_date">
								<h3 className="ourevent_title">{event.title}</h3>
								<p className="ourevent_date">{event.date}</p>
							</div>
							<div className="ourevent_long_text">
								<p className="ourevent_text">{event.text}</p>
							</div>
						</div>);
					}
				)}
			<div className="container_scroll"> <FaAngleRight className="container_scroll_icon" /> </div>
			</div>
		</div>
	);
}

export default OurEvents;
