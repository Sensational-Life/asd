import React, { useLayoutEffect } from "react";
import "./WhatWeDoPage.css";
import momAndGirlImg from "~/assets/images/mom-and-girl.png";

function WhatWeDoPage() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
 }, []);
	return (
		<>
			<main className="what-we-do-main-container">
				<section className="what-we-do-content">
					<section className="what-we-do-content-left-container">
						<div className="what-we-do-img-container">
							<div className="what-we-do-img-container-colour-blob"><div className="what-we-do-hero-image">
								<img src={momAndGirlImg} alt="a mother kissing daughters forehead" />

							</div>
							</div>
						</div>
					</section>
					<section className="what-we-do-content-right-container">
						<h1>What We Do</h1>
						<p>
							Our mission at SENsational Life is to support and empower
							neurodiverse families; giving parents of autistic children the
							tools, strategies, and knowledge to provide and secure the support
							and services needed for an inclusive and happy life.
						</p>
						<br></br>
						<p>
							I know that the waiting game can be very long and distressing:
							waiting to get an appointment, for assessments, for help and
							support. If you are in these shoes, SENsational Life is for you.
						</p>
						<br></br>
						<p>
							I know first-hand that parenting children with additional needs
							and disabilities can be very isolating, confusing and a
							frustrating experience. One which can be incredibly draining at
							times for all the family. I overcame so much to get the support
							needed, not only for my children but for me too.
						</p>
					</section>
				</section>
			</main>
		</>
	);
}

export default WhatWeDoPage;
