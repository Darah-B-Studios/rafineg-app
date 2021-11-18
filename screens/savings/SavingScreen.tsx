import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import tailwind from "tailwind-rn";
import Container from "../../components/shared/container.component";
import { useState } from "react";
import { ScreenProps } from "../../App";
import Appbar from "../../components/shared/appbar-header.component";
import { Picker } from "@react-native-picker/picker";
import { useRecoilValue } from "recoil";
import { subscriptionListState } from "../../recoil/atoms/package.atoms";
import { useSaving } from "../../hooks/saving.hook";
import { Formik } from "formik";
import { emptySaving, ISaving } from "../../models/Saving.model";
import ValidationError from "../../components/forms/vlaidation-error.component";
import { userState } from "../../recoil/atoms/user.atom";
import { TimerComponent } from "../../components/shared/timer.component";
import { WrapperModalComponent } from "../../components/shared/modal.component";

const SavingScreen: React.FunctionComponent<ScreenProps<"SavingScreen">> = ({
  navigation,
}) => {
  const amountInput = React.useRef<TextInput>(null);
  const telephoneInput = React.useRef<TextInput>(null);
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const subscriptions = useRecoilValue(subscriptionListState).filter(
    (item) => item.subscribed === true
  );
  const user = useRecoilValue(userState);
  const { storeSaving } = useSaving();
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <Container>
        <Appbar
          screenTitle="Save"
          navigation={navigation}
          showDrawer={false}
          showBackButton={true}
        />
        {showTimer && (
          <WrapperModalComponent>
            <TimerComponent />
          </WrapperModalComponent>
        )}

        <Formik
          initialValues={emptySaving}
          onSubmit={async (values: ISaving, { setSubmitting }) => {
            const obj: ISaving = {
              ...values,
              user: user.id.toString(),
              package: selectedPackage,
            };
            setShowTimer(true);
            await storeSaving(obj);
            console.log("Feedback: ", obj);

            setSubmitting(false);
          }}
        // validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isSubmitting,
          }) => (
            <View style={tailwind("w-full h-full")}>
              <View
                style={tailwind("flex-row justify-between pt-10 px-3")}
              ></View>
              <View style={tailwind("mt-6")}>
                <View style={tailwind("flex-row items-center")}>
                  <View style={tailwind("bg-white m-3 ")}>
                    <Text style={tailwind("text-sm p-4")}>Package</Text>
                  </View>

                  <View style={tailwind("bg-white py-4 mr-3 flex-1")}>
                    <Picker
                      selectedValue={selectedPackage}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedPackage(itemValue)
                      }
                    >
                      {subscriptions.map((item, index) => {
                        return (
                          <Picker.Item
                            label={item.name}
                            value={item.name}
                            key={index}
                          />
                        );
                      })}
                    </Picker>
                  </View>
                </View>

                <Pressable onPress={() => amountInput.current?.focus()}>
                  <TextInput
                    textContentType="username"
                    returnKeyType="next"
                    ref={amountInput}
                    onSubmitEditing={() => amountInput.current?.focus()}
                    style={tailwind("bg-white p-3 m-3 ")}
                    placeholder="Enter Amount"
                    keyboardType="numeric"
                    onBlur={handleBlur("amount")}
                    onChangeText={handleChange("amount")}
                  />
                </Pressable>
                {errors.amount && <ValidationError message={errors.amount} />}

                <Pressable onPress={() => amountInput.current?.focus()}>
                  <TextInput
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    selectionColor="#ffffff"
                    returnKeyType="done"
                    onBlur={handleBlur("telephone")}
                    onChangeText={handleChange("telephone")}
                    ref={telephoneInput}
                    placeholderTextColor="#ffffff"
                    style={tailwind("bg-white p-3 m-3 ")}
                    value={values.telephone}
                    onSubmitEditing={() => telephoneInput.current?.focus()}
                  />
                </Pressable>

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={tailwind(
                    "bg-blue-700 items-center justify-center m-3 self-end p-4"
                  )}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={tailwind("text-white")}>Save</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default SavingScreen;
