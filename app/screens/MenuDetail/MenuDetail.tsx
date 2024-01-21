import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/stack";


const MenuDetailScreen = () => {
    const navigation = useNavigation<any>();
	return (
        <View style={styles.container}>
           <View style={{ backgroundColor: "#ffffff"}}>
            <ImageBackground
                source={require("../../assets/menuImage.png")}
                resizeMode="cover"
                style={styles.imageBackground}
                >
            </ImageBackground>
           </View>
        </View>
	);
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        backgroundColor: "fff"
      },
      imageBackground: {
        width: 200,
        height: 200
      }
});

MenuDetailScreen.navigationOptions = ({ navigation }) => ({
    headerLeft: () => (
        <HeaderBackButton
          onPress={() => navigation.goBack()}
          tintColor="black"
          pressColorAndroid="transparent"
        />
      ),
      headerTitle: "",
  });

export default MenuDetailScreen;
