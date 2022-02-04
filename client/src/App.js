import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Navigation:
import Navbar from "./components/Navbar/Navbar";
// Home:
import Home from "./pages/Home/Home";
import WhatWeDoMore from "./pages/WhatWeDoMore/WhatWeDoMore";
// About:
import About from "./pages/About/About";
import AboutUsMore from "./pages/AboutUSMore/AboutUsMore";
import WhatIsAutism from "./pages/WhatIsAutism/WhatIsAutism";
import AdditionalSupport from "./pages/AdditionalSupport/AdditionalSupport";
// Resources:
import Resources from "./pages/Resources/Resources";
// Contacts:
import Contact from "./pages/Contact/Contact";
// Registration:
import Register from "./pages/RegisterPage/Register";
import Login from "./pages/Login/Login";

import ResetPassword from "./pages/ResetPassword/ResstPassword";

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
					<Route path="/about-us-more" component={AboutUsMore} />
					<Route path="/whatwedo" component={WhatWeDoMore} />

					{/**
					 * routes from nav bar:
					 */}
					<Route exact path="/about" component={About} />
					<Route path="/about/additional-support" component={AdditionalSupport} />
					<Route path="/about/what-is-autism" component={WhatIsAutism} />
					<Route path="/resources" component={Resources} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />

					<Route path="/ResetPassword" component={ResetPassword} />
					{/* Footer links: */}
					<Route path="/about" component={AboutUs} />

					<Route path="/termsConditions" component={TermsConditions} />
					<Route path="/privacyPolicy" component={PrivacyPolicy} />

				</Switch>
			</Router>
		</>
	);
}

export default App;
