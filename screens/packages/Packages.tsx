import React from "react";
import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  FlatList,
  Platform,
} from "react-native";
import tailwind from "tailwind-rn";
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import Container from "../../components/shared/container.component";
import DashboardHeader from "../../components/dashboard/dashboard-header.component";
import Appbar from "../../components/shared/appbar-header.component";

const { width, height } = Dimensions.get("window");
const SPACING = 10;
const imageW = width * 0.65;
const imageH = imageW;
const CAROUSEL_HEIGHT = height * 0.65;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const Packages = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const data = [
    {
      id: 0,
      title: "Basic",
      image:
        "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",
      detail: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    },
    {
      id: 1,
      title: "Business",
      image:
        "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
      detail: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    },
    {
      id: 2,
      title: "Premium",
      image:
        "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
      detail: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    },
    {
      id: 3,
      title: "VIP",
      image:
        "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",
      detail: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    },
  ];

  const dataWithSpacer = [{ id: "leftSpacer" }, ...data, { id: "rightSpacer" }];
  return (
    <Container>
        <StatusBar />
        <Appbar navigation={navigation} screenTitle="Subscriptions"/>
        <DashboardHeader totalSavings="XAF 100000"/>
        <View style={tailwind("h-3/4 w-full flex-auto")}>
          <View
            style={tailwind(
              "w-full pt-2 px-2 flex-row flex-1 items-baseline justify-between"
            )}
          >
            <View style={tailwind("flex-1")}>
              <Text>Packages</Text>
            </View>
            <View
              style={tailwind("flex-1 p-1 flex-row items-baseline justify-end")}
            >
              <TouchableOpacity
                style={tailwind(
                  "border-solid px-2 mr-2 border-2 justify-center border-white "
                )}
              >
                <Text> popular </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tailwind(
                  "border-solid px-2 border-2 justify-center border-white "
                )}
              >
                <Text> popular</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              tailwind("absolute"),
              {
                height: CAROUSEL_HEIGHT,
                width: width,
                top: 50,
              },
            ]}
          >
            <Animated.FlatList
              data={dataWithSpacer}
              removeClippedSubviews={false}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              snapToInterval={ITEM_SIZE}
              snapToAlignment="start"
              contentContainerStyle={{}}
              decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
              bounces={false}
              scrollEventThrottle={16}
              renderToHardwareTextureAndroid
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item, index }) => {
                const inputRange = [
                  (index - 2) * ITEM_SIZE,
                  (index - 1) * ITEM_SIZE,
                  index * ITEM_SIZE,
                ];
                const translateY = scrollX.interpolate({
                  inputRange,
                  outputRange: [-50, 0, -50],
                });
                if (!item.title) {
                  return <View style={{ width: SPACER_ITEM_SIZE }}></View>;
                }
                return (
                  <View
                    style={{
                      width: ITEM_SIZE,
                      height: CAROUSEL_HEIGHT * 0.8,
                      shadowOpacity: 1,
                      shadowRadius: 1,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                    }}
                  >
                    <Animated.View
                      style={[
                        tailwind("bg-white justify-center items-center flex-1"),
                        {
                          marginHorizontal: SPACING,
                          alignItems: "center",
                          transform: [{ translateY }],
                        },
                      ]}
                    >
                      <Image
                        resizeMode="cover"
                        source={{ uri: item.image }}
                        style={[
                          tailwind(""),
                          {
                            width: "100%",
                            height: "50%",
                          },
                        ]}
                      />
                      <View style={tailwind("flex-1")}>
                        <Text style={tailwind("p-2 text-xl")}>
                          {item.title}
                        </Text>
                        <Text style={tailwind("pl-2")}>{item.detail}</Text>
                      </View>
                      <TouchableOpacity
                        style={tailwind(
                          "p-2 self-end flex-row items-center justify-between"
                        )}
                      >
                        <Text>Details</Text>
                        <AntDesign name="arrowright" size={24} color="black" />
                      </TouchableOpacity>
                    </Animated.View>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View style={tailwind("w-full bg-gray-300 p-6")}></View>
        <TouchableOpacity
          style={[
            tailwind(
              "p-4 bg-white rounded-full absolute items-center justify-center"
            ),
            {
              bottom: 23,
            },
          ]}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        </Container>
  );
};

export default Packages;
