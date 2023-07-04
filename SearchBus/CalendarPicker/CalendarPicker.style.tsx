import { StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

export const CalendarPickerStyle = StyleSheet.create({
    headerContaier: {
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: Colors.white,
    },
    tabContainer: {
      width: '50%',
      borderBottomWidth: 1,
      paddingBottom: 20,
      borderBottomColor: '#CCD9E7',
    },
    tabTitle: {
      textAlign: 'center',
      marginRight: 10,
      fontSize: 12,
      color: '#CCD9E7',
      fontFamily: 'OpenSans-Regular'
    },
    tab_subTitle: {
      textAlign: 'center',
      color: Colors.lightBlack,
      fontSize: 14,
      marginTop: 5,
      fontFamily: 'OpenSans-Medium'
    },
    footerContainer: {
      padding: 10,
      zIndex: 30,
      width: '100%',
      height: 100,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 20,
      borderTopEndRadius: 20,
      shadowOpacity: 0.25,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: Colors.black,
      elevation: 4,
    },
  });
  