import React from "react";
import "./UesfulLinks.css";
import UesfulLinkImg from "~/assets/images/sea.jpg";

function UesfulLinks() {
	return (
		<div className="useful-links-container">
			<div className="img-conatiner">
				<img
					src={UesfulLinkImg}
					alt="Useful-link"
				/>
				<div className="img-bg" />
			</div>
			<div className="content">
					<h1>Useful Links</h1>
					<p>Autism Network Scotland </p>
					<a href="https://www.autismnetworkscotland.org.uk/pages/home">
						https://www.autismnetworkscotland.org.uk/pages/home
					</a>

					<p>Scottish Autism</p>
					<a href="https://www.scottishautism.org">
						https://www.scottishautism.org/
					</a>

					<p>National Autistic Society</p>
					<a href="https://www.autism.org.uk">
						https://www.autism.org.uk/
					</a>

					<p>Different minds One Scotland</p>
					<a href="https://differentminds.scot">
						https://differentminds.scot/
					</a>
			</div>
		</div>
	);
}

export default UesfulLinks;
