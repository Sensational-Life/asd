import React from "react";
import "./UesfulLinks.css";
import UesfulLinkImg from "~/assets/images/sea.jpg";

function UesfulLinks() {
	return (
		<div className="uesful-links-container">
			<div className="uesful-links-img-conatiner">
				<div className="uesflu-links-img-color">
					<img
						className="uesful-links-img"
						src={UesfulLinkImg}
						alt="Uesful-link"
					/>
				</div>
			</div>
			<div className="uesful-link-text-conatiner">
				<div className="uesful-links-hesdr-text">
					<h1 className="uesful-links-text"> Useful Links</h1>
					<div className="uesful-links-links">
						<div className="uesful-main-links">
							<p className="uesful-links-p">Autism Network Scotland </p>
							<a
								className="uesful-links-a"
								href="https://www.autismnetworkscotland.org.uk/pages/home"
							>
								https://www.autismnetworkscotland.org.uk/pages/home
							</a>
						</div>
						<div className="uesful-main-links">
							<p className="uesful-links-p">Scottish Autism </p>
							<a
								className="uesful-links-a"
								href="https://www.scottishautism.org/"
							>
								https://www.scottishautism.org/
							</a>
						</div>
						<div className="uesful-main-links">
							<p className="uesful-links-p">National Autistic Society </p>
							<a className="uesful-links-a" href="https://www.autism.org.uk/ ">
								https://www.autism.org.uk/
							</a>
						</div>
						<div className="uesful-main-links">
							<p className="uesful-links-p">Different minds One Scotland </p>
							<a className="uesful-links-a" href="https://differentminds.scot/">
								https://differentminds.scot/
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UesfulLinks;
