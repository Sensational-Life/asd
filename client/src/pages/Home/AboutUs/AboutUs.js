import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'

function AboutUs() {

  const[buttonShow, setButtonShow] = useState(false)

  return (
		<div className="Aboutus_main_container">
			<div className="Aboutus_container">
				<div className="Aboutus_img_container">
					<div className="Aboutus_img_color">
						<div className="Aboutus_img">
							<img
								src="https://i.postimg.cc/442yFsZD/about-us-concept-2021-08-31-16-59-05-utc.jpg"
								alt="img"
							/>
						</div>
					</div>
				</div>

				<div className="Aboutus_text_container">
					<div className="Aboutus_header">
						<span>About Us </span>
					</div>
					<div className="Aboutus_text">
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
					<Link to="/about-us">
						<button
							className="Aboutus_button"
							onMouseEnter={() => setButtonShow(true)}
							onMouseLeave={() => setButtonShow(false)}
						>
							Read More
						</button>
					</Link>{" "}
					<br />
					{buttonShow && (
						<button className="Aboutus_button_hover">Read More</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
