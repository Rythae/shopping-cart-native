import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./app/navigation/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
        <RootNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
