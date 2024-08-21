import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/home.js";
import Footer from "./pages/footer.js";
import Tvscreen from "./screens/tvScreen.js";
import RadioScreen from "./screens/radioScreen.js";
import NewsPage from "./screens/news.js";
import Education from "./screens/education.js";
import Sports from "./screens/sports.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenListeners={false}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TV" component={Tvscreen} />
        <Stack.Screen name="Radio" component={RadioScreen} />
        <Stack.Screen name="News" component={NewsPage} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Sports" component={Sports} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
