import { StyleSheet } from "react-native";
import React from "react";
import type { RouteProp } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Menu from "../../screens/Menu/Menu";

export type MainStackParamList = {
	Menu: undefined;
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList>;

const MenuStack = createStackNavigator<MainStackParamList>();

const MenuNavigator = () => {
    return (
      <MenuStack.Navigator>
        <MenuStack.Screen name="Menu" component={Menu} />
      </MenuStack.Navigator>
    );
  };

export default MenuNavigator;

const styles = StyleSheet.create({});
