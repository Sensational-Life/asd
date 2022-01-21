import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home/Home";

const App = () => (
	<Switch>
		<Route path="/" exact>
			<Home />
		</Route>
		<Route path="/about/this/site">
			<About />
		</Route>
	</Switch>
);

export default App;
