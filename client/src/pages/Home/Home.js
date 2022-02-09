import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WeSupportYou from "./WeSupportYou/WeSupportYou";
import MemberSays from "./MemberSays/MemberSays";
import SubscribeNews from "./SubscribeNews/SubscribeNews";
import ScrollDown from "./ScrollDown/ScrollDown";
import Faq from "./Faq/Faq";

export function Home() {
	return (
		<main role="main">
			<Welcome />
			<ScrollDown />
			<AboutUs />
			<WhatWeDo />
			<WeSupportYou />
			<MemberSays />
			<SubscribeNews />
			<Faq />
		</main>
	);
}

export default Home;
