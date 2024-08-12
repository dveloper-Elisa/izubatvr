import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { A } from "@expo/html-elements";
import tw from "twrnc";

const Sidebar = ({ closeSidebar }) => {
  const navigation = useNavigation();
  const navigateTv = () => {
    navigation.navigate("TV");
  };
  const navigateRadio = () => {
    navigation.navigate("Radio");
  };
  const navigateNews = () => {
    navigation.navigate("News");
  };
  const navigateEducation = () => {
    navigation.navigate("Education");
  };
  const navigateSports = () => {
    navigation.navigate("Sports");
  };
  return (
    <ScrollView
      contentContainerStyle={tw`relative h-full flex flex-col w-full bg-black p-4`}
    >
      <ImageBackground source={require("../assets/bg.jpg")}>
        <View style={tw`flex flex-col justify-between items-center mb-4`}>
          <Image
            source={require("../assets/logo.png")}
            style={tw`w-full h-30`}
          />
          {/* <TouchableOpacity onPress={closeSidebar}>
          <Text style={tw`text-white text-xl`}>×</Text>
        </TouchableOpacity> */}
          <Text style={tw`text-white`}>Mu baturage Rwagati</Text>
        </View>
      </ImageBackground>

      <View style={tw`flex flex-col gap-4`}>
        <View style={tw`border-b border-gray-600 pb-4`}>
          <Text
            onPress={navigateTv}
            style={tw`text-white mb-3 border-b-1 font-bold`}
          >
            Watch Izuba TV
          </Text>
          <Text
            style={tw`text-white mb-3 border-b-1 font-bold`}
            onPress={navigateRadio}
          >
            Listen Izuba Radio
          </Text>
          <Text
            style={tw`text-white mb-3 border-b-1 font-bold`}
            onPress={navigateNews}
          >
            News
          </Text>
          <Text
            style={tw`text-white mb-3 border-b-1 font-bold`}
            onPress={navigateEducation}
          >
            Education
          </Text>
          <Text
            style={tw`text-white mb-3 border-b-1 font-bold`}
            onPress={navigateSports}
          >
            Sports
          </Text>
        </View>
        <View>
          <Text style={tw`text-blue-800 mb-3 border-b-1 font-bold`}>
            Quick links
          </Text>
          <A
            href="https://www.izubaradiotv.rw/about-us-168"
            style={tw`text-white mb-3 border-b-1 font-bold`}
          >
            About us
          </A>
          <A
            href="https://izubaradiotv.rw/"
            style={tw`text-white mb-3 border-b-1 font-bold`}
          >
            Our Website
          </A>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sidebar;
