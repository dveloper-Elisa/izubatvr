import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import tw from "twrnc";

const Sidebar = ({ closeSidebar }) => {
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
          <Text style={tw`text-white mb-3 border-b-1 font-bold`}>
            Watch Izuba TV
          </Text>
          <Text style={tw`text-white mb-3 border-b-1 font-bold`}>
            Listen Izuba Radio
          </Text>
          <Text style={tw`text-white mb-3 border-b-1 font-bold`}>News</Text>
          <Text style={tw`text-white mb-3 border-b-1 font-bold`}>
            Education
          </Text>
          <Text style={tw`text-white mb-3 border-b-1 font-bold`}>Sports</Text>
        </View>
        <View>
          <Text style={tw`text-blue-800 mb-3 border-b-1 font-bold`}>
            Quick links
          </Text>
          <Text style={tw`text-white mb-3 border-b-1 font-bold`}>About us</Text>
          <Text style={tw`text-white mb-3 border-b-1 font-bold`}>
            Our Website
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sidebar;
