import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RecoilRoot } from "recoil";
import NavContainer from "./components/NavContainer";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <RecoilRoot>
      <NavContainer />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
