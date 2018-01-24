import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Layout
import Layout from "layout/views/layout"
//import Header from "layout/components/Header"
import Footer from "layout/components/Footer"

// Pages
import Home from "homepage/views/homepage"

// CSS
import "semantic-ui-css/semantic.css"

const App = () => (
	<Router>
		<div className="app acpc">
			{/*<Route exact path="*" component={Header} />*/}
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Layout>
			<Route exact path="*" component={Footer} />
		</div>
	</Router>
)

export default App
