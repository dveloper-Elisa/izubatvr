import {
  View,
  Image,
  Text,
  ScrollView,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome.js";
import News from "../component/news.js";
import Sidebar from "../component/sidebar.js";
import Footer from "./footer.js";
import tw from "twrnc";

const Home = () => {
  const [viewSidebar, setViewSidebar] = useState(false);
  const imageSource = [
    require("../assets/bnews.jpg"),
    require("../assets/sports/2.jpeg"),
    require("../assets/rt.jpg"),
    require("../assets/sports/3.jpeg"),
    require("../assets/world.jpg"),
    require("../assets/sports/new play.jpeg"),
    require("../assets/rt.jpg"),
    require("../assets/bnews.jpg"),
    require("../assets/radio.jpg"),
  ];

  const titles = [
    "Nyagatare Abahinzi bari kuhira imyaka kubera izuba ryishi",
    "Bugesera Abaturage begerejwe amazi meza",
    "Ngoma Abaturage Bahawe Gase y'ibiri 12 namashyiga",
    "Nyuma y'amatora abaturage bishimiye ibyavuyemo",
    "Tyaza limited yatangiye kubona abaterankunda",
    "Nyuma y'amatora abaturage bishimiye ibyavuyemo",
    "Nyuma y'uko izuba ribaye ryishi abaturage bahendwa n'inyama",
    "Tyaza limited yatangiye ubushoramari muri Radio and TV izuba",
    "Nyuma y'amatora abaturage bishimiye ibyavuyemo",
  ];

  const { width, height } = Dimensions.get("window");
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animations = imageSource.map((_, index) =>
      Animated.sequence([
        Animated.delay(index * 2000),
        Animated.timing(animatedValue, {
          toValue: -index * width,
          duration: 1000,
          easing: Easing.circle,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.loop(Animated.sequence(animations)).start();
  }, [animatedValue]);

  return (
    <View style={tw`flex flex-col`}>
      <View
        style={tw`flex flex-row justify-between items-center px-2 bg-black`}
      >
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
          {viewSidebar ? (
            <Icon
              name="close"
              size={30}
              color="#fff"
              onPress={() => {
                setViewSidebar(!viewSidebar);
              }}
            />
          ) : (
            <Icon
              name="bars"
              size={30}
              color="#fff"
              onPress={() => {
                setViewSidebar(!viewSidebar);
              }}
            />
          )}
        </View>
      </View>

      {viewSidebar && <Sidebar closeSidebar={() => setViewSidebar(false)} />}
      <ScrollView contentContainerStyle={tw``}>
        <View
          id="animation"
          style={tw`flex flex-col gap-1 w-full border justify-center overflow-hidden`}
        >
          <Animated.View
            style={[
              tw`flex flex-row`,
              { transform: [{ translateX: animatedValue }] },
            ]}
          >
            {imageSource.map((src, index) => (
              <Image
                key={index}
                source={src}
                style={{ width, height: height / 4 }}
              />
            ))}
          </Animated.View>
          <View
            style={tw`flex flex-col border bg-black rounded-md items-center justify-center`}
          >
            <Image
              source={require("../assets/radio1.jpg")}
              style={{ width, height: height / 8 }}
            />
            <Text style={tw`text-white`}>Listen Radio Izuba</Text>
          </View>
        </View>
        <View style={tw`mb-40`}>
          <Text style={tw`w-full bg-slate-100 border-b-2 mt-2 p-2 font-bold`}>
            Latest News
          </Text>
          {titles.map((title, index) => (
            <View key={index}>
              <News src={imageSource[index]} title={title} />
            </View>
          ))}
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Home;
