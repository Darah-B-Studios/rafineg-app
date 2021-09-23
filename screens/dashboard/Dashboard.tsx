import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";
import Container from "../../components/shared/container.component";
import Appbar from "../../components/shared/appbar-header.component";
import { ScreenProps } from "../../App";
import { AntDesign } from "@expo/vector-icons";
import DashboardContent from "./DashboardContent";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";

const Dashboard: React.FunctionComponent<ScreenProps<"Dashboard">> = ({
  navigation,
}) => {
  const user = useRecoilValue(userState);

  // if (!user.isRegistered) {
  //   navigation.navigate("Registration");
  // }

  return (
    <>
      <Container>
        <Appbar navigation={navigation} screenTitle="Dashboard" />

        <ScrollView style={tailwind("w-full")}>
          <DashboardContent navigation={navigation} route={undefined} />
        </ScrollView>

        {user.isRegistered && (
          <TouchableOpacity
            onPress={() => navigation.navigate("SavingScreen")}
            style={[
              tailwind(
                "p-4 bg-white rounded-full absolute items-center justify-center"
              ),
              {
                right: 10,
                bottom: 10,
              },
            ]}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
