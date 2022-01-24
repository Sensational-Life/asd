import { useEffect, useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import FooterIcon from "./FooterIcon/FooterIcon";
import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WeSupportYou from "./WeSupportYou/WeSupportYou";

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
				<Welcome />
				<AboutUs />
				<WhatWeDo />
				<WeSupportYou />
				<FooterIcon />
		</main>
	);
}

export default Home;
