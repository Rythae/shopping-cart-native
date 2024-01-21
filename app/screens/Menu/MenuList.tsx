import React from "react";
import { Text, Image, Pressable,ImageBackground, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


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
	const navigation = useNavigation<any>();

    const handleCardPress = () => {
        navigation.navigate("MenuDetailScreen");
      };

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={menu}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                        <>
                        <TouchableOpacity style={styles.menuCards} onPress={handleCardPress}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 5, width: 150 }}>
                            <Image source={require("../../assets/heart.png")} />
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
                        </TouchableOpacity>
                        </>
                        )}
                        horizontal={false}
                        contentContainerStyle={styles.listContainer}
                    />
                </View>
            </ScrollView>
        </View>
   );
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    productDetails: {
        flexDirection: 'row',
        marginTop: 10
    },
    menuCards: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: 190,
        height: 180,
        marginBottom: 18
    },
    image: {
        width: 50,
        height: 50,
    },
    buttonContainer: {
        backgroundColor: "#DB3C25",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 130,
        borderRadius: 100,
        marginVertical: 15
    },
    buttonText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        marginRight: 8,
    },
    iconContainer: {
        borderRadius: 8,
        padding: 8,
    },
    cartIcon: {
        width: 18,
        height: 18,
        tintColor: "white", 
    },
    textSize: {
        fontSize: 12,
    },
    redText: {
        fontSize: 10,
        paddingLeft: 15,
        color: "#DB3C25",
        fontWeight: "500"
    },
    listContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        alignItems: "center",
        width: "100%",
        paddingVertical: 25
    }
});

export default MenuList;
