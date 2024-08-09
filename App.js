import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home.js";
import Footer from "./pages/footer.js";

export default function App() {
  return (
    <View style={""}>
      <Home />
      <Footer />
    </View>
  );
}
