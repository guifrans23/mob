import { View, Text, Image } from "react-native";
export default function (Discover) {
  return (
    <View>
      <View style={global.Discover}>
        <Text style={global.TituloDiscover}>Discover</Text>
        <Text style={global.txtmore}>More -&gt;</Text>
      </View>
      <View style={global.imgsporte}>
        <Image
          source={require("../../assets/jump.png")}
          style={global.imgdiscover}
        />
        <View style={global.caixalike}>
          <Image
            source={require("../../assets/like.png")}
            style={global.Imglike}
          />
          <Text style={global.txtlike}>like</Text>
        </View>
        <View style={global.caixauser}>
          <Image
            source={require("../../assets/user1.png")}
            style={global.imguser1}
          />
          <View style={global.caixanome}>
            <Text style={{ color: "white", fontsize: 20, paddingTop: 5 }}>
              Kota izumi
            </Text>
            <Text style={{ color: "white", fontsize: 10 }}>
              20 minutos Atras
            </Text>
          </View>
          <Text style={{ color: "white", fontsize: 14 }}>
            Que demais esses herois profisinais! Eu to ancioso para crecer e me
            tornar um deles
          </Text>
        </View>
      </View>
    </View>
  );
}
