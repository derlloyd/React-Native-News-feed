import React, { Component } from "react";
import { Header, Body, Title } from "native-base";

export default class TopHeader extends Component {
	render() {
		return (
			<Header hasTabs>
				<Body>
					<Title>Top Headlines</Title>
				</Body>
			</Header>
		);
	}
}
