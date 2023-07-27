import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MedicinePopup from "../components/MedicinePopup";
import TestPopup from "../components/TestPopup";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DashboardPageDoctorNotes = () => {
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
      <View style={[styles.dashboardPageDoctorNotes, styles.iconLayout]}>
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
          <View style={[styles.supportingNav, styles.supportingNavPosition]}>
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
          <View style={[styles.patientInfo, styles.mainNav1Position]}>
            <Pressable
              style={styles.iconsarrowLayout}
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
          <View style={[styles.doctorInfo, styles.buttonsPosition]}>
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
            <View style={[styles.heredity, styles.buttonPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.tests1Clr]}>
                  Heredity
                </Text>
              </View>
              <View style={[styles.content, styles.contentSpaceBlock]}>
                <View style={styles.tagsheredityBorder}>
                  <Text style={[styles.diabetic, styles.textClr]}>
                    Diabetic
                  </Text>
                </View>
                <View style={[styles.tagsheredity1, styles.tagsheredityBorder]}>
                  <Text style={[styles.diabetic, styles.textClr]}>BP</Text>
                </View>
              </View>
            </View>
            <View style={[styles.ongoingMedications, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.tests1Clr]}>
                  Ongoing Medications
                </Text>
              </View>
              <View style={styles.contentSpaceBlock}>
                <Text style={[styles.paracetamol, styles.textClr]}>
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
                <Text style={[styles.heredity1, styles.tests1Clr]}>
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
                  <Text style={[styles.diabetic, styles.textClr]}>Regular</Text>
                </View>
                <View style={styles.smoking}>
                  <View style={styles.iconsciagrette}>
                    <Image
                      style={styles.ciagretteIcon}
                      contentFit="cover"
                      source={require("../assets/ciagrette.png")}
                    />
                  </View>
                  <Text style={[styles.diabetic, styles.textClr]}>
                    Ocassional
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.allergies, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.tests1Clr]}>
                  Allergies
                </Text>
              </View>
              <View style={[styles.content3, styles.contentSpaceBlock]}>
                <Text
                  style={[styles.sulfaDrugsPeanuts, styles.textClr]}
                >{`Sulfa drugs
Peanuts
Penicillin`}</Text>
              </View>
            </View>
            <View style={[styles.medicalConditions, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.tests1Clr]}>
                  Medical Conditions
                </Text>
              </View>
              <View style={[styles.content2, styles.contentSpaceBlock]}>
                <Text
                  style={[styles.sulfaDrugsPeanuts, styles.textClr]}
                >{`Hypertension
Migraine
Diabetes - Type 2`}</Text>
              </View>
            </View>
            <View style={[styles.generalInfo, styles.heredityPosition]}>
              <View style={styles.heading}>
                <Text style={[styles.heredity1, styles.tests1Clr]}>
                  General Info
                </Text>
              </View>
              <View style={styles.contentSpaceBlock}>
                <View style={styles.gender}>
                  <Text style={[styles.gender1, styles.bLayout]}>Gender</Text>
                  <Text style={[styles.male, styles.textClr]}>Male</Text>
                </View>
                <View style={[styles.age, styles.ageSpaceBlock]}>
                  <Text style={[styles.gender1, styles.bLayout]}>Age</Text>
                  <Text style={[styles.text, styles.textClr]}>54</Text>
                </View>
                <View style={[styles.age, styles.ageSpaceBlock]}>
                  <Text style={[styles.gender1, styles.bLayout]}>Weight</Text>
                  <Text style={[styles.kg, styles.textClr]}>72 kg</Text>
                </View>
                <View style={[styles.age, styles.ageSpaceBlock]}>
                  <Text style={[styles.gender1, styles.bLayout]}>
                    Blood Group
                  </Text>
                  <Text style={[styles.b, styles.textClr]}>B+</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.prakashSharma1, styles.textClr]}>
              Prakash Sharma
            </Text>
            <View
              style={[styles.imagespatientImage3, styles.doctorNotesLayout]}
            >
              <Image
                style={[styles.patientImage2, styles.patientImage2Layout]}
                contentFit="cover"
                source={require("../assets/patient-image-2.png")}
              />
            </View>
          </View>
          <View style={styles.appbarstopnavBar}>
            <View style={[styles.mainNav1, styles.mainNav1Position]}>
              <Pressable
                style={styles.elementstopnavTab}
                onPress={() => navigation.navigate("DashboardPageHistory")}
              >
                <Text style={[styles.diabetic, styles.textClr]}>History</Text>
              </Pressable>
              <View
                style={[
                  styles.elementstopnavTab1,
                  styles.elementstopnavSpaceBlock,
                ]}
              >
                <Text style={[styles.history1, styles.prakashTypo]}>
                  Doctor Notes
                </Text>
              </View>
              <Pressable
                style={[
                  styles.elementstopnavTab2,
                  styles.elementstopnavSpaceBlock,
                ]}
                onPress={() => navigation.navigate("DashboardPageRecordsPage1")}
              >
                <Text style={[styles.diabetic, styles.textClr]}>Records</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.elementstopnavTab2,
                  styles.elementstopnavSpaceBlock,
                ]}
                onPress={() =>
                  navigation.navigate("DashboardPageDataVisualization")
                }
              >
                <Text style={[styles.diabetic, styles.textClr]}>
                  Data Visualization
                </Text>
              </Pressable>
            </View>
            <View style={[styles.buttons, styles.bodyPosition]}>
              <Pressable
                style={styles.buttonsyellowFlexBox}
                onPress={openButtonsYellowContainer}
              >
                <Text style={[styles.addPatient, styles.textClr]}>
                  Add Medicines
                </Text>
              </Pressable>
              <Pressable
                style={[styles.buttonsyellow1, styles.buttonsyellowFlexBox]}
                onPress={openButtonsYellowContainer1}
              >
                <Text style={[styles.addPatient, styles.textClr]}>
                  Add Tests
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.mainSection}>
            <View style={[styles.button, styles.buttonPosition]}>
              <View style={styles.buttonsgreen}>
                <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                  Issue Prescription
                </Text>
              </View>
            </View>
            <View style={styles.tests}>
              <Text style={[styles.tests1, styles.tests1Clr]}>Tests</Text>
              <View style={[styles.table, styles.tableBorder]}>
                <View style={styles.header}>
                  <View style={styles.sno}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      S.No.
                    </Text>
                  </View>
                  <View style={[styles.brandName, styles.nameSpaceBlock]}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      Lab Name
                    </Text>
                  </View>
                  <View style={[styles.drugName, styles.nameSpaceBlock]}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      Test
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>1</Text>
                  </View>
                  <View style={[styles.brandName1, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName1, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>2</Text>
                  </View>
                  <View style={[styles.brandName1, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName1, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>3</Text>
                  </View>
                  <View style={[styles.brandName1, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName1, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>4</Text>
                  </View>
                  <View style={[styles.brandName1, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName1, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>5</Text>
                  </View>
                  <View style={[styles.brandName1, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName1, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.medicines, styles.medicinesPosition]}>
              <Text style={[styles.tests1, styles.tests1Clr]}>Medicines</Text>
              <View style={[styles.table, styles.tableBorder]}>
                <View style={styles.header}>
                  <View style={styles.sno}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      S.No.
                    </Text>
                  </View>
                  <View style={[styles.brandName6, styles.brandBorder1]}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      Brand Name
                    </Text>
                  </View>
                  <View style={[styles.brandName6, styles.brandBorder1]}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      Drug
                    </Text>
                  </View>
                  <View style={[styles.quantity, styles.brandBorder1]}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      Quantity
                    </Text>
                  </View>
                  <View style={[styles.duration, styles.dosageFlexBox]}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      Duration
                    </Text>
                  </View>
                  <View style={[styles.dosage, styles.dosageFlexBox]}>
                    <Text style={[styles.drAakashGupta, styles.heredity1Typo]}>
                      Dosage
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>1</Text>
                  </View>
                  <View style={[styles.brandName8, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName7, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                  <View style={[styles.quantity2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>500 mg</Text>
                  </View>
                  <View style={[styles.duration2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>5 days</Text>
                  </View>
                  <View style={styles.dosageBorder}>
                    <Text style={[styles.text1, styles.textClr]}>
                      Twice a day
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>2</Text>
                  </View>
                  <View style={[styles.brandName8, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName7, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                  <View style={[styles.quantity2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>500 mg</Text>
                  </View>
                  <View style={[styles.duration2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>5 days</Text>
                  </View>
                  <View style={styles.dosageBorder}>
                    <Text style={[styles.text1, styles.textClr]}>
                      Twice a day
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>3</Text>
                  </View>
                  <View style={[styles.brandName8, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName7, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                  <View style={[styles.quantity2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>500 mg</Text>
                  </View>
                  <View style={[styles.duration2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>5 days</Text>
                  </View>
                  <View style={styles.dosageBorder}>
                    <Text style={[styles.text1, styles.textClr]}>
                      Twice a day
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={[styles.sno12, styles.snoBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>5</Text>
                  </View>
                  <View style={[styles.brandName8, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName7, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                  <View style={[styles.quantity2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>500 mg</Text>
                  </View>
                  <View style={[styles.duration2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>5 days</Text>
                  </View>
                  <View style={[styles.dosage5, styles.dosageBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>
                      Twice a day
                    </Text>
                  </View>
                </View>
                <View style={styles.header}>
                  <View style={styles.snoBorder}>
                    <Text style={[styles.text1, styles.textClr]}>4</Text>
                  </View>
                  <View style={[styles.brandName8, styles.brandBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Lorem</Text>
                  </View>
                  <View style={[styles.drugName7, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>Ipsum</Text>
                  </View>
                  <View style={[styles.quantity2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>500 mg</Text>
                  </View>
                  <View style={[styles.duration2, styles.drugBorder]}>
                    <Text style={[styles.text1, styles.textClr]}>5 days</Text>
                  </View>
                  <View style={styles.dosageBorder}>
                    <Text style={[styles.text1, styles.textClr]}>
                      Twice a day
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.doctorNotes, styles.medicinesPosition]}>
              <View style={[styles.symptoms, styles.diseaseLayout]}>
                <Text style={[styles.tests1, styles.tests1Clr]}>Symptoms</Text>
                <View style={[styles.elementstextbox, styles.tableBorder]} />
              </View>
              <View style={[styles.disease, styles.diseaseLayout]}>
                <Text style={[styles.tests1, styles.tests1Clr]}>Diagnosis</Text>
                <View style={[styles.elementstextbox, styles.tableBorder]} />
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
    height: 48,
    width: 48,
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
  buttonsPosition: {
    top: "50%",
    flexDirection: "row",
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
  buttonPosition: {
    paddingBottom: Padding.p_13xl,
    position: "absolute",
  },
  tests1Clr: {
    color: Color.darkslategray,
    textAlign: "left",
  },
  contentSpaceBlock: {
    marginTop: 16,
    paddingLeft: Padding.p_13xl,
    alignSelf: "stretch",
  },
  textClr: {
    color: Color.black,
    textAlign: "left",
  },
  tagsheredityBorder: {
    paddingHorizontal: Padding.p_5xl,
    borderColor: "#82400c",
    borderRadius: Border.br_base,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.secondary400,
    justifyContent: "center",
    alignItems: "center",
  },
  heredityPosition: {
    right: "10.38%",
    width: "89.62%",
    left: "0%",
  },
  ageSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  bLayout: {
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  doctorNotesLayout: {
    height: 216,
    top: 32,
  },
  elementstopnavSpaceBlock: {
    marginLeft: 8,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_lg,
    paddingVertical: Padding.p_5xs,
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
  tableBorder: {
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    position: "absolute",
  },
  nameSpaceBlock: {
    width: 344,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.primary400,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  brandBorder: {
    borderTopWidth: 1,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderBottomWidth: 1,
    borderColor: "#dcdcdc",
    borderRightWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
  },
  drugBorder: {
    borderColor: "#dcdcdc",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
  },
  medicinesPosition: {
    right: "3.32%",
    width: "93.36%",
    left: "3.32%",
    position: "absolute",
  },
  brandBorder1: {
    borderColor: "#fff",
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  dosageFlexBox: {
    width: 156,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.primary400,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  snoBorder: {
    width: 90,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    justifyContent: "center",
  },
  dosageBorder: {
    width: 157,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderBottomWidth: 1,
    borderColor: "#dcdcdc",
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
  },
  diseaseLayout: {
    width: "47.33%",
    height: 216,
    top: 0,
    position: "absolute",
  },
  brandinglogoIcon: {
    width: 65,
    height: 64,
    zIndex: 0,
  },
  iconshome: {
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
    padding: Padding.p_5xl,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    bottom: 0,
    width: 112,
    overflow: "hidden",
    backgroundColor: Color.darkslategray,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  prakashSharma: {
    marginLeft: 16,
    fontSize: FontSize.heading3600_size,
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
    overflow: "hidden",
  },
  doctorInfo: {
    right: 64,
    flexDirection: "row",
    marginTop: -28,
    justifyContent: "center",
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
    flexWrap: "wrap",
    flexDirection: "row",
  },
  heredity: {
    top: 1136,
    right: "10.38%",
    width: "89.62%",
    left: "0%",
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
  ongoingMedications: {
    top: 972,
    position: "absolute",
  },
  iconsalcohol: {
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
    flexDirection: "row",
  },
  addictiveHabbits: {
    top: 836,
    position: "absolute",
  },
  sulfaDrugsPeanuts: {
    fontFamily: FontFamily.body1400,
    fontSize: FontSize.body1400_size,
    color: Color.black,
    flex: 1,
  },
  content3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  allergies: {
    top: 676,
    position: "absolute",
  },
  medicalConditions: {
    top: 516,
    position: "absolute",
  },
  gender1: {
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.body400,
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
    position: "absolute",
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
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  patientDetails: {
    width: "25.66%",
    right: "74.34%",
    backgroundColor: Color.secondary100,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "#989898",
    left: "0%",
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  elementstopnavTab: {
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_lg,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  history1: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  elementstopnavTab1: {
    backgroundColor: Color.primary400,
  },
  elementstopnavTab2: {
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
    height: 80,
    borderBottomWidth: 1,
    borderColor: "#dcdcdc",
    left: "25.62%",
    right: "0%",
    width: "74.38%",
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: 0,
    position: "absolute",
  },
  buttonsgreen: {
    backgroundColor: Color.green400,
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    right: 40,
    bottom: -416,
  },
  tests1: {
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  sno: {
    borderTopLeftRadius: Border.br_7xs,
    width: 88,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.primary400,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  brandName: {
    borderColor: "#fff",
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  drugName: {
    borderTopRightRadius: Border.br_7xs,
  },
  header: {
    flexDirection: "row",
  },
  text1: {
    fontSize: FontSize.heading3600_size,
    fontFamily: FontFamily.body400,
  },
  brandName1: {
    width: 345,
  },
  drugName1: {
    width: 346,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  table: {
    top: 63,
    left: -1,
    borderRadius: Border.br_7xs,
    borderColor: "#989898",
    borderWidth: 1,
  },
  tests: {
    width: "74.69%",
    top: 760,
    right: "21.99%",
    height: 352,
    left: "3.32%",
    position: "absolute",
  },
  brandName6: {
    width: 176,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.primary400,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    width: 148,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.primary400,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  duration: {
    borderColor: "#fff",
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  dosage: {
    borderTopRightRadius: Border.br_7xs,
  },
  brandName8: {
    width: 177,
  },
  drugName7: {
    width: 178,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  quantity2: {
    width: 150,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  duration2: {
    width: 158,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  sno12: {
    borderBottomLeftRadius: Border.br_7xs,
  },
  dosage5: {
    borderBottomRightRadius: Border.br_7xs,
  },
  medicines: {
    top: 328,
    height: 352,
  },
  elementstextbox: {
    width: "100.47%",
    top: 55,
    right: "-0.23%",
    left: "-0.23%",
    borderColor: "#023047",
    height: 162,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.white,
    justifyContent: "center",
  },
  symptoms: {
    right: "52.67%",
    width: "47.33%",
    left: "0%",
  },
  disease: {
    left: "52.67%",
    right: "0%",
    width: "47.33%",
  },
  doctorNotes: {
    height: 216,
    top: 32,
  },
  mainSection: {
    top: 80,
    backgroundColor: Color.neutrals100,
    left: "25.62%",
    width: "74.38%",
    right: "0%",
    bottom: 0,
    position: "absolute",
  },
  body: {
    top: 88,
    bottom: 32,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    left: 112,
    overflow: "hidden",
  },
  dashboardPageDoctorNotes: {
    height: 1024,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.darkslategray,
  },
});

export default DashboardPageDoctorNotes;
