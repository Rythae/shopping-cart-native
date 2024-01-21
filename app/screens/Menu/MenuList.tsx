import React from "react";
import { Text, Image, ImageBackground, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";


interface MenuItem {
    id: number;
    productImage: any; 
    productName: string;
    productPrice: string;
  }

  interface MenuListProps {
    menu: MenuItem[]; 
  }
  
  
  const MenuList: React.FC<MenuListProps> = ({ menu }) => {
	
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={menu}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                        <>
                        <View style={styles.menuCards}> 
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 5 }}>
                            {/* <Image source={require("../../assets/heart.png")} /> */}
                            </View>
                            <ImageBackground
                                source={item.productImage}
                                resizeMode="cover"
                                style={styles.image}
                                >
                            </ImageBackground>
                            <View style={styles.productDetails}>
                            <Text style={styles.textSize}>{item.productName}</Text>
                            <Text style={styles.redText}>{item.productPrice}</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                source={require("../../assets/heroicons_shopping-bag.png")}
                                style={styles.cartIcon}
                                />
                            </View>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                        </>
                        )}
                        horizontal={false}
                    />
                </View>
            </ScrollView>
        </View>
   );
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 16,
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        width: "100%"
    },
    productDetails: {
        flexDirection: 'row',
        marginTop: 10
    },
    menuCards: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 228,
        marginBottom: 18
    },
    image: {
        width: 80,
        height: 80,
    },
    buttonContainer: {
        backgroundColor: "#DB3C25",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        borderRadius: 100,
        marginVertical: 15
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 8,
    },
    iconContainer: {
        borderRadius: 8,
        padding: 8,
    },
    cartIcon: {
        width: 24,
        height: 24,
        tintColor: "white", 
    },
    textSize: {
        fontSize: 14,
    },
    redText: {
        fontSize: 12,
        paddingLeft: 12,
        color: "#DB3C25"
    }
});

export default MenuList;
