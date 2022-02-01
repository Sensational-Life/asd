import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WhatWeDoMore from "./pages/WhatWeDoMore/WhatWeDoMore";
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
					{/* routes from home page: */}
					<Route path="/register" component={Register} />
					<Route path="/about-us-more" component={AboutUsMore} />
					<Route path="/whatwedo" component={WhatWeDoMore} />
					{/* routes from nav bar: */}
					<Route path="/about" component={About} />
					<Route path="/resources" component={Resources} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
