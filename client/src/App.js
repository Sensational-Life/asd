import { Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={AboutUs} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
