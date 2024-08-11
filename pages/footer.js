import React from "react";

import { View, Text } from "react-native";
import tw from "twrnc";

const Footer = () => {
  return (
    <View style={tw`bg-black `}>
      <Text style={tw`text-white`}>All reserved to Izuba Radio&TV</Text>
    </View>
  );
};

export default Footer;
