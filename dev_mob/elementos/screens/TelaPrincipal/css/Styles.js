import { StyleSheet } from "react-native";

export const format = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    backgroundColor: "#b71c1c",
    flexDirection: "row",
    padding: 10,
  },
  imgheaderesq: {
    width: 24,
    height: 24,
    marginTop: 40,
  },
  imgheaderdir: {
    width: 24,
    height: 24,
    marginTop: 40,
  },
  txtheader: {
    flex: 3,
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  footer: {
    flex: 1,
    backgroundColor: "#d50000",
    justifyContent: "center",
    alignItems: "center",
  },
  txtfooter: {
    color: "#ffffff",
    fontSize: 20,
  },
  btn: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#dddddd",
    borderWidth: 1,
    margin: 5,
    height: "10%",
  },
  imgbtn: {
    width: 30,
    height: 30,
  },
  txtbtn: {
    fontSize: 15,
    textAlign: "center",
  },
});
