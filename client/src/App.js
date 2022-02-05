import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Navigation:
import Navbar from "./components/Navbar/Navbar";

// Home dependant pages:
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AboutUsMore from "./pages/AboutUSMore/AboutUsMore";
import WhatIsAutism from "./pages/WhatIsAutism/WhatIsAutism";
import AdditionalSupport from "./pages/AdditionalSupport/AdditionalSupport";
import WhatWeDoPage from "./pages/WhatWeDoPage/WhatWeDoPage";

// Resources:
import Resources from "./pages/Resources/Resources";

// Contacts:
import Contact from "./pages/Contact/Contact";

// User and Authorisation:
import SignUpPage from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import PasswordResetPage from "./pages/User/PasswordResetPage";

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

					{/* routes from home page: */}
					<Route path="/about-us-more" component={AboutUsMore} />
					<Route path="/what-we-do" component={WhatWeDoPage} />

					{/* routes from nav bar: */}
					<Route exact path="/about" component={About} />
					<Route path="/about/additional-support" component={AdditionalSupport} />
					<Route path="/about/what-is-autism" component={WhatIsAutism} />
					<Route path="/resources" component={Resources} />
					<Route path="/contact" component={Contact} />

					{/* User Authantication: */}
					<Route path="/signin" component={SignInPage} />
					<Route path="/signup" component={SignUpPage} />
					<Route path="/password-reset" component={PasswordResetPage} />

					{/* Footer links: */}
					<Route path="/termsConditions" component={TermsConditions} />
					<Route path="/privacyPolicy" component={PrivacyPolicy} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
