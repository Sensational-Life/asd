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
							We offer FREE visual timetables with a clear structure, which can
							help your child to settle into a routine. We have several
							different types of visual timetables suitable for all children of
							different ages.
						</p>
						<p>
							To access online or download <br></br> FREE Timetable{" "}
							<Link to="/login">Sign Up.</Link>
						</p>
						<p>
							If you want to access our visual<br></br> timetables online or
							Download:
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
							<button className="register-button-hover">
								Click here to Register
							</button>
						)}
					</section>

					<section className="timetables-img-container">
						<img
							className="primary-img"
							src={motherAndDaughterImg}
							alt="mother and daughter browsing internet"
						/>
						<section className="timetables-img-color-blob"></section>
						{/* <section className="primary-img"></section> */}
					</section>
				</section>
				<section className="bottom-container">
					<div className="bottom-two-cards">
						<img
							className="left-top-img"
							src={leftTopImg}
							alt="timetable illustration"
						/>
						<img
							className="left-bottom-img"
							src={leftBottomImg}
							alt="timetable illustration"
						/>
					</div>
					<img
						className="arrow-img"
						src={arrowImg}
						alt="an arrow forming a heart"
					/>
					<img
						className="right-image-card-lg"
						src={rightImg}
						alt="timetable illustration"
					/>
				</section>
			</main>
		</>
	);
}
export default TimetableNotRegistered;
