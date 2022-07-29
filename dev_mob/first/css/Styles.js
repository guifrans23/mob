import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090909",
  },

  header: {
    padding: 10,
    height: 120,
    flexDirection: "row",
    paddingTop: 60,
    paddingLeft: 20,
  },
  txtheader: {
    color: "#FFFFFF",
    fontSize: 50,
    paddingTop: 20,
  },
  userimg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  nomeheader: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  contaheader: {
    fontSize: 12,
    color: "#dddddd",
  },
  pesquisarimg: {
    width: 50,
    height: 50,
    position: "absolute",
    marginTop: 50,
    right: 10,
  },
  titulostories: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },

  imgstories: {
    width: 200,
    height: 250,
    resizeMode: "cover",
    margin: 10,
    borderRadius: 20,
  },
  tag: {
    padding: 10,
    borderWidth: 1,
    color: "white",
    borderRadius: 15,
    textAlign: "center",
    backgroundColor: "#090909",
  },
  premiere: {
    padding: 10,
    color: "white",
    borderRadius: 15,
    textAlign: "center",
    backgroundColor: "#ff0000",
  },
  like: {
    color: "white",
    textAlign: "center",
    padding: 10,
    textShadowColor: "#090909",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 2,
  },
  atividades: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 1000,
    top: 20,
    left: 20,
  },
  username: {
    color: "white",
    padding: 10,
  },
  imgcheck: {
    width: 20,
    height: 20,
    resizeMode: "cover",
    marginLeft: 20,
  },
  trendingarea: {
    backgroundColor: "#090909",
    height: 100,
    flexDirection: "row",
  },
  txtmore: {
    color: "fece00",
    position: "absolute",
    right: 0,
    top: 20,
  },
  imgsporte: {
    backgroundColor: "#333333",
    padding: 30,
    width: "95%",
    borderRadius: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },
  imgtrending: {
    width: "100%",
    height: 100,
    borderRadius: 40,
  },
  titulotrending: {
    color: "white",
    fontSize: 30,
  },
  caixalike: {
    backgroundColor: "fece00",
    padding: 10,
    width: 80,
    flexDirection: "row",
    position: "absolute",
    top: 100,
    right: 30,
    borderbottomradius: 30,
    bordertopleftradius: 10,
  },
  caixauser: {
    flexDirection: "row",
  },
  imguser1: {
    width: 40,
    height: 50,
    margin: 10,
    borderRadius: 10,
  },
});
