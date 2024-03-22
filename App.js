import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Home from "./src/screens/Home/home";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
      <Home/>
      <StatusBar style="light"/>
    </NavigationContainer>
  );
}
