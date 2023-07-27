import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MedicinePopup from "../components/MedicinePopup";
import TestPopup from "../components/TestPopup";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DashboardPageRecordsPage = () => {
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
      <View style={[styles.dashboardPageRecordsPage, styles.pageLayout]}>
        <View style={styles.appbarssidebar}>
          <Image
            style={styles.brandinglogoIcon}
            contentFit="cover"
            source={require("../assets/brandinglogo2.png")}
          />
          <View style={[styles.mainNav, styles.navFlexBox]}>
            <Pressable
              style={[styles.elementssidebarTab, styles.navFlexBox]}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={[styles.iconshome, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconshome3.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </Pressable>
            <View style={[styles.elementssidebarTab1, styles.navFlexBox]}>
              <Image
                style={[styles.iconsdashboard, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconsdashboard.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
              <View style={[styles.highlight1, styles.highlightPosition]} />
            </View>
            <Pressable
              style={[styles.elementssidebarTab1, styles.navFlexBox]}
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
            <View style={[styles.elementssidebarTab1, styles.navFlexBox]}>
              <Image
                style={[styles.iconshome, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconschat.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Chat</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </View>
          </View>
          <View style={[styles.supportingNav, styles.mriVideo2Position]}>
            <View style={[styles.elementssidebarTab, styles.navFlexBox]}>
              <Image
                style={[styles.iconsdashboard, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconssettings.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Settings</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </View>
            <View style={[styles.elementssidebarTab1, styles.navFlexBox]}>
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
          <View style={[styles.patientInfo, styles.recordsPosition]}>
            <Pressable
              style={[styles.iconsarrow, styles.iconsarrowLayout]}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={[styles.icon, styles.pageLayout]}
                contentFit="cover"
                source={require("../assets/iconsarrow.png")}
              />
            </Pressable>
            <Text style={[styles.prakashSharma, styles.recordsTypo]}>
              Prakash Sharma
            </Text>
          </View>
          <View style={[styles.doctorInfo, styles.infoPosition]}>
            <View style={styles.imagesdoctorProfilePic1}>
              <Image
                style={[styles.doctorProfilePic1, styles.pageLayout]}
                contentFit="cover"
                source={require("../assets/doctor-profile-pic-1.png")}
              />
            </View>
            <View style={styles.nameSpecialization}>
              <Text style={[styles.drAakashGupta, styles.bloodTestTypo]}>
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
          <View style={styles.recordsListSection}>
            <Text style={[styles.records, styles.junClr]}>Records</Text>
            <View style={[styles.filters, styles.recordsPosition]}>
              <View style={styles.dropdownListsrecord}>
                <View
                  style={[styles.buttonsdropdown, styles.buttonsdropdownBorder]}
                >
                  <Text style={[styles.selectCondition, styles.selectTypo]}>
                    Select Record
                  </Text>
                  <Image
                    style={[styles.iconsarrow2, styles.iconsarrowLayout]}
                    contentFit="cover"
                    source={require("../assets/iconsarrow2.png")}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.elementsdateRangeSelector,
                  styles.buttonsdropdownBorder,
                ]}
              >
                <Text style={[styles.selectDateRange, styles.selectTypo]}>
                  Select Date Range
                </Text>
                <Image
                  style={[styles.iconscalender, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconscalender.png")}
                />
              </View>
            </View>
            <View style={styles.list}>
              <Pressable
                style={[styles.cardspatientHistory, styles.cardspatientLayout]}
                onPress={() => navigation.navigate("DashboardPageRecordsPage1")}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[
                      styles.bloodPressure12070Container,
                      styles.bloodFlexBox,
                    ]}
                  >
                    <Text
                      style={styles.totalWbc}
                    >{`Total (WBC):                   `}</Text>
                    <Text style={[styles.text, styles.textTypo]}>{`2,670
`}</Text>
                    <Text style={styles.rdw}>
                      <Text
                        style={styles.rdw1}
                      >{`RDW :                                `}</Text>
                      <Text style={styles.textTypo}>{` `}</Text>
                    </Text>
                    <Text style={styles.textTypo}>
                      <Text style={styles.text3}>{`14.4
`}</Text>
                    </Text>
                    <Text
                      style={styles.totalWbc}
                    >{`PCT                                    `}</Text>
                    <Text style={[styles.text, styles.textTypo]}>0.10</Text>
                  </Text>
                </View>
              </Pressable>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconsmedical-images2.png")}
                  />
                  <View style={[styles.tagsdate1, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>5 May</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>MRI</Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bloodFlexBox]}
                  >
                    Brain MRI
                  </Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory2, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconshospital-records.png")}
                  />
                  <View style={[styles.tagsdate, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>2 Apr</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Hospitalization
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bloodFlexBox]}
                  >
                    Typhoid
                  </Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory3, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconsvaccination.png")}
                  />
                  <View style={[styles.tagsdate, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Mar</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Vaccination
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bloodFlexBox]}
                  >
                    Covid Vaccination Booster Dose
                  </Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory4, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconsprescription.png")}
                  />
                  <View style={[styles.tagsdate, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>24 Feb</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Past Medications
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bloodFlexBox]}
                  >{`Paracetamol
Corcin`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory5, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bloodFlexBox]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory6, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bloodFlexBox]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory7, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.tagsdateFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bloodFlexBox]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.appbarstopnavBar, styles.mainSectionPosition]}>
            <View style={[styles.mainNav1, styles.recordsPosition]}>
              <Pressable
                style={styles.elementstopnavTab}
                onPress={() => navigation.navigate("DashboardPageHistory")}
              >
                <Text style={[styles.selectDateRange, styles.selectTypo]}>
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
                <Text style={[styles.selectDateRange, styles.selectTypo]}>
                  Doctor Notes
                </Text>
              </Pressable>
              <View
                style={[
                  styles.elementstopnavTab2,
                  styles.elementstopnavSpaceBlock,
                ]}
              >
                <Text style={[styles.history2, styles.recordsTypo]}>
                  Records
                </Text>
              </View>
              <Pressable
                style={[
                  styles.elementstopnavTab1,
                  styles.elementstopnavSpaceBlock,
                ]}
                onPress={() =>
                  navigation.navigate("DashboardPageDataVisualization")
                }
              >
                <Text style={[styles.selectDateRange, styles.selectTypo]}>
                  Data Visualization
                </Text>
              </Pressable>
            </View>
            <View style={[styles.buttons, styles.bodyPosition]}>
              <Pressable
                style={styles.buttonsyellowFlexBox}
                onPress={openButtonsYellowContainer}
              >
                <Text style={[styles.addPatient, styles.bloodTestTypo]}>
                  Add Medicines
                </Text>
              </Pressable>
              <Pressable
                style={[styles.buttonsyellow1, styles.buttonsyellowFlexBox]}
                onPress={openButtonsYellowContainer1}
              >
                <Text style={[styles.addPatient, styles.bloodTestTypo]}>
                  Add Tests
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.mainSection, styles.mainSectionPosition]}>
            <View style={[styles.mriVideo2, styles.mriVideo2Position]} />
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
  pageLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navFlexBox: {
    width: 112,
    justifyContent: "center",
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
    height: 72,
    width: 16,
    borderRadius: Border.br_5xs,
    left: 104,
    zIndex: 2,
    backgroundColor: Color.secondary400,
    top: 0,
    position: "absolute",
  },
  mriVideo2Position: {
    left: "50%",
    position: "absolute",
  },
  recordsPosition: {
    left: 32,
    position: "absolute",
  },
  recordsTypo: {
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
  },
  infoPosition: {
    marginTop: -28,
    flexDirection: "row",
    top: "50%",
    justifyContent: "center",
  },
  bloodTestTypo: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
    fontSize: FontSize.heading3600_size,
  },
  bodyPosition: {
    right: 32,
    position: "absolute",
  },
  junClr: {
    color: Color.darkslategray,
    textAlign: "left",
  },
  buttonsdropdownBorder: {
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderColor: "#989898",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  selectTypo: {
    fontSize: FontSize.body1400_size,
    lineHeight: 20,
  },
  cardspatientLayout: {
    height: 216,
    borderRadius: Border.br_base,
    right: "0%",
    left: "0%",
    padding: Padding.p_5xl,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  tagsdateFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_base,
    flexDirection: "row",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  bloodFlexBox: {
    marginTop: 16,
    alignSelf: "stretch",
    textAlign: "left",
    fontSize: FontSize.body1400_size,
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mainSectionPosition: {
    left: "25.62%",
    width: "74.38%",
    right: "0%",
    backgroundColor: Color.white,
    position: "absolute",
  },
  elementstopnavSpaceBlock: {
    marginLeft: 8,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_lg,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsyellowFlexBox: {
    paddingHorizontal: Padding.p_13xl,
    backgroundColor: Color.secondary300,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    zIndex: 2,
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
    zIndex: 2,
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
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 112,
  },
  appbarssidebar: {
    alignItems: "center",
    padding: Padding.p_5xl,
    width: 112,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
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
    fontWeight: "600",
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
    borderRadius: Border.br_981xl,
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
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
    height: 88,
    left: 112,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.darkslategray,
  },
  records: {
    top: 32,
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
    left: 32,
    position: "absolute",
  },
  selectCondition: {
    marginTop: -10,
    left: 16,
    color: Color.black,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.body400,
    lineHeight: 20,
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
    flexDirection: "row",
  },
  selectDateRange: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.body400,
    lineHeight: 20,
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
    marginLeft: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  filters: {
    top: 96,
    width: 300,
    paddingRight: Padding.p_13xl,
    flexDirection: "row",
    height: 48,
  },
  iconspathologyReports: {
    width: 32,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  jun: {
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  tagsdate: {
    backgroundColor: Color.primary100,
  },
  iconDate: {
    height: 32,
    alignSelf: "stretch",
  },
  bloodTest: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
    fontSize: FontSize.heading3600_size,
    alignSelf: "stretch",
  },
  totalWbc: {
    color: Color.black,
    fontFamily: FontFamily.body400,
  },
  text: {
    color: Color.red500,
  },
  rdw1: {
    fontFamily: FontFamily.body400,
  },
  rdw: {
    color: Color.black,
  },
  text3: {
    color: Color.red500,
  },
  bloodPressure12070Container: {
    lineHeight: 24,
  },
  content: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  cardspatientHistory: {
    backgroundColor: Color.white,
    top: 0,
  },
  tagsdate1: {
    backgroundColor: Color.secondary400,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
  },
  bloodPressure12070: {
    color: Color.black,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
  },
  cardspatientHistory1: {
    top: 240,
    backgroundColor: Color.secondary100,
  },
  cardspatientHistory2: {
    top: 480,
    backgroundColor: Color.white,
  },
  cardspatientHistory3: {
    top: 720,
    backgroundColor: Color.white,
  },
  cardspatientHistory4: {
    top: 960,
    backgroundColor: Color.white,
  },
  cardspatientHistory5: {
    top: 1200,
    backgroundColor: Color.white,
  },
  cardspatientHistory6: {
    top: 1440,
    backgroundColor: Color.white,
  },
  cardspatientHistory7: {
    top: 1680,
    backgroundColor: Color.white,
  },
  list: {
    width: "84.34%",
    top: 176,
    right: "6.02%",
    left: "9.64%",
    height: 752,
    position: "absolute",
  },
  recordsListSection: {
    width: "25.62%",
    right: "74.38%",
    backgroundColor: Color.neutrals100,
    borderRightWidth: 1,
    borderColor: "#989898",
    left: "0%",
    borderStyle: "solid",
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  elementstopnavTab: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_lg,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  elementstopnavTab1: {
    backgroundColor: Color.white,
  },
  history2: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  elementstopnavTab2: {
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
    borderColor: "#dcdcdc",
    borderBottomWidth: 1,
    height: 80,
    borderStyle: "solid",
    width: "74.38%",
    top: 0,
  },
  mriVideo2: {
    marginLeft: -482,
    width: 964,
    height: 1008,
    top: 0,
  },
  mainSection: {
    top: 80,
    width: "74.38%",
    bottom: 0,
  },
  body: {
    top: 88,
    bottom: 32,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    left: 112,
    overflow: "hidden",
  },
  dashboardPageRecordsPage: {
    height: 1024,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.darkslategray,
  },
});

export default DashboardPageRecordsPage;
