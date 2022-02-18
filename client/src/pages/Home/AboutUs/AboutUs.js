import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import AboutUsImg from "~/assets/images/about-us-concept.jpg";

function AboutUs() {

  const[buttonShow, setButtonShow] = useState(false);
  return (
		<div className="aboutus_main_container">
			<div className="aboutus_container">
				<div className="aboutus_img_container">
					<div className="aboutus_img_color">
						<div className="aboutus_img">
							<img
								src={AboutUsImg}
								alt="img"
							/>
						</div>
					</div>
				</div>

				<div className="aboutus_text_container">
					<div >
						<h2 className="aboutus_header">About Us </h2>
					</div>
					<div className="aboutus_text">
						<span>
							{" "}
							SENsational Life: Autism and <br />
							Family Support was founded by <br />
							Kelly-anne Smith, who has over <br /> 20 years experience of SEN;
							both
							<br />
							professionally and personally.
						</span>
					</div>

					<Link to="about">

						<button
							className="aboutus_button"
							onMouseEnter={() => setButtonShow(true)}
							onMouseLeave={() => setButtonShow(false)}
						>
							Read More
						</button>
					</Link>{" "}
					<br />
					{buttonShow && (
						<button className="aboutus_button_hover">Read More</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
