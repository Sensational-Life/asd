import React from "react";
import "./TimetableNotRegistered.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import motherAndDaughterImg from "~/images/mother-daughter-laptop.jpeg";
import arrowImg from "~/images/arrow-heart.png";
import leftTopImg from "~/images/timetable-small-top.jpg";
import rightImg from "~/images/timetable-illustration-large.jpg";
import leftBottomImg from "~/images/timetable-small-bottom.jpg";

function TimetableNotRegistered() {
	const [buttonShow, setButtonShow] = useState(false);
	return (
		<>
			<main className="timetables-main-container">
				<section className="timetables-content-container">
					<section className=" timestables-text-container">
						<p>
							Our visual timetables will help your Child to settle into a
							routine with a clear structure. We also offer a guide and a video
							that will teach you how to use visual timetable.
						</p>
						<p>
							To access online or download <br></br> FREE Timetable{" "}
							<Link to="/login">Sign Up.</Link>
						</p>
						<Link to="/register">
							<button
								className="register-button"
								onMouseEnter={() => setButtonShow(true)}
								onMouseLeave={() => setButtonShow(false)}
							>
								Click here to Register
							</button>
						</Link>
						{buttonShow && (
							<button className="welcome_button_hover">
								Click here to Register
							</button>
						)}
					</section>

					<section className="timetables-img-container">
						<section className="timetables-img-color-blob">
							<section className="img">
								<img src={motherAndDaughterImg} alt="mother and daughter browsing internet"/>
							</section>
						</section>
					</section>
				</section>
				<section className="bottom-container">
					<div>
						<img src={leftTopImg} alt="timetable illustration" />
						<img src={leftBottomImg} alt="timetable illustration" />
					</div>
					<img className="arrowImg" src={arrowImg} alt="an arrow forming a heart"/>
					<img className="rightImg" src={rightImg} alt="timetable illustration"/>
				</section>
			</main>
		</>
	);
}
export default TimetableNotRegistered;
