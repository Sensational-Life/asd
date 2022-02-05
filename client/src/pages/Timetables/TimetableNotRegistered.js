import React from "react";
import "./TimetableNotRegistered.css";



import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import GirlImg from "~/assets/images/autistic-little-girl-close-up.jpg";
// import arrowImg from "~/assets/images/dummyArrow.jpg";
import leftTopImg from "~/assets/images/dummyLeft1.jpg";
// import rightImg from "~/assets/images/dummyRight.jpg";
import leftBottomImg from "~/assets/images/dummyLeftbottom.jpg";
function TimetableNotRegistered(){

    return (
			<>
				<main className="timetables-main-container">
					<section className="timetables-content-container">
						<section className="timetables-left-container">
							<section className=" timestables-text-container">
								<p>
									Our visual timetables will help your Child to settle into a
									routine with clear a clear structure. We also offer a guide
									and a video that will teach you how to use visual timetable.
								</p>
								<p>
									To access online or download <br></br> FREE Timetable{" "}
									<Link to="/login">Sign Up.</Link>
								</p>
							</section>
							<Link to="/register">
								{" "}
								<button className="register-button">
									Click here to Register
								</button>
							</Link>
							<img src={leftTopImg} alt="img" />
							<img src={leftBottomImg} alt="img" />
						</section>
						<section className="timetables-img-container">
							<section className="timetables-img-color-blob">
								<section className="img">
									<img src={GirlImg} alt="img" />
								</section>
							</section>
						</section>
					</section>
				</main>
			</>
		);
}
export default TimetableNotRegistered;