import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const relativeWidth = (num: any) => (screenWidth * num) / 100;
const relativeHeight = (num: any) => (screenWidth * num) / 100;

export { relativeWidth, relativeHeight, screenWidth, screenHeight };
