import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import MenuList from "./MenuList";

const Menu = () => {

    const menuItems = [
		{
			id: 1,
            productImage: require("../../assets/menuImage.png"),
            productName: "African Doughnut Mix<",
            productPrice: "£30",
		},
        {
			id: 2,
            productImage: require("../../assets/menuImage.png"),
            productName: "Efo Riro<",
            productPrice: "£30",
		},
        {
			id: 3,
            productImage: require("../../assets/menuImage.png"),
            productName: "Asaro (Yam Porridge)<",
            productPrice: "£30",
		},
        {
			id: 4,
            productImage: require("../../assets/menuImage.png"),
            productName: "Chicken Stew<",
            productPrice: "£30",
		},
        {
			id: 6,
            productImage: require("../../assets/menuImage.png"),
            productName: "Asaro (Yam Porridge)<",
            productPrice: "£30",
		},
        {
			id: 6,
            productImage: require("../../assets/menuImage.png"),
            productName: "Asaro (Yam Porridge)<",
            productPrice: "£30",
		},
    ]
	
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather name="search" size={24} color="#858585" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#858585"
                />
            </View>
              <MenuList menu={menuItems} />
        </View>
     );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
      searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 8,
        paddingHorizontal: 68,
      },
      searchIcon: {
        marginRight: 8,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#858585",
      },
});

export default Menu;
