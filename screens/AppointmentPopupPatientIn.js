import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AppointmentPopupPatientIn = () => {
  return (
    <View style={styles.appointmentPopupPatientIn}>
      <Text style={styles.patientInfo}>Patient Info</Text>
      <View style={[styles.buttons, styles.buttonsFlexBox]}>
        <View style={[styles.buttonsred, styles.buttonsredFlexBox]}>
          <Text style={[styles.cancel, styles.labelTypo1]}>Cancel</Text>
        </View>
        <View style={[styles.buttonsgreen, styles.buttonsredFlexBox]}>
          <Text style={[styles.cancel, styles.labelTypo1]}>Add Patient</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View style={[styles.basicInfoWrapper, styles.infoLayout]}>
          <View style={[styles.basicInfoWrapper, styles.infoLayout]}>
            <View style={[styles.image, styles.imagePosition]}>
              <View style={styles.patientImage} />
              <View style={styles.uploadTag}>
                <View style={[styles.iconsupload, styles.buttonsFlexBox]}>
                  <Image
                    style={styles.uploadIcon}
                    contentFit="cover"
                    source={require("../assets/upload.png")}
                  />
                </View>
                <Text style={[styles.uploadImage, styles.diabeticTypo]}>
                  Upload Image
                </Text>
              </View>
            </View>
            <View style={[styles.generalInfo, styles.imagePosition]}>
              <View
                style={[
                  styles.elementstextboxWithLabel,
                  styles.elementstextboxLayout1,
                ]}
              >
                <Text style={[styles.label, styles.labelTypo]}>Name</Text>
                <View
                  style={[styles.elementstextbox, styles.elementstextboxBorder]}
                />
              </View>
              <View
                style={[
                  styles.elementstextboxWithLabel1,
                  styles.elementstextboxLayout1,
                ]}
              >
                <Text style={[styles.label1, styles.labelLayout]}>Gender</Text>
                <View
                  style={[styles.elementstextbox, styles.elementstextboxBorder]}
                />
              </View>
              <View
                style={[
                  styles.elementstextboxWithLabel2,
                  styles.elementstextboxPosition1,
                ]}
              >
                <Text style={[styles.label1, styles.labelLayout]}>Age</Text>
                <View
                  style={[styles.elementstextbox, styles.elementstextboxBorder]}
                />
              </View>
              <View
                style={[
                  styles.elementstextboxWithLabel3,
                  styles.elementstextboxPosition2,
                ]}
              >
                <Text style={[styles.label1, styles.labelLayout]}>Weight</Text>
                <View
                  style={[styles.elementstextbox, styles.elementstextboxBorder]}
                />
              </View>
              <View
                style={[
                  styles.elementstextboxWithLabel4,
                  styles.elementstextboxPosition2,
                ]}
              >
                <Text style={[styles.label1, styles.labelLayout]}>
                  Phone Number
                </Text>
                <View style={styles.elementstextbox4}>
                  <Text style={[styles.prakashSh, styles.diabeticTypo]}>
                    9425462910
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.elementstextboxWithLabel5,
                  styles.elementstextboxPosition,
                ]}
              >
                <Text style={[styles.label1, styles.labelLayout]}>
                  Patient ID
                </Text>
                <View
                  style={[styles.elementstextbox, styles.elementstextboxBorder]}
                />
              </View>
              <View
                style={[
                  styles.elementstextboxWithLabel6,
                  styles.elementstextboxPosition,
                ]}
              >
                <Text style={[styles.label6, styles.labelTypo]}>UHID</Text>
                <View
                  style={[styles.elementstextbox, styles.elementstextboxBorder]}
                />
              </View>
              <View
                style={[
                  styles.elementstextboxWithLabel7,
                  styles.elementstextboxPosition,
                ]}
              >
                <Text style={[styles.label1, styles.labelLayout]}>
                  Blood Group
                </Text>
                <View
                  style={[styles.elementstextbox, styles.elementstextboxBorder]}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.elementstextboxWithLabel8,
            styles.elementstextboxLayout1,
          ]}
        >
          <Text style={[styles.label1, styles.labelLayout]}>
            Medical Conditions
          </Text>
          <View
            style={[styles.elementstextbox, styles.elementstextboxBorder]}
          />
        </View>
        <View
          style={[
            styles.elementstextboxWithLabel9,
            styles.elementstextboxLayout1,
          ]}
        >
          <Text style={[styles.label1, styles.labelLayout]}>Allergies</Text>
          <View
            style={[styles.elementstextbox, styles.elementstextboxBorder]}
          />
        </View>
        <View style={styles.elementstextboxWithLabel10}>
          <Text style={[styles.label1, styles.labelLayout]}>
            Ongoing Medications
          </Text>
          <View
            style={[styles.elementstextbox, styles.elementstextboxBorder]}
          />
        </View>
        <View style={styles.heredity}>
          <Text style={[styles.label11, styles.labelLayout]}>Heredity</Text>
          <View
            style={[styles.elementstextbox11, styles.elementstextboxBorder]}
          >
            <View style={styles.tagsaddFlexBox}>
              <Text style={[styles.diabetic, styles.diabeticTypo]}>
                Diabetic
              </Text>
              <Image
                style={styles.iconscross}
                contentFit="cover"
                source={require("../assets/iconscross.png")}
              />
            </View>
            <View style={[styles.tagsaddHeredity1, styles.tagsaddFlexBox]}>
              <Text style={[styles.diabetic, styles.diabeticTypo]}>
                Diabetic
              </Text>
              <Image
                style={styles.iconscross}
                contentFit="cover"
                source={require("../assets/iconscross.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.addictiveHabbits, styles.elementstextboxLayout1]}>
          <Text style={[styles.label1, styles.labelLayout]}>
            Addictive Habbits
          </Text>
          <View
            style={[
              styles.dropdownListsaddictiveHabbi,
              styles.dropdownPosition,
            ]}
          >
            <View
              style={[
                styles.buttonsdropdownWithIcon,
                styles.elementstextboxBorder,
              ]}
            >
              <Image
                style={[styles.iconsalcohol, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconsalcohol1.png")}
              />
              <Text style={styles.frequency}>Frequency</Text>
              <Image
                style={[styles.iconsarrow, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconsarrow2.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.dropdownListsaddictiveHabbi1,
              styles.dropdownPosition,
            ]}
          >
            <View
              style={[
                styles.buttonsdropdownWithIcon,
                styles.elementstextboxBorder,
              ]}
            >
              <View
                style={[styles.iconsciagrette, styles.elementstextboxBorder]}
              >
                <Image
                  style={styles.ciagretteIcon}
                  contentFit="cover"
                  source={require("../assets/ciagrette.png")}
                />
              </View>
              <Text style={styles.frequency}>Frequency</Text>
              <Image
                style={[styles.iconsarrow, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconsarrow2.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  buttonsredFlexBox: {
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo1: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textAlign: "left",
  },
  infoLayout: {
    height: 264,
    right: "0%",
  },
  imagePosition: {
    top: "50%",
    position: "absolute",
  },
  diabeticTypo: {
    color: Color.black,
    fontFamily: FontFamily.body400,
    textAlign: "left",
  },
  elementstextboxLayout1: {
    height: 72,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    top: 0,
    fontFamily: FontFamily.button,
    fontWeight: "500",
    color: Color.darkslategray,
    position: "absolute",
  },
  elementstextboxBorder: {
    borderStyle: "solid",
    borderColor: "#989898",
  },
  labelLayout: {
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  elementstextboxPosition1: {
    right: "80%",
    width: "20%",
    left: "0%",
  },
  elementstextboxPosition2: {
    top: 88,
    height: 72,
    position: "absolute",
  },
  elementstextboxPosition: {
    top: 176,
    height: 72,
    position: "absolute",
  },
  tagsaddFlexBox: {
    paddingRight: Padding.p_5xs,
    backgroundColor: Color.neutrals200,
    borderRadius: Border.br_5xl,
    paddingLeft: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownPosition: {
    top: 24,
    position: "absolute",
  },
  iconsarrowLayout: {
    width: 48,
    height: 48,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  patientInfo: {
    top: 40,
    fontSize: FontSize.size_13xl,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: FontFamily.heading3600,
    textAlign: "left",
    color: Color.darkslategray,
    left: "50%",
    marginLeft: -404,
    position: "absolute",
  },
  cancel: {
    color: Color.white,
    fontSize: FontSize.heading3600_size,
  },
  buttonsred: {
    backgroundColor: Color.red500,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_5xs,
  },
  buttonsgreen: {
    backgroundColor: Color.green400,
    marginLeft: 32,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_xs,
  },
  buttons: {
    right: 70,
    paddingBottom: Padding.p_base,
    bottom: 0,
  },
  patientImage: {
    borderStyle: "dashed",
    borderRadius: 0.001,
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: "#989898",
    overflow: "hidden",
  },
  uploadIcon: {
    width: 26,
    height: 26,
  },
  iconsupload: {
    padding: Padding.p_xs,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  uploadImage: {
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    left: 56,
    top: 14,
    color: Color.black,
    position: "absolute",
  },
  uploadTag: {
    width: 161,
    height: 48,
  },
  image: {
    marginTop: -120,
    left: 0,
    alignItems: "center",
  },
  label: {
    left: 0,
  },
  elementstextbox: {
    right: 0,
    top: 24,
    position: "absolute",
    borderWidth: 1,
    left: 0,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    bottom: 0,
    backgroundColor: Color.white,
  },
  elementstextboxWithLabel: {
    width: "72.86%",
    right: "27.14%",
    left: "0%",
    top: 0,
  },
  label1: {
    left: 0,
    top: 0,
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textAlign: "left",
    color: Color.darkslategray,
    fontSize: FontSize.body1400_size,
    position: "absolute",
  },
  elementstextboxWithLabel1: {
    left: "80%",
    width: "20%",
    right: "0%",
    top: 0,
  },
  elementstextboxWithLabel2: {
    top: 88,
    height: 72,
    position: "absolute",
  },
  elementstextboxWithLabel3: {
    right: "52.86%",
    left: "27.14%",
    width: "20%",
  },
  prakashSh: {
    fontSize: FontSize.heading3600_size,
  },
  elementstextbox4: {
    backgroundColor: Color.neutrals100,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_17xl,
    paddingBottom: Padding.p_xs,
    paddingLeft: Padding.p_base,
    borderStyle: "solid",
    right: 0,
    top: 24,
    borderWidth: 1,
    borderColor: "#989898",
    left: 0,
    borderRadius: Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  elementstextboxWithLabel4: {
    width: "45.71%",
    left: "54.29%",
    right: "0%",
  },
  elementstextboxWithLabel5: {
    right: "40%",
    width: "32.86%",
    top: 176,
    left: "27.14%",
  },
  label6: {
    left: 2,
  },
  elementstextboxWithLabel6: {
    left: "67.14%",
    width: "32.86%",
    top: 176,
    right: "0%",
  },
  elementstextboxWithLabel7: {
    right: "80%",
    width: "20%",
    left: "0%",
  },
  generalInfo: {
    marginTop: -132,
    width: "69.31%",
    left: "30.69%",
    height: 264,
    right: "0%",
  },
  basicInfoWrapper: {
    left: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  elementstextboxWithLabel8: {
    top: 288,
    left: 0,
    width: 808,
  },
  elementstextboxWithLabel9: {
    top: 384,
    left: 0,
    width: 808,
  },
  elementstextboxWithLabel10: {
    top: 480,
    height: 144,
    left: 0,
    width: 808,
    position: "absolute",
  },
  label11: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textAlign: "left",
    color: Color.darkslategray,
    fontSize: FontSize.body1400_size,
  },
  diabetic: {
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  iconscross: {
    width: 36,
    height: 36,
    marginLeft: 8,
    overflow: "hidden",
  },
  tagsaddHeredity1: {
    marginLeft: 8,
  },
  elementstextbox11: {
    paddingHorizontal: Padding.p_base,
    marginTop: 4,
    height: 48,
    borderWidth: 1,
    width: 808,
    borderRadius: Border.br_7xs,
    alignItems: "center",
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  heredity: {
    top: 744,
    left: 0,
    position: "absolute",
  },
  iconsalcohol: {
    left: 0,
  },
  frequency: {
    color: Color.neutrals500,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    left: 56,
    top: 14,
    textAlign: "left",
    position: "absolute",
  },
  iconsarrow: {
    right: 0,
  },
  buttonsdropdownWithIcon: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderWidth: 1,
    left: "0%",
    right: "0%",
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  dropdownListsaddictiveHabbi: {
    height: 48,
    width: 200,
    left: 0,
  },
  ciagretteIcon: {
    width: 20,
    height: 14,
  },
  iconsciagrette: {
    borderRightWidth: 1,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 17,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dropdownListsaddictiveHabbi1: {
    left: 280,
    height: 48,
    width: 200,
  },
  addictiveHabbits: {
    top: 648,
    width: 484,
    left: 0,
  },
  form: {
    top: 104,
    height: 816,
    width: 808,
    left: "50%",
    marginLeft: -404,
    position: "absolute",
  },
  appointmentPopupPatientIn: {
    borderRadius: Border.br_base,
    flex: 1,
    height: 1024,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AppointmentPopupPatientIn;
