import React, { useEffect, useState } from "react";
import imgEvent from "~/assets/images/events-hero.jpg";
import "./OurEvents.css";
import Events from "./OurEvents.json";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const images = require.context("../../assets/images", true);

function OurEvents() {
	const [startLength, setStartLength] = useState(0);
	const [endLength, setEndLength] = useState(3);
	const [visibilityRight, setVisibilityRight] = useState(true);
	const [visibilityLeft, setVisibilityLeft] = useState(false);

	const forwardArrow = () => {
		if (Events.length - 1 == endLength) {
			setVisibilityRight(false);
			return;
		}
		setStartLength(startLength + 1);
		setEndLength(endLength + 1);
		setVisibilityLeft(true);
	};
	const backforwardArrow = () => {
		if (startLength === 0) {
			setVisibilityLeft(false);
			return;
		}
		setStartLength(startLength - 1);
		setEndLength(endLength - 1);
		if (Events.length - 1 == endLength) {
			setVisibilityRight(true);
		}
	};
	useEffect(() => {
		const rightArrow = document.getElementById("ourevent_right_arrow");
		const leftArrow = document.getElementById("ourevent_left_arrow");

		rightArrow.style.visibility = visibilityRight ? "visible" : "hidden";
		leftArrow.style.visibility = visibilityLeft ? "visible" : "hidden";
		if (visibilityLeft) {
			setVisibilityLeft(true);
		}
	}, [visibilityLeft, visibilityRight]);

	return (
		<div className="ourevent_container_main">
			<div className="ourevent_img">
				<img src={imgEvent} alt="Event" />
			</div>
			<div className="ourevent_container_cart">
				<div className="ourevent_arrow_cont">
					<FaAngleLeft
						id="ourevent_left_arrow"
						onClick={backforwardArrow}
						className="ourevent_arrow ourevent_left_arrow"
					/>
				</div>
				{Events.slice(startLength, endLength).map((event, i) => {
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
							<div
								className="ourevent_long_text"
								dangerouslySetInnerHTML={{ __html: event.text }}
							/>
						</div>
					);
				})}
				<div className="ourevent_arrow_cont">
					<FaAngleRight
						id="ourevent_right_arrow"
						onClick={forwardArrow}
						className="ourevent_arrow ourevent_right_arrow"
					/>
				</div>
			</div>
		</div>
	);
}

export default OurEvents;
