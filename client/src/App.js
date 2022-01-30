import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import Register from "./pages/RegisterPage/Register";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={AboutUs} />
					<Route path="/register" component={Register} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
