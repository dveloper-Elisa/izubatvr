import React from "react";

import { View, Text } from "react-native";
import tw from "twrnc";

const Footer = () => {
  return (
    <View style={tw`bg-black flex absolute mt-[40.5rem] w-full items-center`}>
      <Text style={tw`text-white`}>All reserved to Izuba Radio&TV</Text>
    </View>
  );
};

export default Footer;
