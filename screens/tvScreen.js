import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import tw from "twrnc";
import Footer from "../pages/footer";

const Tvscreen = () => {
  return (
    <View>
      <View style={tw`h-70 w-full`}>
        <Video
          source={{
            uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          style={tw`h-70 w-full`}
          controls={true}
          resizeMode="cover"
          hideShutterView={true}
          useNativeControls
          isLooping
          shouldPlay
        />
      </View>

      <Text
        style={tw`w-full bg-slate-100 border-b-2 mt-2 p-2 text-center font-bold`}
      >
        TV News
      </Text>
      <Text style={tw`text-center`}>Mu baturage rwagati</Text>
      <Footer />
    </View>
  );
};

export default Tvscreen;
