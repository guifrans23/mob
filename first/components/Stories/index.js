import { Image, ScrollView, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Stories() {
  return (
    <View>
      <Text style={global.titulostories}>Stories</Text>

      <ScrollView horizontal={true}>
        <View>
          <View>
            <Text style={global.tag}>Live</Text>
            <Text style={global.like}>20.5k</Text>
          </View>
          <Image
            source={require("../../assets/stories1.jpg")}
            style={global.imgstories}
          />
          <Text style={global.username}>
            Bakugou
            <Image
              source={require("../../assets/checklist.png")}
              style={global.imgcheck}
            />
          </Text>
        </View>

        <Image
          source={require("../../assets/stories2.jpg")}
          style={global.imgstories}
        />
        <Image
          source={require("../../assets/stories3.jpg")}
          style={global.imgstories}
        />
        <Image
          source={require("../../assets/stories4.jpg")}
          style={global.imgstories}
        />
      </ScrollView>
    </View>
  );
}
