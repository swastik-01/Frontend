import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const AppointmentPopupBookAppoi = ({ onClose }) => {
  return (
    <View style={styles.appointmentPopupBookAppoi}>
      <Text style={[styles.appointmentDetails, styles.june2023Typo]}>
        Appointment Details
      </Text>
      <View style={[styles.selectTime, styles.selectTimePosition]}>
        <Text style={[styles.label, styles.labelTypo]}>Select Time Slot</Text>
        <View style={styles.timeSlots}>
          <View style={[styles.tagstime, styles.tagstimeFlexBox]}>
            <Text style={[styles.am, styles.textTypo6]}>9:00 AM</Text>
          </View>
          <View style={[styles.tagstime1, styles.tagstimeFlexBox]}>
            <Text style={[styles.am, styles.textTypo6]}>11:00 AM</Text>
          </View>
          <View style={[styles.tagstime1, styles.tagstimeFlexBox]}>
            <Text style={[styles.am, styles.textTypo6]}>2:00 PM</Text>
          </View>
          <View style={[styles.tagstime1, styles.tagstimeFlexBox]}>
            <Text style={[styles.am, styles.textTypo6]}>4:00 PM</Text>
          </View>
          <View style={[styles.tagstime1, styles.tagstimeFlexBox]}>
            <Text style={[styles.am, styles.textTypo6]}>7:00 PM</Text>
          </View>
        </View>
      </View>
      <View style={[styles.buttonsblue, styles.tagstimeFlexBox]}>
        <Text style={[styles.addPatient, styles.labelTypo]}>
          Book Appointment
        </Text>
      </View>
      <View style={[styles.selectDate, styles.selectDatePosition]}>
        <Text style={[styles.label, styles.labelTypo]}>Select Date</Text>
        <View style={[styles.elementsdateSelector, styles.tagstimeFlexBox]}>
          <Image
            style={styles.iconsarrowLayout}
            contentFit="cover"
            source={require("../assets/iconsarrow3.png")}
          />
          <Text style={[styles.june2023, styles.labelLayout]}>June 2023</Text>
          <Image
            style={[styles.iconsarrow1, styles.iconsarrowLayout]}
            contentFit="cover"
            source={require("../assets/iconsarrow4.png")}
          />
          <View style={styles.days}>
            <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
            <Text style={[styles.tu, styles.moTypo]}>Tu</Text>
            <Text style={[styles.we, styles.moTypo]}>We</Text>
            <Text style={[styles.th, styles.moTypo]}>Th</Text>
            <Text style={[styles.fr, styles.moTypo]}>Fr</Text>
            <Text style={[styles.sa, styles.moTypo]}>Sa</Text>
            <Text style={[styles.su, styles.moTypo]}>Su</Text>
          </View>
          <Image
            style={styles.dividerIcon}
            contentFit="cover"
            source={require("../assets/divider.png")}
          />
          <View style={styles.calendar}>
            <View style={styles.wrapper}>
              <Text style={[styles.am, styles.textTypo6]}>1</Text>
            </View>
            <Text style={[styles.text1, styles.textTypo6]}>2</Text>
            <Text style={[styles.text2, styles.textTypo6]}>3</Text>
            <Text style={[styles.text3, styles.textTypo6]}>4</Text>
            <Text style={[styles.text4, styles.textTypo5]}>5</Text>
            <Text style={[styles.text5, styles.textTypo4]}>12</Text>
            <Text style={[styles.text6, styles.textTypo4]}>19</Text>
            <Text style={[styles.text7, styles.textTypo6]}>26</Text>
            <Text style={[styles.text8, styles.textTypo5]}>6</Text>
            <Text style={[styles.text9, styles.textTypo6]}>13</Text>
            <Text style={[styles.text10, styles.textTypo3]}>20</Text>
            <Text style={[styles.text11, styles.textTypo6]}>27</Text>
            <Text style={[styles.text12, styles.textTypo5]}>7</Text>
            <Text style={[styles.text13, styles.textTypo2]}>14</Text>
            <Text style={[styles.text14, styles.textTypo2]}>21</Text>
            <Text style={[styles.text15, styles.textTypo6]}>28</Text>
            <Text style={[styles.text16, styles.textTypo6]}>15</Text>
            <Text style={[styles.text17, styles.textTypo1]}>22</Text>
            <Text style={[styles.text18, styles.textTypo1]}>29</Text>
            <Text style={[styles.text19, styles.textTypo5]}>9</Text>
            <Text style={[styles.text20, styles.textTypo6]}>16</Text>
            <Text style={[styles.text21, styles.textTypo]}>23</Text>
            <Text style={[styles.text22, styles.textTypo]}>30</Text>
            <Text style={[styles.text23, styles.textTypo5]}>10</Text>
            <Text style={[styles.text24, styles.textTypo6]}>17</Text>
            <Text style={[styles.text25, styles.textTypo6]}>24</Text>
            <Text style={[styles.text26, styles.textTypo6]}>1</Text>
            <Text style={[styles.text27, styles.textTypo6]}>29</Text>
            <Text style={[styles.text28, styles.textTypo3]}>30</Text>
            <Text style={[styles.text29, styles.textTypo2]}>31</Text>
            <Text style={[styles.text30, styles.textTypo5]}>11</Text>
            <Text style={[styles.text31, styles.textTypo6]}>18</Text>
            <Text style={[styles.text32, styles.textTypo6]}>25</Text>
            <Text style={[styles.text33, styles.textTypo6]}>2</Text>
            <Text style={[styles.text34, styles.textTypo5]}>8</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  june2023Typo: {
    textAlign: "left",
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
  },
  selectTimePosition: {
    width: 384,
    left: "50%",
    top: "50%",
    marginLeft: -192,
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textAlign: "left",
  },
  tagstimeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo6: {
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
  },
  selectDatePosition: {
    left: "50%",
    top: "50%",
    marginLeft: -192,
    position: "absolute",
  },
  labelLayout: {
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
  },
  iconsarrowLayout: {
    height: 48,
    width: 48,
    overflow: "hidden",
  },
  moTypo: {
    fontFamily: FontFamily.body300,
    fontWeight: "300",
    color: Color.neutrals500,
    top: 0,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
    position: "absolute",
  },
  textTypo5: {
    top: 29,
    color: Color.black,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
    position: "absolute",
  },
  textTypo4: {
    left: 2,
    color: Color.black,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
    position: "absolute",
  },
  textTypo3: {
    left: 34,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    left: 70,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    left: 102,
    color: Color.black,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    left: 136,
    color: Color.black,
    fontFamily: FontFamily.body400,
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    textAlign: "left",
    position: "absolute",
  },
  appointmentDetails: {
    marginTop: -298,
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    color: Color.darkslategray,
    left: "50%",
    top: "50%",
    marginLeft: -192,
    position: "absolute",
  },
  label: {
    lineHeight: 20,
    fontSize: FontSize.body1400_size,
    color: Color.darkslategray,
  },
  am: {
    color: Color.black,
  },
  tagstime: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    width: 112,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#989898",
    borderStyle: "solid",
    borderRadius: Border.br_base,
  },
  tagstime1: {
    marginLeft: 24,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    width: 112,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#989898",
    borderStyle: "solid",
    borderRadius: Border.br_base,
  },
  timeSlots: {
    marginTop: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 384,
  },
  selectTime: {
    marginTop: 78,
  },
  addPatient: {
    fontSize: FontSize.heading3600_size,
    color: Color.white,
  },
  buttonsblue: {
    marginTop: 250,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.accentBlue,
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_xs,
    width: 384,
    left: "50%",
    top: "50%",
    marginLeft: -192,
    position: "absolute",
  },
  june2023: {
    marginLeft: 24,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.heading3600,
    fontWeight: "600",
  },
  iconsarrow1: {
    marginLeft: 24,
  },
  mo: {
    color: Color.neutrals500,
    left: 0,
  },
  tu: {
    left: 37,
    color: Color.neutrals500,
  },
  we: {
    left: 69,
    color: Color.neutrals500,
  },
  th: {
    left: 106,
    color: Color.neutrals500,
  },
  fr: {
    left: 139,
    color: Color.neutrals500,
  },
  sa: {
    left: 167,
    color: Color.neutrals500,
  },
  su: {
    left: 199,
    color: Color.neutrals500,
  },
  days: {
    width: 219,
    height: 19,
    marginLeft: 24,
  },
  dividerIcon: {
    width: 230,
    height: 2,
    marginLeft: 24,
  },
  wrapper: {
    top: -8,
    left: 101,
    padding: Padding.p_5xs,
    position: "absolute",
  },
  text1: {
    left: 141,
    top: 0,
    color: Color.black,
    position: "absolute",
  },
  text2: {
    left: 175,
    top: 0,
    color: Color.black,
    position: "absolute",
  },
  text3: {
    left: 208,
    top: 0,
    color: Color.black,
    position: "absolute",
  },
  text4: {
    left: 4,
  },
  text5: {
    top: 58,
  },
  text6: {
    top: 87,
  },
  text7: {
    top: 116,
    left: 0,
    color: Color.black,
    position: "absolute",
  },
  text8: {
    left: 38,
  },
  text9: {
    left: 36,
    top: 58,
    color: Color.black,
    position: "absolute",
  },
  text10: {
    top: 87,
    color: Color.black,
  },
  text11: {
    left: 35,
    top: 116,
    color: Color.black,
    position: "absolute",
  },
  text12: {
    left: 73,
  },
  text13: {
    top: 58,
    color: Color.black,
  },
  text14: {
    top: 87,
    color: Color.black,
  },
  text15: {
    left: 68,
    top: 116,
    color: Color.black,
    position: "absolute",
  },
  text16: {
    left: 104,
    top: 58,
    color: Color.black,
    position: "absolute",
  },
  text17: {
    top: 87,
  },
  text18: {
    top: 116,
  },
  text19: {
    left: 140,
  },
  text20: {
    left: 138,
    top: 58,
    color: Color.black,
    position: "absolute",
  },
  text21: {
    top: 87,
  },
  text22: {
    top: 116,
  },
  text23: {
    left: 172,
  },
  text24: {
    left: 173,
    top: 58,
    color: Color.black,
    position: "absolute",
  },
  text25: {
    left: 170,
    top: 87,
    color: Color.black,
    position: "absolute",
  },
  text26: {
    left: 177,
    top: 116,
    color: Color.neutrals500,
    position: "absolute",
  },
  text27: {
    color: Color.neutrals500,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text28: {
    color: Color.neutrals500,
    top: 0,
  },
  text29: {
    color: Color.neutrals500,
    top: 0,
  },
  text30: {
    left: 208,
  },
  text31: {
    left: 206,
    top: 58,
    color: Color.black,
    position: "absolute",
  },
  text32: {
    left: 204,
    top: 87,
    color: Color.black,
    position: "absolute",
  },
  text33: {
    left: 202,
    top: 116,
    color: Color.neutrals500,
    position: "absolute",
  },
  text34: {
    left: 106,
  },
  calendar: {
    width: 224,
    height: 136,
    marginLeft: 24,
  },
  elementsdateSelector: {
    width: 258,
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#989898",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
  },
  selectDate: {
    marginTop: -222,
    width: 256,
    height: 76,
  },
  appointmentPopupBookAppoi: {
    width: 560,
    height: 724,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
  },
});

export default AppointmentPopupBookAppoi;
