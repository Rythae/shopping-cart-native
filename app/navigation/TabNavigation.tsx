import React from "react";
import { Image, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuNavigator from "./modules/MenuNavigator";
import HomeNavigator from "./modules/HomeNavigator";
import CartNavigator from "./modules/CartNavigator";
import AccountNavigator from "./modules/AccountNavigator";

const TabNavigation = () => {
	const Tab = createBottomTabNavigator();

	return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            borderWidth: 0,
            marginVertical: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;
  
            if (route.name === "Home") {
              iconPath = require("../assets/heroicons_home.png");
            } else if (route.name === "Menu") {
              iconPath = require("../assets/menu.png");
            } else if (route.name === "Cart") {
                iconPath = require("../assets/heroicons_shopping-bag.png");
            }
            else if (route.name === "Account") {
            iconPath = require("../assets/account.png");
            }
  
            return <Image source={iconPath} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
        })}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Menu" component={MenuNavigator} />
        <Tab.Screen name="Cart" component={CartNavigator} />
        <Tab.Screen name="Account" component={AccountNavigator} />
      </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
	
})

export default TabNavigation;
