import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import "./App.css";

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
