import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MedicinePopup from "../components/MedicinePopup";
import TestPopup from "../components/TestPopup";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DashboardPageHistory = () => {
  const [buttonsYellowContainerVisible, setButtonsYellowContainerVisible] =
    useState(false);
  const [buttonsYellowContainer1Visible, setButtonsYellowContainer1Visible] =
    useState(false);
  const navigation = useNavigation();

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
      <View style={[styles.dashboardPageHistory, styles.iconLayout]}>
        <View style={styles.appbarssidebar}>
          <Image
            style={styles.brandinglogoIcon}
            contentFit="cover"
            source={require("../assets/brandinglogo.png")}
          />
          <View style={[styles.mainNav, styles.navFlexBox]}>
            <Pressable
              style={[styles.elementssidebarTab, styles.navFlexBox]}
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
          <View style={[styles.supportingNav, styles.supportingNavPosition]}>
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
          <View style={[styles.patientInfo, styles.mainNav1Position]}>
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
            <Text style={[styles.prakashSharma, styles.prakashTypo]}>
              Prakash Sharma
            </Text>
          </View>
          <View style={[styles.doctorInfo, styles.infoSpaceBlock]}>
            <View style={styles.imagesdoctorProfilePic1}>
              <Image
                style={[styles.doctorProfilePic1, styles.patientImage2Layout]}
                contentFit="cover"
                source={require("../assets/doctor-profile-pic-1.png")}
              />
            </View>
            <View style={styles.nameSpecialization}>
              <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
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
          <View style={styles.patientDetails}>
            <View style={[styles.heredity, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.junClr]}>Heredity</Text>
              </View>
              <View style={[styles.content, styles.contentSpaceBlock]}>
                <View style={styles.tagsheredityBorder}>
                  <Text style={[styles.diabetic, styles.bClr]}>Diabetic</Text>
                </View>
                <View style={[styles.tagsheredity1, styles.tagsheredityBorder]}>
                  <Text style={[styles.diabetic, styles.bClr]}>BP</Text>
                </View>
              </View>
            </View>
            <View style={[styles.ongoingMedications, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.junClr]}>
                  Ongoing Medications
                </Text>
              </View>
              <View style={[styles.content1, styles.contentSpaceBlock]}>
                <Text style={[styles.paracetamol, styles.bClr]}>
                  {" "}
                  Paracetamol
                </Text>
                <Text style={[styles.vitamicCTablets, styles.ageSpaceBlock]}>
                  {" "}
                  Vitamic C Tablets
                </Text>
                <Text style={[styles.vitamicCTablets, styles.ageSpaceBlock]}>
                  {" "}
                  Ofloxacin
                </Text>
              </View>
            </View>
            <View style={[styles.addictiveHabbits, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.junClr]}>
                  Addictive Habbits
                </Text>
              </View>
              <View style={[styles.content2, styles.contentSpaceBlock]}>
                <View style={styles.alcohol}>
                  <Image
                    style={[styles.iconsalcohol, styles.iconsarrowLayout]}
                    contentFit="cover"
                    source={require("../assets/iconsalcohol.png")}
                  />
                  <Text style={[styles.diabetic, styles.bClr]}>Regular</Text>
                </View>
                <View style={styles.smoking}>
                  <View style={styles.iconsciagrette}>
                    <Image
                      style={styles.ciagretteIcon}
                      contentFit="cover"
                      source={require("../assets/ciagrette.png")}
                    />
                  </View>
                  <Text style={[styles.diabetic, styles.bClr]}>Ocassional</Text>
                </View>
              </View>
            </View>
            <View style={[styles.allergies, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.junClr]}>Allergies</Text>
              </View>
              <View style={[styles.content3, styles.contentSpaceBlock]}>
                <Text
                  style={[styles.sulfaDrugsPeanuts, styles.bClr]}
                >{`Sulfa drugs
Peanuts
Penicillin`}</Text>
              </View>
            </View>
            <View style={[styles.medicalConditions, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.junClr]}>
                  Medical Conditions
                </Text>
              </View>
              <View style={[styles.content2, styles.contentSpaceBlock]}>
                <Text
                  style={[styles.sulfaDrugsPeanuts, styles.bClr]}
                >{`Hypertension
Migraine
Diabetes - Type 2`}</Text>
              </View>
            </View>
            <View style={[styles.generalInfo, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.junClr]}>
                  General Info
                </Text>
              </View>
              <View style={[styles.content1, styles.contentSpaceBlock]}>
                <View style={styles.gender}>
                  <Text style={[styles.gender1, styles.bTypo]}>Gender</Text>
                  <Text style={[styles.male, styles.bClr]}>Male</Text>
                </View>
                <View style={[styles.age, styles.ageSpaceBlock]}>
                  <Text style={[styles.gender1, styles.bTypo]}>Age</Text>
                  <Text style={[styles.text, styles.bClr]}>54</Text>
                </View>
                <View style={[styles.age, styles.ageSpaceBlock]}>
                  <Text style={[styles.gender1, styles.bTypo]}>Weight</Text>
                  <Text style={[styles.kg, styles.bClr]}>72 kg</Text>
                </View>
                <View style={[styles.age, styles.ageSpaceBlock]}>
                  <Text style={[styles.gender1, styles.bTypo]}>
                    Blood Group
                  </Text>
                  <Text style={[styles.b, styles.bClr]}>B+</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.prakashSharma1, styles.bClr]}>
              Prakash Sharma
            </Text>
            <View style={styles.imagespatientImage3}>
              <Image
                style={[styles.patientImage2, styles.patientImage2Layout]}
                contentFit="cover"
                source={require("../assets/patient-image-2.png")}
              />
            </View>
          </View>
          <View style={[styles.appbarstopnavBar, styles.mainSectionPosition]}>
            <View style={[styles.mainNav1, styles.mainNav1Position]}>
              <View
                style={[styles.elementstopnavTab, styles.elementstopnavFlexBox]}
              >
                <Text style={[styles.history, styles.prakashTypo]}>
                  History
                </Text>
              </View>
              <Pressable
                style={[
                  styles.elementstopnavTab1,
                  styles.elementstopnavFlexBox,
                ]}
                onPress={() => navigation.navigate("DashboardPageDoctorNotes")}
              >
                <Text style={[styles.diabetic, styles.bClr]}>Doctor Notes</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.elementstopnavTab1,
                  styles.elementstopnavFlexBox,
                ]}
                onPress={() => navigation.navigate("DashboardPageRecordsPage1")}
              >
                <Text style={[styles.diabetic, styles.bClr]}>Records</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.elementstopnavTab1,
                  styles.elementstopnavFlexBox,
                ]}
                onPress={() =>
                  navigation.navigate("DashboardPageDataVisualization")
                }
              >
                <Text style={[styles.diabetic, styles.bClr]}>
                  Data Visualization
                </Text>
              </Pressable>
            </View>
            <View style={[styles.buttons, styles.bodyPosition]}>
              <Pressable
                style={styles.buttonsyellowFlexBox}
                onPress={openButtonsYellowContainer}
              >
                <Text style={[styles.addPatient, styles.bClr]}>
                  Add Medicines
                </Text>
              </Pressable>
              <Pressable
                style={[styles.buttonsyellow1, styles.buttonsyellowFlexBox]}
                onPress={openButtonsYellowContainer1}
              >
                <Text style={[styles.addPatient, styles.bClr]}>Add Tests</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.mainSection, styles.mainSectionPosition]}>
            <View style={[styles.content6, styles.contentFlexBox]}>
              <Pressable
                style={styles.cardspatientLayout}
                onPress={() => navigation.navigate("DashboardPageRecordsPage1")}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </Pressable>
              <Pressable
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
                onPress={() => navigation.navigate("DashboardPageRecordsPage2")}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconsmedical-images.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>5 May</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>MRI</Text>
                  <Text style={[styles.bloodPressure12070, styles.bClr]}>
                    Brain MRI
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
                    source={require("../assets/iconshospital-records.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>2 Apr</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Hospitalization
                  </Text>
                  <Text style={[styles.bloodPressure12070, styles.bClr]}>
                    Typhoid
                  </Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconsvaccination.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Mar</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Vaccination
                  </Text>
                  <Text style={[styles.bloodPressure12070, styles.bClr]}>
                    Covid Vaccination Booster Dose
                  </Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconsprescription.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>24 Feb</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Past Medications
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Paracetamol
Corcin`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
              <View
                style={[styles.cardspatientHistory1, styles.cardspatientLayout]}
              >
                <View style={styles.iconDate}>
                  <Image
                    style={styles.iconspathologyReports}
                    contentFit="cover"
                    source={require("../assets/iconspathology-reports.png")}
                  />
                  <View style={[styles.tagsdate, styles.elementstopnavFlexBox]}>
                    <Text style={[styles.jun, styles.junClr]}>15 Jun</Text>
                  </View>
                </View>
                <View style={styles.content7}>
                  <Text style={[styles.bloodTest, styles.junClr]}>
                    Blood Test
                  </Text>
                  <Text
                    style={[styles.bloodPressure12070, styles.bClr]}
                  >{`Blood Pressure: 120/70
Sugar Level: 300`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.filters}>
              <View style={styles.dropdownListsrecord}>
                <View
                  style={[styles.buttonsdropdown, styles.buttonsdropdownBorder]}
                >
                  <Text style={[styles.selectCondition, styles.bClr]}>
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
                <Text style={[styles.diabetic, styles.bClr]}>
                  Select Date Range
                </Text>
                <Image
                  style={[styles.iconscalender, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconscalender.png")}
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
    backgroundColor: Color.secondary400,
    borderRadius: Border.br_5xs,
    left: 104,
    zIndex: 2,
    top: 0,
    position: "absolute",
  },
  supportingNavPosition: {
    left: "50%",
    position: "absolute",
  },
  mainNav1Position: {
    left: 32,
    flexDirection: "row",
    top: "50%",
    position: "absolute",
  },
  prakashTypo: {
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
  },
  infoSpaceBlock: {
    marginTop: -28,
    justifyContent: "center",
  },
  patientImage2Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  heredity1Typo: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
    fontSize: FontSize.heading3600_size,
  },
  bodyPosition: {
    right: 32,
    position: "absolute",
  },
  heredityPosition: {
    right: "10.38%",
    width: "89.62%",
    left: "0%",
    position: "absolute",
  },
  junClr: {
    color: Color.darkslategray,
    textAlign: "left",
  },
  contentSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  bClr: {
    color: Color.black,
    textAlign: "left",
  },
  tagsheredityBorder: {
    paddingHorizontal: Padding.p_5xl,
    borderWidth: 1,
    borderColor: "#82400c",
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.secondary400,
    justifyContent: "center",
    alignItems: "center",
  },
  ageSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  bTypo: {
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  mainSectionPosition: {
    left: "25.62%",
    right: "0%",
    width: "74.38%",
    position: "absolute",
  },
  elementstopnavFlexBox: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsyellowFlexBox: {
    backgroundColor: Color.secondary300,
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  cardspatientLayout: {
    width: 280,
    height: 216,
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    padding: Padding.p_5xl,
    overflow: "hidden",
  },
  buttonsdropdownBorder: {
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderColor: "#989898",
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
    zIndex: 2,
  },
  elementssidebarTab: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.darkslategray,
    width: 112,
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
    width: 112,
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
    marginTop: -28,
    justifyContent: "center",
    alignItems: "center",
  },
  doctorProfilePic1: {
    borderRadius: Border.br_981xl,
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
  heredity1: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
    fontSize: FontSize.heading3600_size,
  },
  heading: {
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    backgroundColor: Color.secondary200,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
  },
  diabetic: {
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  tagsheredity1: {
    marginLeft: 16,
  },
  content: {
    paddingLeft: Padding.p_13xl,
    marginTop: 16,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  heredity: {
    top: 1136,
    paddingBottom: Padding.p_13xl,
  },
  paracetamol: {
    alignSelf: "stretch",
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  vitamicCTablets: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  content1: {
    paddingLeft: Padding.p_13xl,
    marginTop: 16,
  },
  ongoingMedications: {
    top: 972,
  },
  iconsalcohol: {
    height: 48,
    overflow: "hidden",
  },
  alcohol: {
    flexDirection: "row",
    alignItems: "center",
  },
  ciagretteIcon: {
    width: 20,
    height: 14,
  },
  iconsciagrette: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 17,
    overflow: "hidden",
  },
  smoking: {
    marginLeft: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  content2: {
    paddingLeft: Padding.p_13xl,
    marginTop: 16,
    flexDirection: "row",
  },
  addictiveHabbits: {
    top: 836,
  },
  sulfaDrugsPeanuts: {
    fontFamily: FontFamily.body1400,
    fontSize: FontSize.body1400_size,
    color: Color.black,
    flex: 1,
  },
  content3: {
    paddingLeft: Padding.p_13xl,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  allergies: {
    top: 676,
  },
  medicalConditions: {
    top: 516,
  },
  gender1: {
    color: Color.dimgray,
    textAlign: "left",
  },
  male: {
    marginLeft: 100,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  gender: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text: {
    marginLeft: 126,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  age: {
    flexDirection: "row",
  },
  kg: {
    marginLeft: 103,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  b: {
    marginLeft: 62,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  generalInfo: {
    top: 324,
  },
  prakashSharma1: {
    marginLeft: -94.25,
    top: 264,
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  patientImage2: {
    borderRadius: Border.br_4481xl,
  },
  imagespatientImage3: {
    marginLeft: -108.25,
    width: 216,
    height: 216,
    top: 32,
    flexDirection: "row",
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  patientDetails: {
    width: "25.66%",
    right: "74.34%",
    backgroundColor: Color.secondary100,
    borderRightWidth: 1,
    borderColor: "#989898",
    left: "0%",
    borderStyle: "solid",
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  history: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 20,
    fontWeight: "600",
    fontSize: FontSize.body1400_size,
  },
  elementstopnavTab: {
    backgroundColor: Color.primary400,
    borderRadius: Border.br_lg,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  elementstopnavTab1: {
    marginLeft: 8,
    borderRadius: Border.br_lg,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
  },
  mainNav1: {
    marginTop: -18,
    flexDirection: "row",
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
    fontFamily: FontFamily.button,
    fontWeight: "500",
    fontSize: FontSize.heading3600_size,
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
    right: "0%",
    width: "74.38%",
    backgroundColor: Color.white,
    top: 0,
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
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_base,
    right: 0,
    top: 0,
    position: "absolute",
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
  bloodPressure12070: {
    marginTop: 16,
    alignSelf: "stretch",
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  content7: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  cardspatientHistory1: {
    marginLeft: 32,
  },
  content6: {
    width: "93.78%",
    top: 128,
    right: "2.9%",
    left: "3.32%",
    height: 720,
    position: "absolute",
  },
  selectCondition: {
    marginTop: -10,
    left: 16,
    top: "50%",
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
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
    top: 32,
    flexDirection: "row",
    left: 32,
    position: "absolute",
  },
  mainSection: {
    top: 80,
    backgroundColor: Color.neutrals100,
    right: "0%",
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
  dashboardPageHistory: {
    height: 1024,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.darkslategray,
  },
});

export default DashboardPageHistory;
