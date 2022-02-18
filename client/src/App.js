import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Navigation:
import Navbar from "./components/Navbar/Navbar";

// Home dependant pages:
import Home from "./pages/Home/Home";
import WhatWeDoPage from "./pages/WhatWeDoPage/WhatWeDoPage";
import JoinUs from "./pages/JoinUs/JoinUs";

// About:
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import WhatIsAutism from "./pages/About/WhatIsAutism/WhatIsAutism";
import SignsOfAutism from "./pages/About/SignsOfAutism/SignsOfAutism";
import AdditionalSupport from "./pages/About/AdditionalSupport/AdditionalSupport";
import OurEvents from "./pages/About/OurEvents/OurEvents";

// Resources:
// import Resources from "./pages/Resources/Resources";
import Timetables from "./pages/Resources/Timetables/Timetables";
import Advice from "./pages/Advice/Advice";
import UesfulLinks from "./pages/Resources/UesfulLinks/UesfulLinks";
import SelfReferralsPathway from "./pages/Resources/Referrals/SelfReferralsPathway";
import Edutainment from "./pages/Resources/Edutainment/Edutainment";

// Contacts:
import Contact from "./pages/Contact/Contact";
// User and Authorisation:
import SignUp from "./pages/User/SignUp";
import SignIn from "./pages/User/SignIn";
import PasswordReset from "./pages/User/PasswordReset";

// Footer:
import Footer from "./components/Footer/Footer";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
//Not Found Page:
import NotFound from "./pages/NotFound/NotFound";

// Styling:
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />

					{/* routes from home page: */}
					<Route path="/what-we-do" component={WhatWeDoPage} />
					<Route path="/join-us" component={JoinUs} />

					{/* routes from nav bar: */}
					<Route exact path="/about" component={AboutUsPage} />
					<Route path="/about/what-is-autism" component={WhatIsAutism} />
					<Route path="/about/signs-of-autism" component={SignsOfAutism} />
					<Route
						path="/about/additional-support"
						component={AdditionalSupport}
					/>
					<Route path="/about/events" component={OurEvents} />

					{/*
						"/resources" path is mapped to "Timetables" and will show
						either public or restricted  content from there
						until we have something better to put into root of "/resources"
					*/}

					<Route path="/resources/timetables" component={Timetables} />
					<Route path="/resources/edutainment" component={Edutainment} />
					<Route path="/resources/advice" component={Advice} />
					<Route
						path="/resources/self-referral-pathway"
						component={SelfReferralsPathway}
					/>
					<Route path="/resources/useful-links" component={UesfulLinks} />

					<Route path="/contact" component={Contact} />
					{/* User Authantication: */}
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/password-reset" component={PasswordReset} />

					{/* Footer Links: */}
					<Route
						path="/frequently-asked-questions"
						component={FrequentlyAskedQuestions}
					/>

					{/* Default route for 'Not Found' page */}
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
