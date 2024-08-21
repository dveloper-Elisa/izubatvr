import { View, Image, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import News from "../component/news.js";
import tw from "twrnc";
import Footer from "../pages/footer.js";

const Sports = () => {
  const imageSource = [
    require("../assets/sports/2.jpeg"),
    require("../assets/sports/3.jpeg"),
    require("../assets/sports/new play.jpeg"),
    require("../assets/sports/sport1.webp"),
    require("../assets/sports/swim.jpeg"),
    require("../assets/sports/th (1).jpeg"),
    require("../assets/sports/th.jpeg"),
    require("../assets/bnews.jpg"),
    require("../assets/radio.jpg"),
  ];

  const titles = [
    "New Tenis game alived here in Rwanda since 2016",
    "Rayon Sport ifite umukino uzayihuza na APR FC (Football Club)",
    "Ikirori cyo gutaha ikibuga gishya cya Stadium Amahoro",
    "Enjoying football game now is on top and creating strong bond",
    "Swimming games will start soon as possible",
    "Man_city and Man_U will have martche together",
    "Nyuma y'uko izuba ribaye ryishi abaturage bahendwa n'inyama",
    "Tyaza limited yatangiye ubushoramari muri Radio and TV izuba",
    "Nyuma y'amatora abaturage bishimiye ibyavuyemo",
  ];

  return (
    <View>
      <View style={tw`mb-20`}>
        <Text style={tw`w-full bg-slate-100 border-b-2 mt-2 p-2 font-bold`}>
          {" "}
          Sports
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

export default Sports;
