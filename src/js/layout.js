import React, {useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Character } from "./views/Character";
import { Planets } from "./views/Planets";
import { Vehicles } from "./views/Vehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const BASEURL = process.env.BASEURL || "";
	useEffect(() => {
		console.log(BASEURL);
	}, [])
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						{/* <Route exact path="/demo">
							<Demo />
						</Route> */}
						<Route exact path="/:endpoint/:uid">
							<Planets />
						</Route>
						<Route exact path="/:endpoint/:uid">
							<Character></Character>
						</Route>
						<Route exact path="/:endpoint/:uid">
							<Vehicles></Vehicles>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
