import React from "react";

import { View, Text, Image } from "react-native";
import tw from "twrnc";

const News = ({ src, title }) => {
  return (
    <View style={tw`flex flex-row border-b-2 border-[#fff] mt-1 gap-2`}>
      <View style={tw`w-fit bg-gray-300`}>
        <Image source={src} style={tw`w-48 h-20`} />
      </View>
      <View>
        <Text style={tw`text-blue-800 flex flex-wrap w-48`}>{title}</Text>
        <Text style={tw`text-2`}>3hrs</Text>
      </View>
    </View>
  );
};

export default News;
