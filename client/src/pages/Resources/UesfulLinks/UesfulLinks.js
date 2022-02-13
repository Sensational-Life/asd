import React from "react";
import { Link } from "react-router-dom";
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
					<Link to="https://www.autismnetworkscotland.org.uk/pages/home" >
						https://www.autismnetworkscotland.org.uk/pages/home
					</Link>

					<p>Scottish Autism</p>
					<Link to="https://www.scottishautism.org">
						https://www.scottishautism.org/
					</Link>

					<p>National Autistic Society</p>
					<Link to="https://www.autism.org.uk">
						https://www.autism.org.uk/
					</Link>

					<p>Different minds One Scotland</p>
					<Link to="https://differentminds.scot">
						https://differentminds.scot/
					</Link>
			</div>
		</div>
	);
}

export default UesfulLinks;
