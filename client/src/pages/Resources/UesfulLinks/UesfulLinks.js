import React from "react";
import "./UesfulLinks.css";
import UesfulLinkImg from "~/assets/images/sea.jpg";

function UesfulLinks() {
	return (
		<div className="UesfulLink-container">
			<div className="UesfulLinks-img-conatiner">
				<div className="UesfulLinks-img-color">
					<img
						className="UesfulLink-img"
						src={UesfulLinkImg}
						alt="Uesful-link"
					/>
				</div>
			</div>
			<div className="UesfulLinks-text-links-conatiner">
				<div className="UesfulLink-hesdr-text">
					<h1 className="UesfulLink-text"> Useful Links</h1>
					<div className="UesfulLinks-links">
						<div className="U-links">
							<p className="UesfulLink-p">Autism Network Scotland </p>
							<a
								className="UesfulLinks-a"
								href="https://www.autismnetworkscotland.org.uk/pages/home"
							>
								https://www.autismnetworkscotland.org.uk/pages/home
							</a>
						</div>
						<div className="U-links">
							<p className="UesfulLink-p">Scottish Autism </p>
							<a
								className="UesfulLinks-a"
								href="https://www.scottishautism.org/"
							>
								https://www.scottishautism.org/
							</a>
						</div>
						<div className="U-links">
							<p className="UesfulLink-p">National Autistic Society </p>
							<a className="UesfulLinks-a" href="https://www.autism.org.uk/ ">
								https://www.autism.org.uk/
							</a>
						</div>
						<div className="U-links">
							<p className="UesfulLink-p">Different minds One Scotland </p>
							<a className="UesfulLinks-a" href="https://differentminds.scot/">
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
