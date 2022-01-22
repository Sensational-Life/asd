import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import logo from "../logo.svg";
import AboutUs from "./AboutUs/AboutUs";
import FooterIcon from "./FooterIcon/FooterIcon";
import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				{/*<Link to="/about/this/site">About</Link> */}
				<Welcome />
				<AboutUs />
				<WhatWeDo />
				<FooterIcon />
			</div>
		</main>
	);
}

export default Home;
