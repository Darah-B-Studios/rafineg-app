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
import { FlatList } from "react-native-gesture-handler";

const ReferralListScreen = () => {
  //Dummy data

  const data = [
    { id: "G01", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G02", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G03", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G04", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G05", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G06", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G07", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G08", name: "John Doe", time: "2 days ago", amount: "2500" },
    { id: "G09", name: "John Doe", time: "2 days ago", amount: "2500" },
  ];
  return (
    <>
      <SafeAreaView style={[tailwind("w-full h-full flex-1")]}>
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
              <View
                style={tailwind("flex-col items-center justify-center pl-4")}
              >
                <Text style={tailwind("text-white")}>Your referrals</Text>
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
            <View style={tailwind("flex-row justify-between pt-4 px-3")}>
              <View style={tailwind("flex-wrap")}>
                <Text style={tailwind("text-left text-xs")}>Total Bonuses</Text>
                <Text style={tailwind("text-xl text-left text-red-600")}>
                  20,000XAF
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => console.log("withdraw")}
                  style={tailwind(
                    "bg-blue-700 items-center justify-center self-end px-3 m-3 h-8 w-28"
                  )}
                >
                  <Text style={tailwind("text-white")}>Withdraw</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <FlatList
                data={data}
                scrollEventThrottle={16}
                scrollEnabled={true}
                removeClippedSubviews={false}
                contentContainerStyle={{width:'100%', margin:2}}
                keyExtractor={(item) => item.id}
                renderItem={(item) => {
                  return (
                    <View style={tailwind("flex-1 flex-row justify-between bg-gray-100 m-3 w-11/12 h-20")}>
                      <View style={tailwind('flex-row items-center justify-center')}>
                        <Image
                          style={tailwind("w-12 h-12 pl-2 ml-2 rounded-full ")}
                          resizeMode="cover"
                          source={require("./../assets/images/icon-wallet.png")}
                        />
                        <View style={tailwind('ml-2')}>
                          <Text style={tailwind('text-xl')}>{item.name}</Text>
                          <Text>{item.time}</Text>
                        </View>
                      </View>
                      <View style={tailwind('self-end p-2')}>
                        <Text>{item.amount}</Text>

                      </View>

                    </View>
                  );
                }}
              />
            </View>
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

export default ReferralListScreen;
