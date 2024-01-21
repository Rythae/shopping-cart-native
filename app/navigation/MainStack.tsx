import { StyleSheet } from "react-native";
import React from "react";
import type { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";

export type MainStackParamList = {
	Home: undefined;
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList>;

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen name="Home" component={TabNavigation}   options={{ headerShown: false }} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default MainStack;

const styles = StyleSheet.create({});
