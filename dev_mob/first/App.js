import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { global } from "./css/Styles.js";
import Header from "./components/header";
import Stories from "./components/Stories/index.js";
import Trending from "./components/Trending/index.js";

export default function App() {
  return (
    <View style={global.container}>
      <ScrollView horizontal={false}>
        <Header />
        <Stories />
        <Trending />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
