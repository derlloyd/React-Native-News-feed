import React, { Component } from "react";
import { Container } from "native-base";
import { themeStyle } from "./src/config";
import Header from "./components/header";
import TabsElement from "./components/tabs";

export default class App extends Component {
	render() {
		return (
			<Container>
				<Header />
				<TabsElement />
			</Container>
		);
	}
}
