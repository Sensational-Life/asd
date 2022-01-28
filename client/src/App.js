import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import TermsConditions from "./pages/Terms&Condition/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={AboutUs} />
					<Route path="/termsConditions" component={TermsConditions} />
					<Route path="/privacyPolicy" component={PrivacyPolicy} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
