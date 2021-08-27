import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import Container from "../../components/shared/container.component";
import DashboardHeader from "../../components/dashboard/dashboard-header.component";
import AppbarHeader from "../../components/shared/appbar-header.component";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Appbar from "../../components/shared/appbar-header.component";

const Dashboard = ({navigation}) => {

  return (
    <>
      <Container>
        {/* TODO: Make status bar consistent on iOS */}
          <StatusBar barStyle="light-content" backgroundColor="blue" />
          <Appbar navigation={navigation} screenTitle="Dashboard"/>
    
            <ScrollView style={tailwind("w-full")}>
            <DashboardHeader totalSavings='XAF200,000' />
              <View
                style={tailwind(
                  "w-full pt-2 px-2 flex-row flex-1 items-baseline justify-between"
                )}
              >
                <View style={tailwind("")}>
                  <Text>Saving Analysis</Text>
                </View>
                <View
                  style={tailwind(
                    "flex-1 p-1 flex-row items-baseline justify-end"
                  )}
                >
                  <TouchableOpacity
                    style={tailwind(
                      "border-solid border p-2 justify-center border-white "
                    )}
                  >
                    <Text> Yearly </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tailwind(
                      "border-solid border p-2 justify-center border-white "
                    )}
                  >
                    <Text> Monthly</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tailwind(
                      "border-solid border p-2 justify-center border-white "
                    )}
                  >
                    <Text> Weekly</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tailwind("p-4 self-center h-52 bg-white w-full")}>
                <Text style={tailwind("self-center text-xl")}>Chart Area</Text>
              </View>
              <View
                style={tailwind("p-4 self-center m-2 h-52 bg-white w-full")}
              >
                <Text style={tailwind("self-center mx-2 text-xl")}>
                  Recent Transactions Area
                </Text>
              </View>
              <View
                style={tailwind(
                  "p-4 self-center h-52 bg-white w-full opacity-80"
                )}
              >
                <Text style={tailwind("self-center text-xl opacity-100")}>
                  Referrals Area
                </Text>
              </View>
            </ScrollView>
          

          <View style={tailwind("w-full bg-gray-300 p-6 self-end")}></View>
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

export default Dashboard;
