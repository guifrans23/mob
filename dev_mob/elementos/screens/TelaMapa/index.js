import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import { mapa } from "./css/styles.js";
import { Marker } from "react-native-maps";

export default function TelaMapa() {
  return (
    <View style={mapa.container}>
      <MapView
        style={mapa.map}
        initialRegion={{
          latitude: -23.54072356595847,
          longitude: -46.57489320067748,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}
      >
        <Marker
          tiltle="Senac Tatuapé - Cel. Luís Americano"
          description="Curso tecnicoprofisonalizante"
          coordinate={{
            latitude: -23.54072356595847,
            longitude: -46.57489320067748,
          }}
        />
      </MapView>
    </View>
  );
}
