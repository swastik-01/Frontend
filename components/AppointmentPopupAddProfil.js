import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const AppointmentPopupAddProfil = () => {
  return (
    <View style={styles.appointmentPopupAddProfil}>
      <Text style={styles.addProfile}>Add Profile</Text>
      <Text
        style={[styles.thePhoneNumber, styles.addProfile2Typo]}
      >{`The phone number +91 9425462910 is not registered with any profile.
Add patient’s profile to continue booking an appointment.`}</Text>
      <View style={[styles.addProfile1, styles.addProfile1Position]}>
        <Image
          style={styles.iconsplus}
          contentFit="cover"
          source={require("../assets/iconsplus2.png")}
        />
        <Text style={[styles.addProfile2, styles.addProfile2Typo]}>
          Add Profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addProfile2Typo: {
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
  },
  addProfile1Position: {
    left: "50%",
    position: "absolute",
  },
  addProfile: {
    top: 60,
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.heading3600,
    color: Color.darkslategray,
    textAlign: "left",
    left: "50%",
    marginLeft: -390,
    position: "absolute",
  },
  thePhoneNumber: {
    top: 112,
    color: Color.red500,
    left: "50%",
    position: "absolute",
    marginLeft: -390,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  iconsplus: {
    borderRadius: Border.br_44xl,
    width: 112,
    height: 112,
    overflow: "hidden",
  },
  addProfile2: {
    color: Color.black,
    marginTop: 24,
  },
  addProfile1: {
    marginTop: -34,
    marginLeft: -80,
    top: "50%",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xl,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  appointmentPopupAddProfil: {
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    width: 908,
    height: 506,
    overflow: "hidden",
  },
});

export default AppointmentPopupAddProfil;
