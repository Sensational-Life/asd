import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Navigation:
import Navbar from "./components/Navbar/Navbar";

// Home dependant pages:
import Home from "./pages/Home/Home";


// About:
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import About from "./pages/About/About";



import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

import WhatIsAutism from "./pages/WhatIsAutism/WhatIsAutism";
import SignsOfAutism from "./pages/SignsOfAutism/SignsOfAutism";
import AdditionalSupport from "./pages/AdditionalSupport/AdditionalSupport";
import OurEvents from "./pages/OurEvents/OurEvents";

// Resources:
import Resources from "./pages/Resources/Resources";

// Contacts:
import Contact from "./pages/Contact/Contact";

// User and Authorisation:
import SignUpPage from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import PasswordResetPage from "./pages/User/PasswordResetPage";
import WhatWeDoPage from "./pages/WhatWeDoPage/WhatWeDoPage";

// Footer links:
import TermsConditions from "./pages/Terms&Condition/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

//Not Found Page:
import NotFound from "./pages/NotFound/NotFound";

// Styling:
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />


					
					{/**
					 * routes from home page:
					 */}
					<Route path="/register" component={Register} />
					<Route path="/about-us" component={AboutUsPage} />		

					<Route path="/what-we-do" component={WhatWeDoPage} />

					{/* routes from nav bar: */}
					<Route exact path="/about" component={AboutUsPage} />
						<Route path="/about/what-is-autism" component={WhatIsAutism} />
						<Route path="/about/signs-of-autism" component={SignsOfAutism} />
						<Route path="/about/additional-support" component={AdditionalSupport} />
						<Route path="/about/events" component={OurEvents} />

					<Route exact path="/resources" component={Resources} />

					<Route path="/contact" component={Contact} />

					{/* User Authantication: */}
					<Route path="/signin" component={SignInPage} />
 					<Route path="/signup" component={SignUpPage} />
					<Route path="/password-reset" component={PasswordResetPage} />

					{/* Footer links: */}
					<Route path="/terms-conditions" component={TermsConditions} />
					<Route path="/privacy-policy" component={PrivacyPolicy} />

					{/* Default route for 'Not Found' page */}
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
