import React, { Component } from "react";
import { Tabs, Tab, TabHeading, Text, ScrollableTab } from "native-base";
import { themeStyle, Categories } from "../src/config";
import Articles from "./list";
export default class TabsElement extends Component {
	render() {
		return (
			<Tabs
				renderTabBar={() => <ScrollableTab />}
				tabBarUnderlineStyle={{ backgroundColor: "#222" }}
			>
				{Categories.map(item => (
					<Tab
						textStyle={{ color: "#999" }}
						style={themeStyle.body}
						activeTextStyle={{ color: "#000" }}
						heading={item}
					>
						<Articles category={item} />
					</Tab>
				))}
			</Tabs>
		);
	}
}
