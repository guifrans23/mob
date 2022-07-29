import { View } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { format } from "./css/Styles.js";
export default function TelaPrincipal({ navigation }) {
  return (
    <View style={format.container}>
      <Header />
      <Content acao={navigation} />
      <Footer />
    </View>
  );
}
