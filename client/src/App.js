import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import WhatWeDoMore from "./pages/WhatWeDoMore/WhatWeDoMore";
import Register from "./pages/RegisterPage/Register";
import AboutUsMore from "./pages/AboutUSMore/AboutUsMore";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={AboutUs} />
					<Route path="/whatwedo" component={WhatWeDoMore} />
					<Route path="/register" component={Register} />
					<Route path="/about-us" component={AboutUsMore} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
