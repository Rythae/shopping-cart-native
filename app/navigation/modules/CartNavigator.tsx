import { StyleSheet } from "react-native";
import React from "react";
import type { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../../screens/Cart/Cart";

export type MainStackParamList = {
	CartScreen: undefined;
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList>;

const CartStack = createStackNavigator<MainStackParamList>();

const CartNavigator = () => {
    return (
      <CartStack.Navigator>
        <CartStack.Screen name="CartScreen" component={CartScreen} />
      </CartStack.Navigator>
    );
  };

export default CartNavigator;

const styles = StyleSheet.create({});
