import React, { useEffect, useState } from "react";
import imgEvent from "~/assets/images/events-hero.jpg";

import "./OurEvents.css";
import Events from "./OurEvents.json";
import { FaAngleRight , FaAngleLeft } from "react-icons/fa";

const images = require.context("../../assets/images", true);

function OurEvents() {
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(3);
	const [visibilityRight, setVisibilityRight] = useState(true);
	const [visibilityLeft, setVisibilityLeft ] = useState(false);

	const next = (e) =>{

		if(Events.length -1 == end) {
			setVisibilityRight(false);
			return;
		}


		setStart(start + 1);
		setEnd(end + 1);
		setVisibilityLeft(true);

	};
	const back = (e) =>{
		if(start === 0){
			setVisibilityLeft(false);
			return;
		}

		setStart(start - 1);
		setEnd(end - 1);
		if(Events.length -1 == end) {
			setVisibilityRight(true);
		}

	};

	useEffect(() => {
		const rightArrow = document.getElementById("ourevent_right_arrow");
		const leftArrow = document.getElementById("ourevent_left_arrow");

		rightArrow.style.visibility = visibilityRight ? "visible" : "hidden" ;
		leftArrow.style.visibility  = visibilityLeft ? "visible" : "hidden" ;
		if(visibilityLeft) {
			setVisibilityLeft(true);
		}


	},[visibilityLeft, visibilityRight]);


	return (
		<div className="ourevent_container_main">
			<div className="ourevent_img">
				<img src={imgEvent} alt="Event" />
			</div>
			<div className="container_cart">

					<FaAngleLeft id="ourevent_left_arrow" onClick={back } className="container_scroll_icon" />


				{Events.slice(start,end).map((event, i) => {
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
							<div className="ourevent_long_text" dangerouslySetInnerHTML={{ __html: event.text }} />
						</div>);
					}
				)}

					<FaAngleRight  id="ourevent_right_arrow"  onClick={next } className="container_scroll_icon" />


			</div>
		</div>
	);
}

export default OurEvents;
