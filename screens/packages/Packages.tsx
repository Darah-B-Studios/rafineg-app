import React from "react";
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import tailwind from "tailwind-rn";
import { AntDesign } from "@expo/vector-icons";
import Container from "../../components/shared/container.component";
import Appbar from "../../components/shared/appbar-header.component";
import Tag from "../../components/shared/tag.component";
import PackageCarousel from "../../components/packages/package-carousel.component";
import { ScreenProps } from "../../App";
import { IPackage } from "../../models/Package.model";
import { useTestPackage } from "../../recoil-hooks/temppackage.hook";
import { useRecoilValue } from "recoil";
import { subscriptionListState } from "../../recoil/atoms/package.atoms";
import { packagesData } from "./util";

const { width, height } = Dimensions.get("window");
const CAROUSEL_HEIGHT = height * 0.65;

const Packages: React.FunctionComponent<ScreenProps<'Packages'>> = ({navigation}) => {
  const {setDefaultPackages} = useTestPackage()
  setDefaultPackages(packagesData)

  const subscriptions = useRecoilValue(subscriptionListState)
  return (
    <Container>
        <Appbar navigation={navigation} screenTitle="Subscriptions"/>
        {/* <DashboardHeader totalSavings="XAF 100000"/> */}
        <View style={tailwind("h-3/4 w-full flex-auto")}>
          <View
            style={tailwind(
              "w-full pt-2 px-2 mb-4 flex-row flex-1 items-baseline justify-between"
            )}
          >
            <View style={tailwind("flex-1")}>
              <Text>Packages</Text>
            </View>
            <View
              style={tailwind("flex-1 p-1 flex-row items-baseline justify-end")}
            >
              <Tag name="explore" />
              <Tag name="your subscriptions" />
              
            </View>
          </View>
          
        {/* package carousel */}
          <PackageCarousel navigation={navigation} packagesToDisplay={subscriptions}/>
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
  );
};



export default Packages;
