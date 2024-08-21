import { View, Image, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import News from "../component/news.js";
import tw from "twrnc";
import Footer from "../pages/footer.js";

const Education = () => {
  const imageSource = [
    require("../assets/bnews.jpg"),
    require("../assets/radio.jpg"),
    require("../assets/rt.jpg"),
    require("../assets/tv.jpg"),
    require("../assets/world.jpg"),
    require("../assets/live.jpg"),
    require("../assets/rt.jpg"),
    require("../assets/bnews.jpg"),
    require("../assets/radio.jpg"),
  ];

  const titles = [
    "Abanyeshuri bo muri Kaminuza bahawe Mudasobwa",
    "Abarezi bavuga ko Ireme ry'uburezi Ryamaze gupfa mu mashuri",
    "Ngoma Abaturage Bahawe Gase y'ibiri 12 namashyiga",
    "Abanyeshuri baremze ko mudasobwa bahawe bazazibyaza umusaruri",
    "Tyaza limited yagiranye amasezerano na Abato Organization",
    "Nyuma y'amatora abaturage bishimiye ibyavuyemo",
    "Nyuma y'uko izuba ribaye ryishi abaturage bahendwa n'inyama",
    "Tyaza limited yatangiye ubushoramari muri Radio and TV izuba",
    "Nyuma y'amatora abaturage bishimiye ibyavuyemo",
  ];

  return (
    <View>
      <View style={tw`mb-40`}>
        <Text style={tw`w-full bg-slate-100 border-b-2 mt-2 p-2 font-bold`}>
          {" "}
          Education
        </Text>
        <ScrollView>
          {titles.map((title, index) => {
            return (
              <View key={index}>
                <News src={imageSource[index]} title={title} />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default Education;
