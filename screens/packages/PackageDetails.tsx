import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRecoilValue } from "recoil";
import tailwind from "tailwind-rn";
import { ScreenProps } from "../../App";
import Appbar from "../../components/shared/appbar-header.component";
import Container from "../../components/shared/container.component";
import { usePackage } from "../../hooks/package.hook";
import { subscriptionState } from "../../recoil/atoms/package.atoms";

const PackageDetails: React.FunctionComponent<ScreenProps<"PackageDetails">> =
  ({navigation }) => {

    const [isSubscribed, setIsSubscribed] = useState(false);
    const subscription = useRecoilValue(subscriptionState)
    const {storePackage} = usePackage()

    const handlePackageSubscription = () => {
      setIsSubscribed(true)
      storePackage(subscription)
    }

    
    return (
      <Container>
        <Appbar
          screenTitle="Package Details"
          navigation={navigation}
          showDrawer={false}
          showBackButton={true}
        />
        <ScrollView style={tailwind("w-full")}>
          <View
            style={tailwind("bg-white my-3 self-center opacity-70 w-11/12")}
          >
            <Image
              resizeMode="contain"
              style={tailwind("w-full h-48")}
              source={{ uri: subscription.image }}
            />
            <Text style={tailwind("text-xl p-2 ")}>{subscription.name}</Text>
            <Text style={tailwind("px-2")}>
             {subscription.description}
            </Text>

            <View style={tailwind("p-2")}>
              <Text style={tailwind("pb-2")}>Upper Investment Limit: {subscription.highInvestmentLimit}</Text>
              <Text>Lower Investment Limit: {subscription.lowInvestmentLimit} </Text>
            </View>
            <View style={tailwind("p-2")}>
              <Text style={tailwind("pb-2")}>Date Created: </Text>
              <Text>Date Updated: </Text>
            </View>

            {isSubscribed ? (
              <TouchableOpacity
                onPress={() => setIsSubscribed(false)}
                style={tailwind(
                  "bg-red-700 items-center justify-center m-3 self-end p-4"
                )}
              >
                <Text style={tailwind("text-white")}>Unsubscribe</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handlePackageSubscription}
                style={tailwind(
                  "bg-blue-700 items-center justify-center m-3 self-end p-4"
                )}
              >
                <Text style={tailwind("text-white")}>Subscribe</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </Container>
    );
  };

export default PackageDetails;
