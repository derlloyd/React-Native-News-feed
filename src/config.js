import React from "react";
import { StyleSheet } from "react-native";

const API_KEY = "ba72ec113be94bc390315f3d89a7a913";
const URL = "https://newsapi.org/v2/top-headlines?country=us&category=";
const ImagePlaceHolder = "http://via.placeholder.com/350x150";
const Categories = [
	"Sports",
	"Technology",
	"Health",
	"Entertainment",
	"Science"
];

const themeStyle = StyleSheet.create({
	body: { backgroundColor: "#EDF0F6" },
	spinnerHolder: { flex: 1, alignItems: "center", justifyContent: "center" },
	container: {
		marginTop: 15,
		marginRight: 15,
		marginLeft: 15,
		backgroundColor: "#fff",
		borderRadius: 10,
		overflow: "hidden"
	},
	thumbnailHolder: {
		overflow: "hidden",
		backgroundColor: "#999",
		width: "100%",
		borderWidth: 1,
		borderColor: "#ddd"
	},
	thumbnail: {
		alignSelf: "center",
		width: "100%"
	},
	details: {
		flex: 1,
		alignItems: "flex-start",
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10
	},
	source: {
		position: "absolute",
		left: 0,
		top: 5,
		color: "#538ae4",
		fontSize: 11,
		padding: 5,
		overflow: "hidden",
		borderRadius: 10,
		backgroundColor: "rgba(83, 138, 228, 0.2)"
	},
	publishDate: {
		color: "#555",
		fontSize: 8,
		position: "absolute",
		right: 0,
		top: 15
	},
	title: {
		color: "#263343",
		fontSize: 14,
		padding: 10,
		marginBottom: 10,
		marginTop: 30
	},
	category: {
		color: "#263343"
	}
});

export { API_KEY, URL, ImagePlaceHolder, themeStyle, Categories };
