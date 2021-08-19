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
} from "react-native";
import tailwind from "tailwind-rn";
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const Dashboard = () => {
  return (
    <>
      <SafeAreaView
        style={[
          tailwind("w-full h-full flex-1"),
        ]}
      >
        <ImageBackground
          resizeMode="cover"
          style={tailwind("flex-1 h-full w-full items-center")}
          source={require("./../assets/images/splash-background.png")}
        >
          <StatusBar barStyle="light-content" backgroundColor="blue" />
          <View style={tailwind("h-1/6 w-full bg-blue-700 flex-auto")}>
            <View
              style={tailwind(
                "flex-row pt-6 flex-1 items-baseline justify-between"
              )}
            >
              <View style={tailwind("pl-3")}>
                <Ionicons name="ios-arrow-back-sharp" size={16} color="white" />
              </View>
              <View style={tailwind("pr-3")}>
                <SimpleLineIcons name="menu" size={16} color="white" />
              </View>
            </View>
            <View style={tailwind("flex-row justify-between pb-1")}>
              <View style={tailwind("flex-col pl-4")}>
                <Image source={require("./../assets/images/icon-wallet.png")} />
                <Text style={tailwind("text-white")}>Total Savings</Text>
                <Text style={tailwind("text-white text-base")}>XAF 100000</Text>
              </View>
              <View>
                <View style={tailwind("pr-3 pt-3")}>
                  <Image
                    style={tailwind("w-10 h-10 rounded-full ")}
                    resizeMode="cover"
                    source={require("./../assets/images/icon-wallet.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={tailwind("h-3/4 w-full")}>
            <ScrollView>
              <View
                style={tailwind(
                  "w-full pt-2 px-2 flex-row flex-1 items-baseline justify-between"
                )}
              >
                <View style={tailwind("flex-1")}>
                  <Text>Saving Analysis</Text>
                </View>
                <View
                  style={tailwind(
                    "flex-1 p-1 flex-row items-baseline justify-between"
                  )}
                >
                  <TouchableOpacity
                    style={tailwind(
                      "border-solid border-2 justify-center border-white "
                    )}
                  >
                    <Text> Yearly </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tailwind(
                      "border-solid border-2 justify-center border-white "
                    )}
                  >
                    <Text> Monthly</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tailwind(
                      "border-solid border-2 justify-center border-white "
                    )}
                  >
                    <Text> Weekly</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tailwind("p-4 self-center h-52 bg-white w-11/12")}>
                <Text style={tailwind("self-center text-xl")}>Chart Area</Text>
              </View>
              <View
                style={tailwind("p-4 m-4 self-center h-52 bg-white w-11/12")}
              >
                <Text style={tailwind("self-center text-xl")}>
                  Recent Transactions Area
                </Text>
              </View>
              <View
                style={tailwind(
                  "p-4 m-4 self-center h-52 bg-white w-11/12 opacity-80"
                )}
              >
                <Text style={tailwind("self-center text-xl opacity-100")}>
                  Referrals Area
                </Text>
              </View>
            </ScrollView>
          </View>

          <View style={tailwind("w-full bg-gray-300 h-12")}></View>
          <TouchableOpacity
            style={[
              tailwind(
                "w-12 bg-white h-12 rounded-full absolute items-center justify-center"
              ),
              {
                bottom: 23,
              },
            ]}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;
