import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/RegisterPage/Register";
import AboutUsMore from "./pages/AboutUSMore/AboutUsMore";
import "./App.css";
import Resources from "./pages/Resources/Resources";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/resources" component={Resources} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/about-us" component={AboutUsMore} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
