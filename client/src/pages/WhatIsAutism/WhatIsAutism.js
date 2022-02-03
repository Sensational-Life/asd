import React from "react";
import ReactPlayer from "react-player/youtube";
import { BsPlayCircleFill } from "react-icons/bs";
import whatIsAutismImg from "../../assets/images/what-is-autism.jpeg";
import whatIsAutismVideoImg from "../../assets/images/what-is-autism-video.jpg";
import FooterNav from "../Home/FooterNav/FooterNav";
import FooterIcon from "../Home/FooterIcon/FooterIcon";
import FooterLogo from "../Home/FooterLogo/FooterLogo";
import "./WhatIsAutism.css";

function WhatIsAutism() {
	return (
		<div className="what-is-autism-container">
			<img
				className="hero-image"
				src={whatIsAutismImg}
				alt="A woman and a girl are talking"
			></img>
			<div className="main-container">
				<div className="discription-container">
					<div className="discription">
						Autism or Autism Spectrum Disorder is not an illness or a disease.
						Autism is not a medical condition with treatments or a “cure”. It
						means your brain works in a different way from other people.
						It’s something you’re born with or first appears when you’re
						very young.<br />
						Everyone with autism is different, that’s what makes it a spectrum.
						Some people may need little or no support. Other may need extra
						help to manage certain things such as daily tasks, activities, jobs
						or relationships.
					</div>
					<div className="more-info-autism">
						For more info and a guide about Autism <br />
						visit the NHS website:
						<a
							href="https://www.nhs.uk/conditions/autism/"
							target="_blank"
							rel="noreferrer"
						>
							https://www.nhs.uk/conditions/autism/
						</a>
					</div>
				</div>
				<div className="video-container">
					<div className="video-wrapper">
						<ReactPlayer
							className="player"
							url={"https://www.youtube.com/watch?v=0Pp8jcQ97pY"}
							playing
							playIcon={<BsPlayCircleFill className="player-button" />}
							controls={true}
							light={whatIsAutismVideoImg}
							width="100%"
							height="130%"
						/>
					</div>
					<div className="vide-discription">
						<p>
							Here is an informative video about Autism
							<br />
							Spectrum Disorder by The National Center <br />
							for Learning Disabilities.
						</p>
					</div>
				</div>
			</div>
			<FooterLogo />
			<FooterNav />
			<FooterIcon />
		</div>
	);
}

export default WhatIsAutism;
