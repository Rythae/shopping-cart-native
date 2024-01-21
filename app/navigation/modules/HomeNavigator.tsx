import { StyleSheet } from "react-native";
import React from "react";
import type { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/Home/Home";

export type MainStackParamList = {
	HomeScreen: undefined;
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList>;

const HomeStack = createStackNavigator<MainStackParamList>();

const HomeNavigator = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      </HomeStack.Navigator>
    );
  };

export default HomeNavigator;

const styles = StyleSheet.create({});
