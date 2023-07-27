const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DashboardPageHistory from "./screens/DashboardPageHistory";
import HomePageIcon from "./components/HomePage";
import CalendarPage from "./screens/CalendarPage";
import DashboardPageDataVisualiz from "./screens/DashboardPageDataVisualiz";
import DashboardPageRecordsPage from "./screens/DashboardPageRecordsPage";
import DashboardPageRecordsPage1 from "./screens/DashboardPageRecordsPage1";
import DashboardPageDoctorNotes from "./screens/DashboardPageDoctorNotes";
import AppointmentPopupPatientIn from "./screens/AppointmentPopupPatientIn";
import AppointmentPopupAddProfil from "./components/AppointmentPopupAddProfil";
import AppointmentPopupChoosePro from "./components/AppointmentPopupChoosePro";
import AddPatientPopup from "./screens/AddPatientPopup";
import SearchPopup from "./components/SearchPopup";
import Union from "./screens/Union";
import NormalBorderLight from "./components/NormalBorderLight";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="DashboardPageHistory"
              component={DashboardPageHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePageIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CalendarPage"
              component={CalendarPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardPageDataVisualization"
              component={DashboardPageDataVisualiz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardPageRecordsPage2"
              component={DashboardPageRecordsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardPageRecordsPage1"
              component={DashboardPageRecordsPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardPageDoctorNotes"
              component={DashboardPageDoctorNotes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppointmentPopupPatientInfo"
              component={AppointmentPopupPatientIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPatientPopup"
              component={AddPatientPopup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Union"
              component={Union}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
