import React from 'react'
import { View, Dimensions, Platform, Image, Text, FlatList, Animated, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import { AntDesign } from "@expo/vector-icons";
import { IPackage } from '../../models/Package.model';
import { usePackage } from '../../recoil-hooks/package.hook';
import { useTestPackage } from '../../recoil-hooks/temppackage.hook';

type PackageCarouselProps = {
  navigation: any
}

export const packagesData : IPackage [] = [
  {
    id: 0,
    name: "Basic",
    code: "B1",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    image:
      "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",
    lowInvestmentLimit: 5000,
    highInvestmentLimit: 10000
  },
  {
    id: 1,
    name: "Classic",
    code: "B1",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    image:
      "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
    lowInvestmentLimit: 5000,
    highInvestmentLimit: 10000
  },
  {
    id: 2,
    name: "VIP",
    code: "B1",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    image:
      "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
    lowInvestmentLimit: 5000,
    highInvestmentLimit: 10000
  },
  {
    id: 3,
    name: "Premium",
    code: "B1",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    image:
      "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",
    lowInvestmentLimit: 5000,
    highInvestmentLimit: 10000
  },
];
const PackageCarousel: React.FunctionComponent<PackageCarouselProps> = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const SPACING = 10;
  const imageW = width * 0.65;
  const CAROUSEL_HEIGHT = height * 0.65;
  const ITEM_SIZE = Platform.OS === "ios" ? width * 0.90 : width * 0.90;
  const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
  const dataWithSpacer = [{ id: "leftSpacer" }, ...packagesData, { id: "rightSpacer" }];
  const scrollX = React.useRef(new Animated.Value(0)).current;


  const {setPackage} = useTestPackage()
  const handlePackageDetailPress = (subscription: IPackage) => {
    setPackage(subscription)
    navigation.navigate('PackageDetails')
  }

  return (
    <>
      <View
        style={[
          tailwind("absolute"),
          {
            height: CAROUSEL_HEIGHT,
            width: width,
            top: 60,
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
            if (!item.name) {
              return <View style={{ width: SPACER_ITEM_SIZE }}></View>;
            }
            return (
              <View
                style={{
                  width: ITEM_SIZE,
                  height: CAROUSEL_HEIGHT * 0.9,
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
                    tailwind("bg-white justify-center items-center flex-1 border-0"),
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
                      {item.name}
                    </Text>
                    <Text style={tailwind("pl-2")}>{item.description}</Text>
                  </View>
                  <TouchableOpacity

                    onPress={() => handlePackageDetailPress(item as IPackage)}
                    style={tailwind(
                      "p-3 bg-gray-100 m-3 self-end flex-row items-center justify-between"
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
    </>
  )
}

export default PackageCarousel
