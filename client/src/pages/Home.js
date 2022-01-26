import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MemberSays from "./MemberSays";
import "./Home.css";


export function Home() {
	return (
		<main role="main">
			<MemberSays />
		</main>
	);
}
export default Home;
