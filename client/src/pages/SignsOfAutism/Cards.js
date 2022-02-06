import React from "react";
import cardContent from "./Cards.json";
import "./SignsOfAutism.css";

export default function Cards() {
	return (
		<div className="signs-of-autism-wrapper">
			<div className="signs-of-autism-grid">
				<div className="signs-of-autism-container">

					<div className="cards-bg">
						<div>
							<h1 className="header">Signs of Autism</h1>
						</div>
					</div>
					<div className="card-container">
						{
							cardContent.map((card) => {
								const cardKey = card.title.toLowerCase().replace(/\s/ig, "");
								return (
									<div className="card" key={cardKey}>
										<h3 className="card-header">{card.title}</h3>
										<div dangerouslySetInnerHTML={{ __html: card.text }} />
										<ul className="options">
											{
												card.options.map((option, idx) => {
													return (
														<li key={`${idx}_${cardKey}`}>{option}</li>
													);
												})
											}
										</ul>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}
