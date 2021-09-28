import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tailwind from 'tailwind-rn';
import { ScreenProps } from '../../App';
import DashboardHeader from '../../components/dashboard/dashboard-header.component';
import TransactionSummaryView from '../../components/transactions/transaction-summary.component';
import { ITransaction } from '../../models/Transaction.model';

const DashboardContent: React.FunctionComponent<ScreenProps<"Dashboard">> = ({ navigation }) => {
  const transactions: ITransaction[] = [
    {
      id: 2,
      description: "Savings",
      method: "Package 1",
      createOn: new Date(),
      amount: 400000,
    },
    {
      id: 3,
      description: "Savings",
      method: "Package 1",
      createOn: new Date(),
      amount: 400000,
    },
  ];

  return (
    <>
      <DashboardHeader totalSavings="400000" />
      <View
        style={tailwind(
          "w-full pt-2 px-2 flex-row flex-1 items-baseline justify-between"
        )}
      >
        <View style={tailwind("")}>
          <Text>Saving Analysis</Text>
        </View>
        <View
          style={tailwind("flex-1 p-1 flex-row items-baseline justify-end")}
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
      <View style={tailwind("p-4 self-center mt-4 h-52 bg-white w-11/12")}>
        <Text style={tailwind("self-center text-xl")}>Chart Area</Text>
      </View>
      <View
        style={tailwind(
          "p-4 self-center m-2 p-2 bg-white opacity-80 w-11/12"
        )}
      >
        <Text style={tailwind("mx-2 text-xl")}>Recent Transactions</Text>
        {transactions.map((item, key) => (
          <TransactionSummaryView
            handlePress={() => {
              navigation.navigate("TransactionDetails");
            }}
            key={key}
            transaction={item}
          />
        ))}
      </View>

      <View
        style={tailwind("p-4 self-center flex-col justify-between mb-4 h-52 bg-white w-11/12 opacity-80")}
      >
        <View>
          <Text style={tailwind("text-xl")}>Your Referrals</Text>
          <Text>Get your friends to join RAFINEG and stand a chance to win amazing bonuses.</Text>
        </View>

        <View style={tailwind("flex-row justify-between")}>
          <View>
            <ReferralITemD />
          </View>
          <View>
            <Text>bonuses</Text>
            <Text>20, 000XAF</Text>
          </View>
        </View>
      </View>
    </>
  )
}

function ReferralITemD() {
  return (
    <View style={tailwind("flex-row")}>
      <Image
        style={tailwind("w-12 h-12 rounded-full")}
        resizeMode="cover"
        source={{ uri: "https://picsum.photos/40" }}
      />
      <Image
        style={tailwind("w-12 h-12 -ml-8 rounded-full")}
        resizeMode="cover"
        source={{ uri: "https://picsum.photos/40" }}
      />
      <Image
        style={tailwind("w-12 h-12 -ml-8 rounded-full")}
        resizeMode="cover"
        source={{ uri: "https://picsum.photos/40" }}
      />
      <Text style={tailwind("self-center px-2")}>+5 others</Text>
    </View>
  )
}


export default DashboardContent
