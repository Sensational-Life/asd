import { useEffect, useState } from "react";
import "./Home.css";
import WeSupportYou from "./WeSupportYou/WeSupportYou";
import Footer from "./Footer/Footer";



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
				<h1 className="message" data-qa="message">
					{message}
				</h1>
			</div>
		<WeSupportYou />
		<Footer />

		</main>
	);
}

export default Home;
