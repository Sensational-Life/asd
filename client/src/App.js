import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Navigation:
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// Home:
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import About from "./pages/About/About";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import WhatIsAutism from "./pages/WhatIsAutism/WhatIsAutism";
import AdditionalSupport from "./pages/AdditionalSupport/AdditionalSupport";
// Resources:
import Resources from "./pages/Resources/Resources";
// Contacts:
import Contact from "./pages/Contact/Contact";
// Registration:
import Register from "./pages/RegisterPage/Register";
import Login from "./pages/Login/Login";
import OurEvents from "./pages/OurEvents/OurEvents";


import WhatWeDoPage from "~/pages/WhatWeDoPage/WhatWeDoPage";
// Footer links:
import TermsConditions from "./pages/Terms&Condition/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

// Styling:
import "./App.css";

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

					<Route path="/about-us-more" component={AboutUsPage} />
					<Route path="/what-we-do" component={WhatWeDoPage} />

					{/**
					 * routes from nav bar:
					 */}
					<Route exact path="/about" component={About} />
					<Route
						path="/about/additional-support"
						component={AdditionalSupport}
					/>
					<Route path="/about/what-is-autism" component={WhatIsAutism} />
					<Route path="/resources" component={Resources} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
					<Route path="/about/events" component={OurEvents} />

					{/* Footer links: */}
					<Route path="/about-us-more" component={AboutUs} />

					{/**
					 * Footer links:
					 */}
					<Route path="/termsConditions" component={TermsConditions} />
					<Route path="/privacyPolicy" component={PrivacyPolicy} />
				</Switch>
              <Footer />
			</Router>
		</>
	);
}

export default App;
