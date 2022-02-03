import React from "react";
import imgEvent from "../../assets/images/our_event.jpg";
import "./OurEvents.css";

function OurEvents() {
	return (
		<div>
			<div className="ourevent_img">
				<img src={imgEvent} alt="Event" />
			</div>
			<div className="ourevent_grid_container">
				<div className="ourevent_grid_1">
					<img src={imgEvent} />
				</div>
				<div className="ourevent_grid_1">
					<img src={imgEvent} />
				</div>
				<div className="ourevent_grid_1">
					<img src={imgEvent} />
				</div>
				<div className="ourevent_grid_2">
					<h4>Festive song and fun</h4>
					<p>23 Dec 2021 - 24 Dec 2021</p>
				</div>
				<div className="ourevent_grid_2">
					<h6>Festive song and fun</h6>
					<p>20 Dec 2021 - 22 Dec 2021</p>
				</div>
				<div className="ourevent_grid_2">
					<h6>Emotional well-being</h6>
					<p>Sat 10 Oct 2020</p>
				</div>
				<div className="ourevent_grid_3">
					<p>
						Perkisound is an integrated music and recreation centre. WHAT TO
						EXPECT Use of all facilities at Perkisound including heated
						interactive sensory cabin £3.50 per child. This offer is for Sen
						families/carers only. There will be a maximum of 3 children in total
						booked in per hour so not exclusive but extremely quiet. This is
						open to all primary-school-age children with Sen and their siblings,
						book through messenger payment is required by Bacs in advance to
						secure a booking.
					</p>
				</div>
				<div className="ourevent_grid_3">
					<p>
						Perkisound is an integrated music and recreation centre. WHAT TO
						EXPECT Come and sing/listen to some live Xmas music in the music
						room then enjoy the sensory room or outdoor facilities. Find the
						festive settings on the interactive projector. £5 per child/adult
						with additional needs. please note this is an event for people with
						Sen. Not exclusive but very limited numbers per hour; maximum of 4
						children or 2 Sen adults per hour. Book via Perkisound messenger or
						email info@perkisound.org.
					</p>
				</div>
				<div className="ourevent_grid_3">
					<p>
						Supporting emotional well-being and managing challenging behaviours
						Online Event by Aspire Educational Psychology Services. At
						aspire-ep.co.uk. Please access via the website. Aspire Educational
						Psychology services is an independent educational psychology
						practice managed by Dr. Amanda Furness. WHAT TO EXPECT A free
						webinar for parents and professionals exploring emotional well-being
						and challenging behaviour.
					</p>
				</div>
			</div>
		</div>
	);
}

export default OurEvents;
