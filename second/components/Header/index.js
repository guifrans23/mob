import { Image, Text } from "react-native";
import { View } from "react-native";
import { global } from "../../css/styles.js";

export default function Header() {
  return (
    <View style={global.caixaheader}>
      <View>
        <Text>Pagbank</Text>
        <Text>Saldo Disponível</Text>
        <Text>R$ 2.500,00</Text>
        <Text>Bloqueado</Text>
        <Text>20,65</Text>
        <Text>A Receber</Text>
        <Text>R$ 1.200,34</Text>
      </View>
      <View>
        <Text>CashBack Últimos 30 dias R$ 52,29</Text>
      </View>
    </View>
  );
}
