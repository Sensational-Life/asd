import React from "react";
import { useLayoutEffect } from "react";
import imgEvent from "~/assets/images/events-hero.jpg";

import "./OurEvents.css";
import Data from "./event.json";
import { FaAngleRight } from "react-icons/fa";

const images = require.context("../../assets/images", true);

function OurEvents() {
	useLayoutEffect(() => {
		// a bit ugly, but works...
		Data.forEach((element, idx) => {
			document
				.querySelector(`div.ourevent_long_text[id='${idx}']`)
				.innerHTML = element.text;
		});
	},[]);

	return (
		<div className="ourevent_container_main">
			<div className="ourevent_img">
				<img src={imgEvent} alt="Event" />
			</div>
			<div className="container_cart">
				{Data.map((event, i) => {
					const text = document.createElement("div");
					text.innerHTML = event.text;
					return (
						<div key={i} className="ourevent_container">
							<div className="ourevent_small_img">
								<img src={images(`./${event.img}`).default} alt="img" />
							</div>
							<div className="ourevent_title_date">
								<h3 className="ourevent_title">{event.title}</h3>
								<p className="ourevent_date">{event.date}</p>
							</div>
							<div className="ourevent_long_text" id={i}></div>
						</div>);
					}
				)}
				<div className="container_scroll">
					<FaAngleRight className="container_scroll_icon" />
				</div>
			</div>
		</div>
	);
}

export default OurEvents;
