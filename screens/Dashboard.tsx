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
import Container from "../components/shared/container.component";
import DashboardHeader from "../components/dashboard/dashboard-header.component";

const Dashboard = () => {
  return (
    <>
      <Container>
        {/* TODO: Make status bar consistent on iOS */}
          <StatusBar barStyle="light-content" backgroundColor="blue" />
          <DashboardHeader />
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
                    "flex-1 p-1 flex-row items-baseline justify-between space-x-2"
                  )}
                >
                  <TouchableOpacity
                    style={tailwind(
                      "border-solid border-2 p-2 justify-center border-white "
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
        </Container>
    </>
  );
};

export default Dashboard;
