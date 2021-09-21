import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import { ScreenProps } from "../../App";
import AboutComponent from "../../components/settings/about/about.component";
import AccountComponent from "../../components/settings/account/account.component";
import ContactUsComponent from "../../components/settings/contact-us/contact-us.component";
import HelpComponent from "../../components/settings/help/help.component";
import LanguageComponent from "../../components/settings/language/language.component";
import NotificationsComponent from "../../components/settings/notification/notification.component";
import SettingsComponent, {
  SettingsOptions,
} from "../../components/settings/settings.component";
import SettingsModal from "../../components/settings/settingsmodal.component";
import ThemesComponent from "../../components/settings/theme/theme.component";
import Appbar from "../../components/shared/appbar-header.component";
import Container from "../../components/shared/container.component";

const SettingsScreen: React.FunctionComponent<ScreenProps<"SettingsScreen">> =
  ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [settingsToShow, setSettingsToShow] = useState("");
    const settingsOptions: SettingsOptions[] = [
      { title: "Language", subtitle: "English", onPress: () => {} },
      { title: "Account", subtitle: "Manage your account", onPress: () => {} },
      {
        title: "Notification",
        subtitle: "Customize notifications",
        onPress: () => {},
      },
      {
        title: "Theme",
        subtitle: "Customize app theme",
        onPress: () => {},
      },
      { title: "Help", subtitle: undefined, onPress: () => {} },
      { title: "Contact us", subtitle: undefined, onPress: () => {} },
      { title: "About RAFINEG", subtitle: undefined, onPress: () => {} },
      {
        title: "Policy",
        subtitle: "Read the terms and conditions",
        onPress: () => {},
      },
    ];
    const onSettingsItemPress = (title: string) => {
      setModalVisible(!modalVisible);
      setSettingsToShow(title);
    };

    const showSettings = (title: string) => {
      switch (title) {
        case "Language":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <LanguageComponent />
            </SettingsModal>
          );

        case "Account":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <AccountComponent />
            </SettingsModal>
          );

        case "Notification":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <NotificationsComponent />
            </SettingsModal>
          );

        case "Theme":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <ThemesComponent />
            </SettingsModal>
          );

        case "Help":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <HelpComponent />
            </SettingsModal>
          );

        case "Contact us":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <ContactUsComponent />
            </SettingsModal>
          );

        case "About RAFINEG":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <AboutComponent />
            </SettingsModal>
          );
        case "Policy":
          return (
            <SettingsModal
              closeModal={() => setModalVisible(!modalVisible)}
              title={title}
              //   onRequestClose={() => setModalVisible(!modalVisible)}
              showModal={modalVisible}
            >
              <AboutComponent />
            </SettingsModal>
          );
      }
    };

    return (
      <Container>
        <Appbar
          navigation={navigation}
          screenTitle="Setttings"
          showDrawer={false}
          showBackButton={true}
        />
        <ScrollView style={tailwind("bg-white opacity-50 w-full")}>
          {settingsOptions.map((item, index) => (
            <SettingsComponent
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              onPress={() => onSettingsItemPress(item.title)}
            />
          ))}
          {modalVisible && showSettings(settingsToShow)}
        </ScrollView>
      </Container>
    );
  };

export default SettingsScreen;
