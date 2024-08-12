import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import tw from "twrnc";
import imageFile from "../assets/video.mp4";

const Tvscreen = () => {
  return (
    <View>
      <View style={tw`h-70 w-full`}>
        <Video
          source={require("../assets/video.mp4")}
          useNativeControls
          style={tw`w-full h-60`}
          resizeMode="contain"
          shouldPlay={true}
          onError={(error) => {
            console.log("Error playing video:", error);
          }}
        />
      </View>

      <Text
        style={tw`w-full bg-slate-100 border-b-2 mt-2 p-2 text-center font-bold`}
      >
        TV News
      </Text>
      <Text style={tw`text-center`}>Mu baturage rwagati</Text>
    </View>
  );
};

export default Tvscreen;
