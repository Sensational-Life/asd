import React, { useLayoutEffect } from "react";
import "./AboutUsPage.css";
import KellyAnneImg from "~/assets/images/KellyAnneSmithProfilePic.png";

function AboutUsPage() {
	useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
	return (
		<>
			<main className="about-us-main-container">
				<section className="about-us-content">
					<section className="about-us-content-left-container">
						<div className="about-us-img-container">
							<div className="about-us-img-container-colour-blob">
								<div className="about-us-hero-image">
									<img
										src={KellyAnneImg}
										alt="Kelly Anne Smith"
									/>
								</div>
								<div className="about-us-name-tag">
									<span>Kelly-Anne Smith</span>
								</div>
							</div>
						</div>
					</section>
					<section className="about-us-content-middle-container">
						<h1>Welcome to SENsational Life</h1>
						<span>with me Kelly-Anne Smith. And here is my Story..</span>
						<p>
							For a lot of years my life was very much like some kind of TV
							show, filled with drama and disaster. Only that there’s was never
							a wonderful prize waiting for me. The journey to establishing
							SENsational Life was bumpy and far from perfect, but one I am
							extremely proud of. My involvement with working with children who
							had various Learning Difficulties and Autism began over 20 years
							ago. Little did I know how much my growing family and life would
							be changed and led by neurodiversity.
						</p>
					</section>
					<section className="about-us-content-right-container">
						<p>
							As my teaching career grew so did my family grew, 4 neurodivergent
							children. Their care needs and ultimate demands were placed upon
							me. I couldn’t cope, I couldn’t reach out to friends and family
							for support. After experiencing a mental breakdown, I was signed
							off work with depression. After receiving professional help and
							support. I returned to teaching but couldn’t get past the lack of
							support available for families similar to mine so I decided to
							make some changes! <br></br> Fast forward, in 2015 I left my
							teaching position and set up what is now ‘SENsational Life’, with
							a view to reaching out and supporting other parents of autistic
							children. <br></br>And here I am Today!
						</p>
					</section>
				</section>
			</main>
		</>
	);

}

export default AboutUsPage;

