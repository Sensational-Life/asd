import React from "react";
import ResponsivePlayer from "react-player";
import { BsPlayCircleFill } from "react-icons/bs";
import whatIsAutismImg from "~/assets/images/what-is-autism.jpeg";
import whatIsAutismVideoImg from "~/assets/images/what-is-autism-video.jpg";
import FooterNav from "../Home/FooterNav/FooterNav";
import FooterIcon from "../Home/FooterIcon/FooterIcon";
import FooterLogo from "../Home/FooterLogo/FooterLogo";
import "./WhatIsAutism.css";

function WhatIsAutism() {
	return (
		<div className="what-is-autism-container">
			<div className="what-is-autism-content">
				<div className="what-is-autism-header">
					<img src={whatIsAutismImg} alt="A woman and a girl are talking"></img>
				</div>

				<div className="what-is-autism-section">
					<div className="description-container">
						<p>
							Autism or Autism Spectrum Disorder is not an illness or a disease.
							Autism is not a medical condition with treatments or a “cure”. It
							means your brain works in a different way from other people.
							<br />
							It&rsquo;s something you&rsquo;re born with or first appears when
							you&rsquo;re very young.
							<br />
							Everyone with autism is different, that&rsquo;s what makes it a
							spectrum. Some people may need little or no support. Other may
							need extra help to manage certain things such as daily tasks,
							activities, jobs or relationships.
						</p>
						<p>
							For more info and a guide about Autism <br />
							visit the NHS website:
							<a
								href="https://www.nhs.uk/conditions/autism/"
								target="_blank"
								rel="noreferrer"
								className="what-is-autism-link"
							>
								https://www.nhs.uk/conditions/autism/
							</a>
						</p>
					</div>

					<div className="video-container">
						<div className="video-wrapper">
							<ResponsivePlayer
								className="player"
								url="https://www.youtube.com/watch?v=0Pp8jcQ97pY"
								playing={true}
								playIcon={<BsPlayCircleFill className="player-button" />}
								controls={true}
								light={whatIsAutismVideoImg}
								width="100%"
								height="100%"
							/>
						</div>
						<div className="video-description">
							<p>
								Here is an informative video about Autism Spectrum Disorder by
								The National Center for Learning Disabilities.
							</p>
						</div>
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