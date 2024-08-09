import { View, Text, Image } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";
import Sidebar from "../component/sidebar.js";

const Header = () => {
  const [viewSidebar, setViewSidebar] = useState(false);

  return (
    <View
      style={tw`flex flex-row justify-between items-center px-2 mt-5 bg-black`}
    >
      {viewSidebar && <Sidebar closeSidebar={() => setViewSidebar(false)} />}
      <View style={tw`w-fit h-fit flex flex-row items-center py-2`}>
        <Image
          source={require("../assets/logo.png")}
          style={tw`w-30 h-10 mt-1`}
        />
        <Text style={tw`text-white uppercase text-[10px] font-bold`}>
          Mubaturage <Text style={tw`text-red-800`}>rwagati</Text>
        </Text>
      </View>

      <View>
        <Icon
          name="bars"
          size={30}
          color="#fff"
          onPress={() => {
            setViewSidebar(!viewSidebar);
          }}
        />
      </View>
    </View>
  );
};

// export default Header;
