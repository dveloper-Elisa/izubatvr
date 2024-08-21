import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../pages/footer";

const RadioScreen = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    if (sound) {
      //   // If the sound is already playing, pause it
      if (isPlaying) {
        console.log("Pausing sound");
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        console.log("Playing sound");
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else {
      // Load and play sound for the first time
      console.log("Loading sound");
      const { sound } = await Audio.Sound.createAsync({
        uri: "https://stream.zeno.fm/1bw3cmzh2v8uv",
      });
      // setSound(sound);
      console.log("Playing sound");
      await sound.playAsync();
      // setIsPlaying(true);
    }
  }

  return (
    <View>
      <ImageBackground source={require("../assets/bg.jpg")}>
        <View style={tw`flex flex-col justify-between items-center mb-4`}>
          <Image
            source={require("../assets/logo.png")}
            style={tw`w-full h-60`}
            resizeMode="contain"
          />
          <Text style={tw`text-center text-white font-bold `}>
            Mu baturage rwagati
          </Text>
        </View>
      </ImageBackground>

      <View style={tw`flex flex-row justify-evenly`}>
        <Text
          style={tw`w-full bg-slate-100 border-b-2 mt-2 p-2 text-center font-bold uppercase`}
        >
          Radio News
        </Text>

        <Text
          style={tw`w-full bg-slate-100 border-b-2 mt-2 p-2 text-center font-bold uppercase`}
        >
          About
        </Text>
      </View>

      <View style={tw`mt-2`}>
        <TouchableOpacity
          onPress={playSound}
          style={tw`flex flex-row gap-2 bg-slate-300 items-center p-2 justify-between`}
        >
          <Icon name="microphone" size={20} color="brown" />
          <View style={tw`flex flex-row gap-5 items-center`}>
            <View style={tw`flex flex-col gap-2`}>
              <Text style={tw`text-blue-800 font-bold`}>Izuba Radio</Text>
              <Text style={tw`text-slate-500 font-bold`}>1hr</Text>
            </View>
          </View>

          <Icon name={isPlaying ? "pause" : "play"} size={20} color="brown" />
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default RadioScreen;
