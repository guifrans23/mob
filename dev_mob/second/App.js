import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { global } from "./css/styles.js";
import Header from "./components/header";

export default function App() {
  return (
    <View style={global.container}>
      <ScrollView horizontal={false}>
        <Header />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
