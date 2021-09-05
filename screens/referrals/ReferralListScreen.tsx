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
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import Container from "../../components/shared/container.component";
import DashboardHeader from "../../components/dashboard/dashboard-header.component";
import Appbar from "../../components/shared/appbar-header.component";
import { ScreenProps } from "../../App";



const ReferralListScreen: React.FunctionComponent<ScreenProps<'Referals'>> = ({ navigation }) => {

  //Dummy data
  const data: {
    id: string,
    name: string,
    time: string
    amount: string
  }[] = [
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
      <Container>
        <Appbar navigation={navigation} screenTitle="Referrals" />
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
                onPress={() => navigation.navigate('Withdraw')}
                style={tailwind(
                  "bg-blue-700 items-center justify-center self-end p-3 m-3"
                )}
              >
                <Text style={tailwind("text-white")}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tailwind("")}>
            <FlatList
              data={data}
              scrollEventThrottle={16}
              scrollEnabled={true}
              removeClippedSubviews={false}
              contentContainerStyle={{ width: '100%', margin: 2 }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={tailwind("flex-1 flex-row justify-between bg-gray-100 m-3 w-11/12 h-20")}>
                    <View style={tailwind('flex-row items-center justify-center')}>
                      <Image
                        style={tailwind("w-12 h-12 pl-2 ml-2 rounded-full ")}
                        resizeMode="cover"
                        source={require("./../../assets/images/icon-wallet.png")}
                      />
                      <View style={tailwind('ml-2')}>
                        <Text style={tailwind('text-xl')}>{item.name}</Text>
                        <Text>{item.time}</Text>
                      </View>
                    </View>
                    <View style={tailwind('self-end p-2')}>
                      <Text>+{item.amount}</Text>

                    </View>

                  </View>
                );
              }}
            />
          </View>
        </View>

        
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
    </>
  );
};

export default ReferralListScreen;
