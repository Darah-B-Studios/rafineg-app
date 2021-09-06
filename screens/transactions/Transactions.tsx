import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import tailwind from "tailwind-rn";
import { ScreenProps } from "../../App";
import Appbar from "../../components/shared/appbar-header.component";
import Container from "../../components/shared/container.component";
import { ITransaction } from "../../models/Transaction.model";

const Transactions: React.FunctionComponent<ScreenProps<"Transactions">> = ({
  navigation,
}) => {
  const sampleTransactions: ITransaction[] = [
    {
      id: 345,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3450,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3451,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3452,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3453,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3454,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3455,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3456,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3457,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3458,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3459,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3460,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
    {
      id: 3461,
      code: "",
      description: "Saving",
      amount: 30000,
      method: "Momo",
      createOn: new Date(),
      updateOn: new Date(),
    },
  ];
  return (
    <Container>
      <Appbar navigation={navigation} screenTitle="Transactions" />
      <View style={tailwind("")}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={sampleTransactions}
          scrollEnabled={true}
          contentContainerStyle={{paddingTop:8}}
          ItemSeparatorComponent={() => <View></View>}
          renderItem={({ item }) => (
            <TouchableOpacity

              onPress={()=> navigation.navigate("TransactionDetail")}
              style={tailwind(
                "w-full justify-between px-3 flex-row flex-1 bg-white opacity-70"
              )}
            >
              <View style={tailwind("p-2")}>
                <Text style={tailwind("text-xl")}>XAF {item.amount}</Text>
                <Text>{item.description}</Text>
              </View>
              <View style={tailwind("self-end p-2")}>
                <Text>{item.createOn.toDateString()}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
            style={[
              tailwind(
                "p-4 bg-white rounded-full absolute items-center justify-center"
              ),
              {
                  right:16, 
                bottom: 23,
              },
            ]}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
    </Container>
  );
};

export default Transactions;
