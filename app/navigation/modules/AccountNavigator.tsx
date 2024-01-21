import { StyleSheet } from "react-native";
import React from "react";
import type { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../screens/Account/Account";

export type MainStackParamList = {
	AccountScreen: undefined;
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList>;

const AccountStack = createStackNavigator<MainStackParamList>();

const AccountNavigator = () => {
    return (
      <AccountStack.Navigator>
        <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      </AccountStack.Navigator>
    );
  };

export default AccountNavigator;

const styles = StyleSheet.create({});
