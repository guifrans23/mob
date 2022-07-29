import { Image, View, Text, TouchableOpacity } from "react-native";
import { format } from "../../css/Styles.js";

export default function Header() {
  return (
    <View style={format.header}>
      <TouchableOpacity onPress={() => alert("Você clicou no logo")}>
        <Image
          source={require("../../../../assets/banco.png")}
          style={format.imgheaderesq}
        />
      </TouchableOpacity>

      <Text style={format.txtheader}>Elementos</Text>

      <TouchableOpacity onPress={() => alert("Nova mensagem")}>
        <Image
          source={require("../../../../assets/interrogacao.png")}
          style={format.imgheaderdir}
        />
      </TouchableOpacity>
    </View>
  );
}
