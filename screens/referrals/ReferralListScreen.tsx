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
import ReferalItem, { ReferalItemProps } from "../../components/referals/referal-item.component";

const ReferralListScreen: React.FunctionComponent<ScreenProps<"Referals">> = ({
  navigation,
}) => {
  //Dummy data
  const myReferals: ReferalItemProps [] = [
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
    {amount: 2500, user:"John Doe", dateSince: "2 days ago"},
   
  ]

  return (
    <>
      <Container>
        <Appbar navigation={navigation} screenTitle="Referrals" />
        
        <ScrollView style={tailwind("w-full")}>
          <View style={tailwind("flex-row p-2 justify-between mx-3")}>
            <View style={tailwind("")}>
              <Text style={tailwind("text-left text-xs")}>Total Bonuses</Text>
              <Text style={tailwind("text-xl text-left text-red-600")}>
                20,000XAF
              </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Withdraw")}
                style={tailwind(
                  "bg-blue-700 items-center justify-center p-2"
                )}
              >
                <Text style={tailwind("text-white")}>Withdraw</Text>
              </TouchableOpacity>
            
          </View>
          {
            myReferals.map((item, key) => (
              <ReferalItem user={item.user}
                amount={item.amount}
                dateSince={item.dateSince}
                key={key}/>
            ))
          }
        </ScrollView>

        <TouchableOpacity
          style={[
            tailwind(
              "p-4 bg-white rounded-full absolute items-center justify-center"
            ),
            {
              bottom: 10,
              right: 10
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
