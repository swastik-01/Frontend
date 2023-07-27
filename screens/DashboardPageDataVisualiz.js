import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import MedicinePopup from "../components/MedicinePopup";
import TestPopup from "../components/TestPopup";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DashboardPageDataVisualiz = () => {
  const navigation = useNavigation();
  const [buttonsYellowContainerVisible, setButtonsYellowContainerVisible] =
    useState(false);
  const [buttonsYellowContainer1Visible, setButtonsYellowContainer1Visible] =
    useState(false);

  const openButtonsYellowContainer = useCallback(() => {
    setButtonsYellowContainerVisible(true);
  }, []);

  const closeButtonsYellowContainer = useCallback(() => {
    setButtonsYellowContainerVisible(false);
  }, []);

  const openButtonsYellowContainer1 = useCallback(() => {
    setButtonsYellowContainer1Visible(true);
  }, []);

  const closeButtonsYellowContainer1 = useCallback(() => {
    setButtonsYellowContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.dashboardPageDataVisualiz, styles.iconLayout]}>
        <View style={[styles.appbarssidebar, styles.navLayout]}>
          <Image
            style={styles.brandinglogoIcon}
            contentFit="cover"
            source={require("../assets/brandinglogo.png")}
          />
          <View style={[styles.mainNav, styles.navLayout]}>
            <Pressable
              style={[styles.elementssidebarTab, styles.navLayout]}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={[styles.iconshome, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconshome.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </Pressable>
            <View style={[styles.elementssidebarTab1, styles.navLayout]}>
              <Image
                style={[styles.iconsdashboard, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconsdashboard.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
              <View style={[styles.highlight1, styles.highlightPosition]} />
            </View>
            <Pressable
              style={[styles.elementssidebarTab1, styles.navLayout]}
              onPress={() => navigation.navigate("CalendarPage")}
            >
              <Image
                style={[styles.iconshome, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconscalendar.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Calendar</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </Pressable>
            <View style={[styles.elementssidebarTab1, styles.navLayout]}>
              <Image
                style={[styles.iconshome, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconschat.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Chat</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </View>
          </View>
          <View style={[styles.supportingNav, styles.highlightPosition]}>
            <View style={[styles.elementssidebarTab, styles.navLayout]}>
              <Image
                style={[styles.iconsdashboard, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconssettings.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Settings</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </View>
            <View style={[styles.elementssidebarTab1, styles.navLayout]}>
              <Image
                style={[styles.iconshome, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconslogout.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Logout</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </View>
          </View>
        </View>
        <View style={styles.appbarstopBar}>
          <View style={[styles.patientInfo, styles.filtersPosition]}>
            <Pressable
              style={[styles.iconsarrow, styles.iconsarrowLayout]}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/iconsarrow.png")}
              />
            </Pressable>
            <Text style={[styles.prakashSharma, styles.history3Typo]}>
              Prakash Sharma
            </Text>
          </View>
          <View style={[styles.doctorInfo, styles.infoPosition]}>
            <View style={styles.imagesdoctorProfilePic1}>
              <Image
                style={[styles.doctorProfilePic1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/doctor-profile-pic-1.png")}
              />
            </View>
            <View style={styles.nameSpecialization}>
              <Text style={[styles.drAakashGupta, styles.textTypo]}>
                Dr. Aakash Gupta
              </Text>
              <Text style={styles.homeTypo}>Cardiologist</Text>
            </View>
            <Image
              style={[styles.iconsarrow1, styles.iconsarrowLayout]}
              contentFit="cover"
              source={require("../assets/iconsarrow1.png")}
            />
          </View>
        </View>
        <View style={[styles.body, styles.bodyPosition]}>
          <View style={styles.appbarstopnavBar}>
            <View style={[styles.mainNav1, styles.filtersPosition]}>
              <Pressable
                style={styles.elementstopnavTab}
                onPress={() => navigation.navigate("DashboardPageHistory")}
              >
                <Text style={[styles.history, styles.historyTypo]}>
                  History
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.elementstopnavTab1,
                  styles.elementstopnavSpaceBlock,
                ]}
                onPress={() => navigation.navigate("DashboardPageDoctorNotes")}
              >
                <Text style={[styles.history, styles.historyTypo]}>
                  Doctor Notes
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.elementstopnavTab1,
                  styles.elementstopnavSpaceBlock,
                ]}
                onPress={() => navigation.navigate("DashboardPageRecordsPage1")}
              >
                <Text style={[styles.history, styles.historyTypo]}>
                  Records
                </Text>
              </Pressable>
              <View
                style={[
                  styles.elementstopnavTab3,
                  styles.elementstopnavSpaceBlock,
                ]}
              >
                <Text style={[styles.history3, styles.history3Typo]}>
                  Data Visualization
                </Text>
              </View>
            </View>
            <View style={[styles.buttons, styles.bodyPosition]}>
              <Pressable
                style={styles.buttonsyellowFlexBox}
                onPress={openButtonsYellowContainer}
              >
                <Text style={[styles.addPatient, styles.textTypo]}>
                  Add Medicines
                </Text>
              </Pressable>
              <Pressable
                style={[styles.buttonsyellow1, styles.buttonsyellowFlexBox]}
                onPress={openButtonsYellowContainer1}
              >
                <Text style={[styles.addPatient, styles.textTypo]}>
                  Add Tests
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.dashboard}>
            <View
              style={[styles.cardsmedicalRecords, styles.cardsmedicalLayout]}
            >
              <Text style={[styles.pathologyReports, styles.textClr]}>
                Pathology Reports
              </Text>
              <View style={styles.iconNumber}>
                <Image
                  style={styles.iconspathologyReports}
                  contentFit="cover"
                  source={require("../assets/iconspathology-reports2.png")}
                />
                <Text style={[styles.text, styles.textClr]}>3</Text>
              </View>
            </View>
            <View
              style={[styles.cardsmedicalRecords1, styles.cardsmedicalLayout]}
            >
              <Text style={[styles.pathologyReports, styles.textClr]}>
                Medical Images
              </Text>
              <View style={styles.iconNumber}>
                <Image
                  style={styles.iconspathologyReports}
                  contentFit="cover"
                  source={require("../assets/iconsmedical-images1.png")}
                />
                <Text style={[styles.text, styles.textClr]}>5</Text>
              </View>
            </View>
            <View
              style={[styles.cardsmedicalRecords2, styles.cardsmedicalLayout]}
            >
              <Text style={[styles.pathologyReports, styles.textClr]}>
                Vaccination
              </Text>
              <View style={styles.iconNumber}>
                <Image
                  style={styles.iconspathologyReports}
                  contentFit="cover"
                  source={require("../assets/iconsvaccination1.png")}
                />
                <Text style={[styles.text, styles.textClr]}>1</Text>
              </View>
            </View>
            <View
              style={[styles.cardsmedicalRecords3, styles.cardsmedicalLayout]}
            >
              <Text style={[styles.pathologyReports, styles.textClr]}>
                Medications
              </Text>
              <View style={styles.iconNumber}>
                <Image
                  style={styles.iconspathologyReports}
                  contentFit="cover"
                  source={require("../assets/iconsprescription1.png")}
                />
                <Text style={[styles.text, styles.textClr]}>5</Text>
              </View>
            </View>
            <View
              style={[styles.cardsmedicalRecords4, styles.cardsmedicalLayout]}
            >
              <Text style={[styles.pathologyReports, styles.textClr]}>
                Hospitalization
              </Text>
              <View style={styles.iconNumber}>
                <Image
                  style={styles.iconspathologyReports}
                  contentFit="cover"
                  source={require("../assets/iconshospital-records1.png")}
                />
                <Text style={[styles.text, styles.textClr]}>3</Text>
              </View>
            </View>
            <View
              style={[styles.cardsmedicalRecords5, styles.cardsmedicalLayout]}
            >
              <Text style={[styles.pathologyReports, styles.textClr]}>
                Medical Expenses
              </Text>
              <View style={styles.iconNumber}>
                <Image
                  style={styles.iconspathologyReports}
                  contentFit="cover"
                  source={require("../assets/iconsmedical-expenses.png")}
                />
                <Text style={[styles.text, styles.textClr]}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.graph}>
            <View style={styles.dates}>
              <Text style={[styles.may, styles.mayTypo]}>1 May</Text>
              <Text style={[styles.may1, styles.mayTypo]}>15 May</Text>
              <Text style={[styles.may2, styles.mayTypo]}>30 May</Text>
              <Text style={[styles.jun, styles.mayTypo]}>15 Jun</Text>
              <Text style={[styles.jun1, styles.mayTypo]}>30 Jun</Text>
            </View>
            <View style={styles.graphChild} />
            <Image
              style={[styles.graphItem, styles.graphItemPosition]}
              contentFit="cover"
              source={require("../assets/line-2.png")}
            />
            <View style={[styles.graphInner, styles.graphChildLayout]} />
            <View style={[styles.lineView, styles.graphChildLayout]} />
            <View style={[styles.graphChild1, styles.graphChildLayout]} />
            <View style={[styles.graphChild2, styles.graphChildLayout]} />
            <View style={[styles.graphChild3, styles.graphChildLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <LinearGradient
              style={[styles.rectangleLineargradient, styles.graphItemPosition]}
              locations={[0, 1]}
              colors={["rgba(237, 127, 134, 0.6)", "rgba(237, 127, 134, 0)"]}
            />
            <Text style={[styles.vitaminB12, styles.history3Typo]}>
              Vitamin B12
            </Text>
            <View style={styles.colorCoding}>
              <View style={styles.abnormal}>
                <Image
                  style={[styles.abnormalChild, styles.mayPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-8.png")}
                />
                <Text style={[styles.abnormal1, styles.filtersPosition]}>
                  Abnormal
                </Text>
              </View>
              <View style={styles.normal}>
                <Image
                  style={[styles.abnormalChild, styles.mayPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-9.png")}
                />
                <Text style={[styles.abnormal1, styles.filtersPosition]}>
                  Normal
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.filters, styles.filtersPosition]}>
            <View
              style={[
                styles.elementsdateRangeSelector,
                styles.buttonsdropdownBorder,
              ]}
            >
              <Text style={[styles.history, styles.historyTypo]}>
                Select Date Range
              </Text>
              <Image
                style={[styles.iconscalender, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconscalender.png")}
              />
            </View>
            <View style={styles.dropdownListsrecord}>
              <View
                style={[styles.buttonsdropdown, styles.buttonsdropdownBorder]}
              >
                <Text style={[styles.selectCondition, styles.historyTypo]}>
                  Select Record
                </Text>
                <Image
                  style={[styles.iconsarrow2, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsarrow2.png")}
                />
              </View>
            </View>
            <View style={styles.dropdownListsparameters}>
              <View
                style={[styles.buttonsdropdown, styles.buttonsdropdownBorder]}
              >
                <Text style={[styles.selectCondition, styles.historyTypo]}>
                  Select Parameters
                </Text>
                <Image
                  style={[styles.iconsarrow2, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsarrow2.png")}
                />
              </View>
            </View>
            <View style={styles.dropdownListsparameters}>
              <View
                style={[styles.buttonsdropdown2, styles.buttonsdropdownBorder]}
              >
                <Text style={[styles.selectCondition, styles.historyTypo]}>
                  Select Personal Health Record
                </Text>
                <Image
                  style={[styles.iconsarrow2, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsarrow2.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={buttonsYellowContainerVisible}
      >
        <View style={styles.buttonsYellowContainerOverlay}>
          <Pressable
            style={styles.buttonsYellowContainerBg}
            onPress={closeButtonsYellowContainer}
          />
          <MedicinePopup onClose={closeButtonsYellowContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={buttonsYellowContainer1Visible}
      >
        <View style={styles.buttonsYellowContainer1Overlay}>
          <Pressable
            style={styles.buttonsYellowContainer1Bg}
            onPress={closeButtonsYellowContainer1}
          />
          <TestPopup onClose={closeButtonsYellowContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navLayout: {
    width: 112,
    alignItems: "center",
  },
  iconsarrowLayout: {
    width: 48,
    height: 48,
  },
  homeTypo: {
    marginTop: 4,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  highlightPosition: {
    zIndex: 2,
    position: "absolute",
  },
  filtersPosition: {
    left: 32,
    position: "absolute",
  },
  history3Typo: {
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
  },
  infoPosition: {
    marginTop: -28,
    flexDirection: "row",
    top: "50%",
    justifyContent: "center",
  },
  textTypo: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  bodyPosition: {
    right: 32,
    position: "absolute",
  },
  historyTypo: {
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.body1400_size,
  },
  elementstopnavSpaceBlock: {
    marginLeft: 8,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_lg,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsyellowFlexBox: {
    paddingHorizontal: Padding.p_13xl,
    backgroundColor: Color.secondary300,
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardsmedicalLayout: {
    padding: Padding.p_base,
    width: 184,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  textClr: {
    color: Color.darkslategray,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  mayTypo: {
    fontSize: FontSize.body1400_size,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.body400,
  },
  graphItemPosition: {
    width: 887,
    left: 67,
    position: "absolute",
  },
  graphChildLayout: {
    height: 1,
    width: 882,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#bdbdbd",
    borderStyle: "dashed",
    position: "absolute",
  },
  mayPosition: {
    left: 0,
    position: "absolute",
  },
  buttonsdropdownBorder: {
    borderColor: "#989898",
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  brandinglogoIcon: {
    width: 65,
    height: 64,
    zIndex: 0,
  },
  iconshome: {
    height: 48,
    zIndex: 0,
    overflow: "hidden",
  },
  home: {
    zIndex: 1,
  },
  highlight: {
    display: "none",
    height: 72,
    width: 16,
    backgroundColor: Color.secondary400,
    borderRadius: Border.br_5xs,
    left: 104,
    zIndex: 2,
    top: 0,
  },
  elementssidebarTab: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.darkslategray,
  },
  iconsdashboard: {
    height: 48,
    zIndex: 0,
  },
  highlight1: {
    height: 72,
    width: 16,
    backgroundColor: Color.secondary400,
    borderRadius: Border.br_5xs,
    left: 104,
    zIndex: 2,
    top: 0,
  },
  elementssidebarTab1: {
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.darkslategray,
  },
  mainNav: {
    marginTop: 96,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  supportingNav: {
    marginLeft: -56,
    bottom: 48,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    width: 112,
  },
  appbarssidebar: {
    bottom: 0,
    padding: Padding.p_5xl,
    alignItems: "center",
    left: 0,
    position: "absolute",
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.darkslategray,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconsarrow: {
    height: 48,
  },
  prakashSharma: {
    marginLeft: 16,
    fontSize: FontSize.heading3600_size,
    textAlign: "left",
    color: Color.white,
  },
  patientInfo: {
    flexDirection: "row",
    top: "50%",
    marginTop: -28,
    justifyContent: "center",
    alignItems: "center",
  },
  doctorProfilePic1: {
    alignSelf: "stretch",
    borderRadius: Border.br_981xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
  imagesdoctorProfilePic1: {
    width: 56,
    height: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  drAakashGupta: {
    fontSize: FontSize.heading3600_size,
    textAlign: "left",
    color: Color.white,
  },
  nameSpecialization: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    marginLeft: 16,
    justifyContent: "center",
  },
  iconsarrow1: {
    marginLeft: 16,
    height: 48,
    overflow: "hidden",
  },
  doctorInfo: {
    right: 64,
    flexDirection: "row",
    top: "50%",
    position: "absolute",
  },
  appbarstopBar: {
    right: 0,
    height: 88,
    left: 112,
    top: 0,
    position: "absolute",
    backgroundColor: Color.darkslategray,
  },
  history: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.body400,
  },
  elementstopnavTab: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_lg,
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  elementstopnavTab1: {
    backgroundColor: Color.white,
  },
  history3: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  elementstopnavTab3: {
    backgroundColor: Color.primary400,
  },
  mainNav1: {
    marginTop: -18,
    flexDirection: "row",
    top: "50%",
  },
  buttonsYellowContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonsYellowContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  addPatient: {
    color: Color.black,
    fontSize: FontSize.heading3600_size,
    textAlign: "left",
  },
  buttonsYellowContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonsYellowContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonsyellow1: {
    marginLeft: 16,
  },
  buttons: {
    marginTop: -20,
    flexDirection: "row",
    top: "50%",
  },
  appbarstopnavBar: {
    borderBottomWidth: 1,
    height: 80,
    borderColor: "#dcdcdc",
    left: "0%",
    right: "0%",
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  pathologyReports: {
    textAlign: "left",
    fontFamily: FontFamily.body400,
  },
  iconspathologyReports: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  text: {
    textAlign: "center",
    fontFamily: FontFamily.button,
    fontWeight: "500",
    marginLeft: 16,
  },
  iconNumber: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardsmedicalRecords: {
    backgroundColor: Color.pastelsLavender,
  },
  cardsmedicalRecords1: {
    backgroundColor: Color.pastelsBabyPink,
    marginLeft: 24,
  },
  cardsmedicalRecords2: {
    backgroundColor: Color.pastelsLightGreen,
    marginLeft: 24,
  },
  cardsmedicalRecords3: {
    backgroundColor: Color.pastelsYellow,
    marginLeft: 24,
  },
  cardsmedicalRecords4: {
    backgroundColor: Color.pastelsSkyBlue,
    marginLeft: 24,
  },
  cardsmedicalRecords5: {
    backgroundColor: Color.pastelsGray,
    marginLeft: 24,
  },
  dashboard: {
    top: 80,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_29xl,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    backgroundColor: Color.white,
    flexDirection: "row",
    position: "absolute",
    width: "100%",
  },
  may: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.body400,
    left: 0,
    position: "absolute",
    top: 0,
  },
  may1: {
    left: 159,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.body400,
    top: 0,
    position: "absolute",
  },
  may2: {
    left: 323,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.body400,
    top: 0,
    position: "absolute",
  },
  jun: {
    left: 490,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.body400,
    top: 0,
    position: "absolute",
  },
  jun1: {
    left: 652,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.body400,
    top: 0,
    position: "absolute",
  },
  dates: {
    top: 429,
    left: 200,
    width: 705,
    height: 19,
    position: "absolute",
  },
  graphChild: {
    top: 49,
    borderColor: "#000",
    borderRightWidth: 1,
    width: 1,
    height: 360,
    left: 67,
    borderStyle: "solid",
    position: "absolute",
  },
  graphItem: {
    top: 408,
    height: 3,
  },
  graphInner: {
    top: 343,
    left: 73,
    width: 882,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#bdbdbd",
    borderStyle: "dashed",
  },
  lineView: {
    top: 279,
    left: 73,
    width: 882,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#bdbdbd",
    borderStyle: "dashed",
  },
  graphChild1: {
    top: 215,
    left: 73,
    width: 882,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#bdbdbd",
    borderStyle: "dashed",
  },
  graphChild2: {
    top: 151,
    left: 73,
    width: 882,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#bdbdbd",
    borderStyle: "dashed",
  },
  graphChild3: {
    left: 72,
    top: 88,
  },
  vectorIcon: {
    top: 171,
    left: 187,
    width: 676,
    height: 108,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 48,
    borderColor: "#e2515e",
    borderBottomWidth: 0.5,
    height: 168,
    backgroundColor: Color.redGradient,
    borderStyle: "solid",
    width: 887,
  },
  vitaminB12: {
    top: 317,
    fontSize: FontSize.size_5xl,
    color: Color.secondary600,
    display: "flex",
    width: 167,
    height: 52,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  abnormalChild: {
    width: 24,
    height: 24,
    top: 0,
  },
  abnormal1: {
    top: 3,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.body400,
    fontSize: FontSize.body1400_size,
  },
  abnormal: {
    width: 123,
    height: 24,
  },
  normal: {
    width: 100,
    marginLeft: 32,
    height: 24,
  },
  colorCoding: {
    left: 699,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  graph: {
    top: 412,
    left: 64,
    width: 991,
    height: 448,
    position: "absolute",
  },
  iconscalender: {
    marginLeft: 32,
    height: 48,
    overflow: "hidden",
  },
  elementsdateRangeSelector: {
    width: 256,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selectCondition: {
    marginTop: -10,
    left: 16,
    color: Color.black,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.body400,
    position: "absolute",
  },
  iconsarrow2: {
    marginTop: -24,
    right: 8,
    top: "50%",
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  buttonsdropdown: {
    width: 232,
    height: 48,
  },
  dropdownListsrecord: {
    width: 232,
    marginLeft: 24,
    flexDirection: "row",
  },
  dropdownListsparameters: {
    marginLeft: 24,
    flexDirection: "row",
  },
  buttonsdropdown2: {
    width: 320,
    height: 48,
  },
  filters: {
    top: 300,
    flexDirection: "row",
  },
  body: {
    bottom: 32,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    top: 88,
    left: 112,
    overflow: "hidden",
  },
  dashboardPageDataVisualiz: {
    height: 1024,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.darkslategray,
  },
});

export default DashboardPageDataVisualiz;
