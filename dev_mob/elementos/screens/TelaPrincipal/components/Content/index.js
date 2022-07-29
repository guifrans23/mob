import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { format } from "../../css/Styles.js";

export default function Content(props) {
  return (
    <View style={{ flex: 8 }}>
      <View style={format.content}>
        <TouchableOpacity
          onPress={() => {
            props.acao.navigate("TelaCamera");
          }}
          style={format.btn}
        >
          <Image
            source={require("../../../../assets/camera.png")}
            style={format.imgbtn}
          />
          <Text style={format.txtbtn}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.acao.navigate("TelaGaleria")}
          style={format.btn}
        >
          <Image
            source={require("../../../../assets/gallery.png")}
            style={format.imgbtn}
          />
          <Text style={format.txtbtn}>galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.acao.navigate(barcode)}
          style={format.btn}
        >
          <Image
            source={require("../../../../assets/barcode.png")}
            style={format.imgbtn}
          />
          <Text style={format.txtbtn}>barcode</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.acao.navigate("TelaMapa")}
          style={format.btn}
        >
          <Image
            source={require("../../../../assets/map.png")}
            style={format.imgbtn}
          />
          <Text style={format.txtbtn}>Mapa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
