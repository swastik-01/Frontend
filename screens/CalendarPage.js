import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppointmentPopupSearchPat from "../components/AppointmentPopupSearchPat";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CalendarPage = () => {
  const navigation = useNavigation();
  const [buttonsYellowContainerVisible, setButtonsYellowContainerVisible] =
    useState(false);

  const openButtonsYellowContainer = useCallback(() => {
    setButtonsYellowContainerVisible(true);
  }, []);

  const closeButtonsYellowContainer = useCallback(() => {
    setButtonsYellowContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.calendarPage}>
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
            <Pressable
              style={[styles.elementssidebarTab1, styles.navFlexBox]}
              onPress={() => navigation.navigate("DashboardPageHistory")}
            >
              <Image
                style={[styles.iconsdashboard, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconsdashboard1.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
              <View style={[styles.highlight, styles.highlightPosition]} />
            </Pressable>
            <View style={[styles.elementssidebarTab1, styles.navFlexBox]}>
              <Image
                style={[styles.iconshome, styles.iconsarrowLayout]}
                contentFit="cover"
                source={require("../assets/iconscalendar1.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Calendar</Text>
              <View style={[styles.highlight2, styles.highlightPosition]} />
            </View>
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
          <View style={[styles.supportingNav, styles.highlightPosition]}>
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
          <View style={[styles.doctorInfo, styles.infoFlexBox]}>
            <View style={[styles.imagesdoctorProfilePic1, styles.infoFlexBox]}>
              <Image
                style={styles.doctorProfilePic1}
                contentFit="cover"
                source={require("../assets/doctor-profile-pic-1.png")}
              />
            </View>
            <View style={styles.nameSpecialization}>
              <Text style={[styles.drAakashGupta, styles.newTypo]}>
                Dr. Aakash Gupta
              </Text>
              <Text style={styles.homeTypo}>Cardiologist</Text>
            </View>
            <Image
              style={[styles.iconsarrow, styles.iconsarrowLayout]}
              contentFit="cover"
              source={require("../assets/iconsarrow1.png")}
            />
          </View>
        </View>
        <View style={[styles.body, styles.bodyBg]}>
          <View style={[styles.dayDetailedSection, styles.bodyBg]}>
            <Text style={styles.today}>Today</Text>
            <View style={styles.list}>
              <Pressable
                style={[styles.cardspatientCard, styles.cardspatientCardLayout]}
                onPress={() => navigation.navigate("DashboardPageHistory")}
              >
                <View style={[styles.patientInfo, styles.infoFlexBox]}>
                  <View
                    style={[styles.imagespatientImage2, styles.infoFlexBox]}
                  >
                    <Image
                      style={styles.doctorProfilePic1}
                      contentFit="cover"
                      source={require("../assets/patient-image-21.png")}
                    />
                  </View>
                  <Text style={[styles.sakshiPatel, styles.addPatientTypo]}>
                    Prakash Sharma
                  </Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <View
                    style={[styles.tagspatientType, styles.tagspatientPosition]}
                  >
                    <Text style={[styles.critical, styles.newTypo]}>
                      Critical
                    </Text>
                  </View>
                  <Text style={styles.am}>9 AM</Text>
                </View>
              </Pressable>
              <View
                style={[
                  styles.cardspatientCard1,
                  styles.cardspatientCardLayout,
                ]}
              >
                <View style={[styles.patientInfo, styles.infoFlexBox]}>
                  <View
                    style={[styles.imagespatientImage2, styles.infoFlexBox]}
                  >
                    <Image
                      style={styles.doctorProfilePic1}
                      contentFit="cover"
                      source={require("../assets/patient-image-1.png")}
                    />
                  </View>
                  <Text style={[styles.sakshiPatel, styles.addPatientTypo]}>
                    Sakshi Patel
                  </Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <View
                    style={[
                      styles.tagspatientType1,
                      styles.tagspatientPosition,
                    ]}
                  >
                    <Text style={[styles.new, styles.newTypo]}>New</Text>
                  </View>
                  <Text style={styles.am}>10:30 AM</Text>
                </View>
              </View>
              <View
                style={[
                  styles.cardspatientCard2,
                  styles.cardspatientCardLayout,
                ]}
              >
                <View style={[styles.patientInfo, styles.infoFlexBox]}>
                  <View
                    style={[styles.imagespatientImage2, styles.infoFlexBox]}
                  >
                    <Image
                      style={styles.doctorProfilePic1}
                      contentFit="cover"
                      source={require("../assets/patient-image-3.png")}
                    />
                  </View>
                  <Text style={[styles.sakshiPatel, styles.addPatientTypo]}>
                    Rahul Roy
                  </Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <View
                    style={[styles.tagspatientType, styles.tagspatientPosition]}
                  >
                    <Text style={[styles.critical, styles.newTypo]}>
                      Critical
                    </Text>
                  </View>
                  <Text style={styles.am}>11:00 AM</Text>
                </View>
              </View>
              <View
                style={[
                  styles.cardspatientCard3,
                  styles.cardspatientCardLayout,
                ]}
              >
                <View style={[styles.patientInfo, styles.infoFlexBox]}>
                  <View
                    style={[styles.imagespatientImage2, styles.infoFlexBox]}
                  >
                    <Image
                      style={styles.doctorProfilePic1}
                      contentFit="cover"
                      source={require("../assets/patient-image-5.png")}
                    />
                  </View>
                  <Text style={[styles.sakshiPatel, styles.addPatientTypo]}>
                    Suhani Soni
                  </Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <View
                    style={[
                      styles.tagspatientType1,
                      styles.tagspatientPosition,
                    ]}
                  >
                    <Text style={[styles.new, styles.newTypo]}>New</Text>
                  </View>
                  <Text style={styles.am}>1 PM</Text>
                </View>
              </View>
              <View
                style={[
                  styles.cardspatientCard4,
                  styles.cardspatientCardLayout,
                ]}
              >
                <View style={[styles.patientInfo, styles.infoFlexBox]}>
                  <View
                    style={[styles.imagespatientImage2, styles.infoFlexBox]}
                  >
                    <Image
                      style={styles.doctorProfilePic1}
                      contentFit="cover"
                      source={require("../assets/patient-image-10.png")}
                    />
                  </View>
                  <Text style={[styles.sakshiPatel, styles.addPatientTypo]}>
                    Preeti Pandey
                  </Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <View
                    style={[
                      styles.tagspatientType1,
                      styles.tagspatientPosition,
                    ]}
                  >
                    <Text style={[styles.new, styles.newTypo]}>New</Text>
                  </View>
                  <Text style={styles.am}>2 PM</Text>
                </View>
              </View>
              <View
                style={[
                  styles.cardspatientCard5,
                  styles.cardspatientCardLayout,
                ]}
              >
                <View style={[styles.patientInfo, styles.infoFlexBox]}>
                  <View
                    style={[styles.imagespatientImage2, styles.infoFlexBox]}
                  >
                    <Image
                      style={styles.doctorProfilePic1}
                      contentFit="cover"
                      source={require("../assets/patient-image-9.png")}
                    />
                  </View>
                  <Text style={[styles.sakshiPatel, styles.addPatientTypo]}>
                    Mohan Yadav
                  </Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <View
                    style={[
                      styles.tagspatientType5,
                      styles.tagspatientPosition,
                    ]}
                  >
                    <Text style={[styles.critical, styles.newTypo]}>
                      Regular
                    </Text>
                  </View>
                  <Text style={styles.am}>2:30 PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.mainSection}>
            <View style={[styles.calendar, styles.calendarPosition]}>
              <View style={[styles.month, styles.daysPosition]}>
                <View style={[styles.cardsdate, styles.cardsdateLayout]}>
                  <Text style={[styles.text, styles.textTypo]}>29</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text, styles.textTypo]}>30</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text, styles.textTypo]}>31</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>1</Text>
                  <View style={[styles.tagsvisits3, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>12</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>2</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>3</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>4</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>5</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>11</Text>
                  <View style={[styles.tagsvisits3, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>7</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>8</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>9</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>10</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>11</Text>
                  <View style={[styles.tagsvisits13, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText13, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson1.png")}
                      />
                      <Text style={[styles.visits13, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number13, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>12</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>13</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>14</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>15</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>16</Text>
                  <View style={[styles.tagsvisits13, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText18, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson1.png")}
                      />
                      <Text style={[styles.visits13, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number18, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>18</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>17</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>18</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>19</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>20</Text>
                  <View style={[styles.tagsvisits13, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText18, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson1.png")}
                      />
                      <Text style={[styles.visits13, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number18, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>23</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>21</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>22</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>23</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <View style={[styles.highlight6, styles.tagsvisitsLayout]}>
                    <Text style={[styles.text52, styles.textTypo]}>24</Text>
                  </View>
                  <View style={[styles.tagsvisits3, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>8</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>25</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>26</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>27</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>28</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>29</Text>
                  <View style={[styles.tagsvisits13, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText13, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson1.png")}
                      />
                      <Text style={[styles.visits13, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number13, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>6</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text6, styles.textTypo]}>30</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text, styles.textTypo]}>1</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cardsdate1, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.text, styles.textTypo]}>2</Text>
                  <View style={[styles.tagsvisits, styles.tagsvisitsLayout]}>
                    <View style={[styles.iconText, styles.iconPosition]}>
                      <Image
                        style={styles.iconsperson}
                        contentFit="cover"
                        source={require("../assets/iconsperson.png")}
                      />
                      <Text style={[styles.visits, styles.visitsTypo]}>
                        Visits
                      </Text>
                    </View>
                    <View style={[styles.number, styles.numberSpaceBlock]}>
                      <Text style={[styles.text1, styles.textTypo]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.days, styles.daysPosition]}>
                <View style={[styles.monday, styles.infoFlexBox]}>
                  <Text style={[styles.mon, styles.textTypo]}>MON</Text>
                </View>
                <View style={[styles.tuesday, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.mon, styles.textTypo]}>TUE</Text>
                </View>
                <View style={[styles.tuesday, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.mon, styles.textTypo]}>WED</Text>
                </View>
                <View style={[styles.tuesday, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.mon, styles.textTypo]}>THU</Text>
                </View>
                <View style={[styles.tuesday, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.mon, styles.textTypo]}>FRI</Text>
                </View>
                <View style={[styles.tuesday, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.mon, styles.textTypo]}>SAT</Text>
                </View>
                <View style={[styles.tuesday, styles.tuesdaySpaceBlock]}>
                  <Text style={[styles.mon, styles.textTypo]}>SUN</Text>
                </View>
              </View>
            </View>
            <View style={[styles.calendarNav, styles.calendarPosition]}>
              <View style={[styles.monthName, styles.monthNamePosition]}>
                <Image
                  style={[styles.iconsarrow1, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsarrow5.png")}
                />
                <Text style={styles.june2023}>June 2023</Text>
                <Image
                  style={[styles.iconsarrow2, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsarrow6.png")}
                />
              </View>
              <Pressable
                style={[styles.buttonsyellow, styles.monthNamePosition]}
                onPress={openButtonsYellowContainer}
              >
                <Image
                  style={[styles.iconsarrow1, styles.iconsarrowLayout]}
                  contentFit="cover"
                  source={require("../assets/iconsplus.png")}
                />
                <Text style={[styles.addPatient, styles.newTypo]}>
                  Appointment
                </Text>
              </Pressable>
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
          <AppointmentPopupSearchPat onClose={closeButtonsYellowContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  navFlexBox: {
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
    zIndex: 2,
    position: "absolute",
  },
  infoFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  newTypo: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  bodyBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  cardspatientCardLayout: {
    padding: Padding.p_base,
    width: 280,
    backgroundColor: Color.neutrals100,
    borderRadius: Border.br_base,
    left: 0,
    position: "absolute",
  },
  addPatientTypo: {
    fontSize: FontSize.heading3600_size,
    textAlign: "left",
  },
  tagspatientPosition: {
    paddingHorizontal: Padding.p_5xl,
    width: 107,
    top: "50%",
    marginTop: -14,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  calendarPosition: {
    left: 26,
    right: 26,
    position: "absolute",
  },
  daysPosition: {
    width: 912,
    marginLeft: -456,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  cardsdateLayout: {
    height: 120,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  textTypo: {
    letterSpacing: 1,
    textAlign: "right",
    fontSize: FontSize.body1400_size,
  },
  tagsvisitsLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iconPosition: {
    paddingRight: Padding.p_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    borderTopLeftRadius: Border.br_9xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  visitsTypo: {
    marginLeft: 4,
    letterSpacing: 1,
    textAlign: "right",
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  numberSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    borderBottomRightRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
  },
  tuesdaySpaceBlock: {
    marginLeft: 12,
    width: 120,
  },
  monthNamePosition: {
    marginTop: -24,
    top: "50%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
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
    width: 112,
    backgroundColor: Color.darkslategray,
    justifyContent: "center",
  },
  iconsdashboard: {
    height: 48,
    zIndex: 0,
  },
  elementssidebarTab1: {
    marginTop: 48,
    width: 112,
    backgroundColor: Color.darkslategray,
    justifyContent: "center",
  },
  highlight2: {
    height: 72,
    width: 16,
    backgroundColor: Color.secondary400,
    borderRadius: Border.br_5xs,
    left: 104,
    zIndex: 2,
    top: 0,
  },
  mainNav: {
    marginTop: 96,
    zIndex: 1,
    width: 112,
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
    padding: Padding.p_5xl,
    alignItems: "center",
    width: 112,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 1024,
    backgroundColor: Color.darkslategray,
  },
  doctorProfilePic1: {
    borderRadius: Border.br_981xl,
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  imagesdoctorProfilePic1: {
    width: 56,
    height: 56,
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
    marginLeft: 16,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
  },
  iconsarrow: {
    marginLeft: 16,
    height: 48,
    overflow: "hidden",
  },
  doctorInfo: {
    top: 16,
    left: 962,
    position: "absolute",
  },
  appbarstopBar: {
    width: 1328,
    height: 88,
    left: 112,
    top: 0,
    position: "absolute",
    backgroundColor: Color.darkslategray,
  },
  today: {
    left: 32,
    fontSize: FontSize.size_13xl,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: FontFamily.heading3600,
    color: Color.darkslategray,
    top: 32,
    textAlign: "left",
    position: "absolute",
  },
  imagespatientImage2: {
    height: 48,
    width: 48,
    alignItems: "center",
    overflow: "hidden",
  },
  sakshiPatel: {
    color: Color.black,
    marginLeft: 16,
    fontFamily: FontFamily.body400,
  },
  patientInfo: {
    alignItems: "center",
  },
  critical: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    fontWeight: "500",
  },
  tagspatientType: {
    backgroundColor: Color.red500,
  },
  am: {
    marginTop: -10,
    textAlign: "right",
    right: 0,
    top: "50%",
    color: Color.darkslategray,
    fontFamily: FontFamily.button,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    position: "absolute",
  },
  appointmentInfo: {
    height: 28,
    marginTop: 16,
    alignSelf: "stretch",
  },
  cardspatientCard: {
    top: 0,
  },
  new: {
    textAlign: "center",
    color: Color.darkslategray,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    fontWeight: "500",
  },
  tagspatientType1: {
    backgroundColor: Color.secondary300,
  },
  cardspatientCard1: {
    top: 140,
  },
  cardspatientCard2: {
    top: 280,
  },
  cardspatientCard3: {
    top: 420,
  },
  cardspatientCard4: {
    top: 560,
  },
  tagspatientType5: {
    backgroundColor: Color.accentBlue,
  },
  cardspatientCard5: {
    top: 700,
  },
  list: {
    width: "84.34%",
    top: 104,
    right: "6.02%",
    left: "9.64%",
    height: 832,
    position: "absolute",
  },
  dayDetailedSection: {
    width: "25.62%",
    right: "74.38%",
    bottom: 0,
    left: "0%",
    top: 0,
  },
  text: {
    color: Color.neutrals500,
    right: 8,
    letterSpacing: 1,
    top: 8,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    position: "absolute",
  },
  iconsperson: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  visits: {
    color: Color.black,
  },
  iconText: {
    backgroundColor: Color.secondary300,
  },
  text1: {
    lineHeight: 24,
    color: Color.black,
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  number: {
    backgroundColor: Color.secondary100,
  },
  tagsvisits: {
    left: 12,
    borderRadius: Border.br_8xs,
    top: 88,
    flexDirection: "row",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  cardsdate: {
    width: 120,
  },
  cardsdate1: {
    height: 120,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  text6: {
    right: 8,
    letterSpacing: 1,
    top: 8,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    position: "absolute",
    color: Color.black,
  },
  tagsvisits3: {
    left: 12,
    borderRadius: Border.br_8xs,
    top: 88,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  visits13: {
    color: Color.white,
  },
  iconText13: {
    backgroundColor: Color.green400,
  },
  number13: {
    backgroundColor: Color.green100,
  },
  tagsvisits13: {
    left: 12,
    borderRadius: Border.br_8xs,
    top: 88,
    flexDirection: "row",
  },
  iconText18: {
    backgroundColor: Color.red500,
  },
  number18: {
    backgroundColor: Color.red100,
  },
  text52: {
    color: Color.black,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
  },
  highlight6: {
    right: 4,
    backgroundColor: Color.pastelsSkyBlue,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_8xs,
    top: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  month: {
    top: 48,
    flexWrap: "wrap",
    overflow: "hidden",
  },
  mon: {
    color: Color.dimgray,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
  },
  monday: {
    width: 120,
    alignItems: "center",
  },
  tuesday: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  days: {
    justifyContent: "flex-end",
    top: 0,
  },
  calendar: {
    top: 144,
    height: 696,
  },
  iconsarrow1: {
    height: 48,
    overflow: "hidden",
  },
  june2023: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 1.6,
    lineHeight: 28,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    marginLeft: 56,
    textAlign: "center",
    color: Color.darkslategray,
  },
  iconsarrow2: {
    marginLeft: 56,
    height: 48,
    overflow: "hidden",
  },
  monthName: {
    marginLeft: -226,
    left: "50%",
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
    marginLeft: 8,
    color: Color.black,
    fontSize: FontSize.heading3600_size,
    textAlign: "left",
  },
  buttonsyellow: {
    borderRadius: Border.br_7xs,
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_29xl,
    backgroundColor: Color.secondary300,
    right: 0,
    marginTop: -24,
    justifyContent: "center",
  },
  calendarNav: {
    top: 32,
    height: 48,
  },
  mainSection: {
    width: "74.38%",
    right: "0%",
    left: "25.62%",
    backgroundColor: Color.neutrals200,
    height: 904,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  body: {
    right: 32,
    bottom: 32,
    borderRadius: Border.br_13xl,
    top: 88,
    backgroundColor: Color.white,
    left: 112,
    overflow: "hidden",
  },
  calendarPage: {
    overflow: "hidden",
    height: 1024,
    width: "100%",
    flex: 1,
    backgroundColor: Color.darkslategray,
  },
});

export default CalendarPage;
