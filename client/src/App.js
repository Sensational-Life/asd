import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Navigation:
import Navbar from "./components/Navbar/Navbar";

// Home dependant pages:
import Home from "./pages/Home/Home";

// About:
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import WhatIsAutism from "./pages/WhatIsAutism/WhatIsAutism";
import SignsOfAutism from "./pages/SignsOfAutism/SignsOfAutism";
import AdditionalSupport from "./pages/AdditionalSupport/AdditionalSupport";
import OurEvents from "./pages/OurEvents/OurEvents";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

// Resources:
import Resources from "./pages/Resources/Resources";

// Contacts:
import Contact from "./pages/Contact/Contact";
// Registration:

import WhatWeDoPage from "./pages/WhatWeDoPage/WhatWeDoPage";
// Footer links:

// User and Authorisation:
import SignUpPage from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import PasswordResetPage from "./pages/User/PasswordResetPage";

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

					{/* routes from home page: */}
					<Route path="/what-we-do" component={WhatWeDoPage} />

					{/* routes from nav bar: */}
				
					<Route path="/about/what-is-autism" component={WhatIsAutism} />
					<Route path="/about/signs-of-autism" component={SignsOfAutism} />
					<Route
						path="/about/additional-support"
						component={AdditionalSupport}
					/>
					<Route path="/frequently-asked-questions" component={FrequentlyAskedQuestions} />
					<Route path="/resources" component={Resources} />
					<Route exact path="/about" component={AboutUsPage} />
						<Route path="/about/what-is-autism" component={WhatIsAutism} />
						<Route path="/about/signs-of-autism" component={SignsOfAutism} />
						<Route path="/about/additional-support" component={AdditionalSupport} />
						<Route path="/about/events" component={OurEvents} />

					<Route exact path="/resources" component={Resources} />

					<Route path="/contact" component={Contact} />

					{/**
					 * Footer links:
					 */}
					
					{/* User Authantication: */}
					<Route path="/signin" component={SignInPage} />
 					<Route path="/signup" component={SignUpPage} />
					<Route path="/password-reset" component={PasswordResetPage} />

					{/* Default route for 'Not Found' page */}
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
