import { Image, Text } from "react-native";
import { View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Header() {
  return (
    <View style={global.header}>
      <Image
        source={require("../../assets/users.jpg")}
        style={global.userimg}
      />
      <View>
        <Text style={global.nomeheader}>uzuko midoria</Text>
        <Text style={global.contaheader}>@deku-kun</Text>
      </View>
      <Image
        source={require("../../assets/pesquisar.png")}
        style={global.pesquisarimg}
      />
    </View>
  );
}
