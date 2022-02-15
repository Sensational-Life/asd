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
					<a
					target={"_blank"}
					href="https://www.autismnetworkscotland.org.uk/pages/home" rel="noreferrer">
						https://www.autismnetworkscotland.org.uk/pages/home
					</a>

					<p>Scottish Autism</p>
					<a
					target={"_blank"}
					href="https://www.scottishautism.org" rel="noreferrer">
						https://www.scottishautism.org/
					</a>

					<p>National Autistic Society</p>
					<a
					target={"_blank"}
					href="https://www.autism.org.uk" rel="noreferrer">
						https://www.autism.org.uk/
					</a>

					<p>Different minds One Scotland</p>
					<a
					target={"_blank"}
					href="https://differentminds.scot" rel="noreferrer">
						https://differentminds.scot/
					</a>
			</div>
		</div>
	);
}

export default UesfulLinks;
