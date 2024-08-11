import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Video, Audio } from "expo-av";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";

const RadioScreen = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Hello.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  return (
    <View>
      <ImageBackground source={require("../assets/bg.jpg")}>
        <View style={tw`flex flex-col justify-between items-center mb-4`}>
          <Image
            source={require("../assets/logo.png")}
            useNativeControls
            style={tw`w-full h-60`}
            resizeMode="contain"
            shouldPlay
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
          <View style={tw`flex flex-row gap-5 items-center`}>
            <Icon name="microphone" size={30} color="brown" />
            <View style={tw`flex flex-col gap-2`}>
              <Text style={tw`text-blue-800 font-bold`}>
                Ntabwoba bwibihe humura
              </Text>
              <Text style={tw`text-slate-500 font-bold`}>1hr</Text>
            </View>
          </View>

          <Icon name="play" size={20} color="brown" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RadioScreen;
