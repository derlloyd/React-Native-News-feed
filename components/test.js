import React from "react";
import { Container, Content } from "native-base";
import TopHeader from "./header";
import Articles from "./list";

export default class Hello extends React.Component {
	constructor() {
		super();
		this.state = {
			data: null,
			loading: true
		};
	}

	render() {
		return (
			<Container>
				<TopHeader />
				<Content>
					<Articles />
				</Content>
			</Container>
		);
	}
}
