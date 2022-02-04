import React from "react";
import imgEvent from "~/assets/images/our_event.jpg";
import imgHouse from "~/assets/images/play-house.jpg";
import imgXmas from "~/assets/images/xmas.jpg";
import imgAspire from "~/assets/images/aspire.jpg";
import "./OurEvents.css";
import Data from "./event.js";

function OurEvents( ) {
	console.log(Data);
	return (
		<div className="ourevent_container">
			<div className="ourevent_img">
				<img src={imgEvent} alt="Event" />
			</div>

			<div className="ourevent_grid_container">
				<div className="ourevent_grid_1">
					<img src={imgHouse} alt="img" />
				</div>
				<div className="ourevent_grid_1">
					<img src={imgXmas} alt="img" />
				</div>
				<div className="ourevent_grid_1">
					<img src={imgAspire} alt="img" />
				</div>

				<div className="ourevent_grid_2">
					<h3 className="ourevent_grid_2_title">{Data[0].title}</h3>
					<p className="ourevent_grid_2_text">23 Dec 2021 - 24 Dec 2021</p>
				</div>
				<div className="ourevent_grid_2">
					<h3 className="ourevent_grid_2_title">Festive song and fun</h3>
					<p className="ourevent_grid_2_text">20 Dec 2021 - 22 Dec 2021</p>
				</div>
				<div className="ourevent_grid_2">
					<h3 className="ourevent_grid_2_title">Emotional well-being</h3>
					<p className="ourevent_grid_2_text">Sat 10 Oct 2020</p>
				</div>

				<div className="ourevent_grid_3">
					<p className="ourevent_grid_3_text">
						Perkisound is an integrated music and recreation centre.<br /><br /> WHAT TO
						EXPECT <br />Use of all facilities at Perkisound including heated
						interactive sensory cabin £3.50 per child. This offer is for Sen
						families/carers only. There will be a maximum of 3 children in total
						booked in per hour so not exclusive but extremely quiet. This is
						open to all primary-school-age children with Sen and their siblings,
						book through messenger payment is required by Bacs in advance to
						secure a booking.
					</p>
				</div>
				<div className="ourevent_grid_3">
					<p className="ourevent_grid_3_text">
						Perkisound is an integrated music and recreation centre.<br /><br /> WHAT TO
						EXPECT <br /> Come and sing/listen to some live Xmas music in the music
						room then enjoy the sensory room or outdoor facilities. Find the
						festive settings on the interactive projector. £5 per child/adult
						with additional needs. please note this is an event for people with
						Sen. Not exclusive but very limited numbers per hour; maximum of 4
						children or 2 Sen adults per hour. Book via Perkisound messenger or
						email <a href="https://perkisound.org/">info@perkisound.org</a>.
					</p>
				</div>
				<div className="ourevent_grid_3">
					<p className="ourevent_grid_3_text">
						Supporting emotional well-being and managing challenging behaviours
						Online Event by Aspire Educational Psychology Services. At
						aspire-ep.co.uk. Please access via the website. Aspire Educational
						Psychology services is an independent educational psychology
						practice managed by Dr. Amanda Furness.<br /><br /> WHAT TO EXPECT <br /> A free
						webinar for parents and professionals exploring emotional well-being
						and challenging behaviour.
					</p>
				</div>
			</div>
		</div>
	);
}

export default OurEvents;
