import React, { Component } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { API_KEY, URL, themeStyle } from "../src/config";
import Card from "./card";

export default class Articles extends Component {
	state = {
		data: [],
		loaded: false,
		category: this.props.category
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		const response = await fetch(
			`${URL}${this.state.category}&apiKey=${API_KEY}`
		);
		const json = await response.json();
		this.setState({
			loaded: true,
			data: json.articles.sort((a, b) => {
				return new Date(a.publishedAt) + new Date(b.publishedAt);
			})
		});
	};

	_keyExtractor = (item, index) => index;

	_renderItem = ({ item, index }) => (
		<Card
			source={item.source.name}
			publish={item.publishedAt}
			image={item.urlToImage}
			title={item.title}
			url={item.url}
			index={index}
		/>
	);

	render() {
		const view = this.state.loaded ? (
			<FlatList
				data={this.state.data}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}
			/>
		) : (
			<View style={themeStyle.spinnerHolder}>
				<ActivityIndicator color="#538ae4" />
			</View>
		);
		return view;
	}
}
