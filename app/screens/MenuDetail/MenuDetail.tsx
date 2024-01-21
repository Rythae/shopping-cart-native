import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/stack";


const MenuDetailScreen = () => {
    const navigation = useNavigation<any>();
	return (
        <View style={styles.container}>
            <Text>MenuDetail Screen</Text>
        </View>
	);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
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
