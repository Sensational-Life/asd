import React from "react";
// import cardContent from "./CardContent";
import "./SignsOfAutism.css";

export default function Cards() {
	return (
		<div id="root" className="layout">
			<div className="textGrid">
				<div className="textGrid__inner">
					{/* <!--       Green background --> */}
					<div className="textGrid__blockColour"></div>
					<h1 className="header">Signs of Autism</h1>
					{/* <!--       container for cards --> */}
					<div className="textGrid__textContainer">
						{/* <!--           card1 -->     */}
						<div className="textGrid__textContainer___module">
							<h3 className="textGrid__textContainer___moduleTitle">text</h3>
							<p>body text</p>
						</div>
						{/* <!--           card2 --> */}
						<div className="textGrid__textContainer___module">
							<h3 className="textGrid__textContainer___moduleTitle">text</h3>
							<p>body text</p>
						</div>
						{/* <!--           card3 --> */}
						<div className="textGrid__textContainer___module">
							{" "}
							<h3 className="textGrid__textContainer___moduleTitle">text</h3>
							<p>body text</p>
						</div>
						{/* <!--           card4 --> */}
						<div className="textGrid__textContainer___module">
							{" "}
							<h3 className="textGrid__textContainer___moduleTitle">text</h3>
							<p>body text</p>
						</div>
						{/* <!--     card 4 done    --> */}
						{/* <!--         textGrid__textContainer end --> */}
					</div>
					{/* <!--       textGrid__inner end --> */}
				</div>
				{/* <!--     textGrid end --> */}
			</div>
			{/* <!--   layout end --> */}
		</div>
	);
}
