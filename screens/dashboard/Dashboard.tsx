import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import Container from "../../components/shared/container.component";
import Appbar from "../../components/shared/appbar-header.component";
import { ScreenProps } from "../../App";
import { ITransaction } from "../../models/Transaction.model";
import TransactionSummaryView from "../../components/transactions/transaction-summary.component";
import DashboardHeader from "../../components/dashboard/dashboard-header.component";

const Dashboard: React.FunctionComponent<ScreenProps<'Dashboard'>> = ({ navigation }) => {
  // const { transactions, setTransaction } = useTransaction();

  const transactions: ITransaction = {
    id: 2,
    description: "Savings",
    method: "Package 1",
    createOn: new Date(),
    amount: 400000
  }

  return (
    <>
      <Container>
        <StatusBar />
        <Appbar navigation={navigation} screenTitle="Dashboard" />

        <ScrollView style={tailwind("w-full")}>
          <DashboardHeader totalSavings="400000" />
          <View
            style={tailwind(
              "border-solid border p-2 justify-center border-white "
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
          <View style={tailwind("p-4 self-center mt-4 h-52 bg-white w-11/12")}>
            <Text style={tailwind("self-center text-xl")}>Chart Area</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Transactions")}
            style={tailwind("p-4 self-center m-2 h-52 bg-white opacity-80 w-11/12")}
          >
            <Text style={tailwind("mx-2 text-xl")}>
              Recent Transactions
            </Text>
            <TransactionSummaryView
              id={transactions.id}
              description={transactions.description}
              method={transactions.method}
              amount={transactions.amount}
              createOn={transactions.createOn} />
            <TransactionSummaryView
              id={transactions.id}
              description={transactions.description}
              method={transactions.method}
              amount={transactions.amount}
              createOn={transactions.createOn} />
            <TransactionSummaryView
              description={transactions.description}
              id={transactions.id}
              method={transactions.method}
              amount={transactions.amount}
              createOn={transactions.createOn} />
            <TransactionSummaryView
              description={transactions.description}
              id={transactions.id}
              method={transactions.method}
              amount={transactions.amount}
              createOn={transactions.createOn} />
          </TouchableOpacity>

          <View
            style={tailwind(
              "border-solid border p-2 justify-center border-white "
            )}
          >
            <Text style={tailwind("text-xl")}>
              Your Referrals
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity
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
          <Text style={tailwind("self-center text-xl opacity-100")}>
            Referrals Area
          </Text>
        </TouchableOpacity>

      </Container>
    </>
  );
};

export default Dashboard;
