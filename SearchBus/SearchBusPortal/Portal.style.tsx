import Colors from "../../../../constants/Colors";
import {StyleSheet,Dimensions} from 'react-native';

export const PortalStyle = StyleSheet.create({
    searchFlightContainer: {
      backgroundColor: Colors.white,padding: 20,paddingTop: 0
    },
    flexBox: {
      flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'
    },
    locationContainer: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9C4CA',
      width: '48%',
      marginTop: 30,
      position: 'relative',
      padding: 14
    },
    locationLabel: {
      position: 'absolute',
      top: -10,
      left: 15,
      color: Colors.darkGray,
      backgroundColor: Colors.white,
      paddingLeft: 4,
      paddingRight: 4,
      fontSize: 12,
      fontFamily: 'OpenSans-Regular'
    },
    textField: {
      marginTop: 20,
      width: '48%',
    },
    title: {
      fontSize: 22,
      color: Colors.black,
      fontFamily: 'OpenSans-Regular'
    },
    subTitle: {
      fontSize: 14,
      color: '#545454',
      fontFamily: 'OpenSans-Regular'
    },
    swapBox: {
      position: 'absolute',
      backgroundColor: Colors.darkGreen,
      width: 30,
      height: 29,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      top: '50%',
      left: (Dimensions.get('window').width / 2) - 35,
      zIndex: 10,
    },
    travllerContainer: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9C4CA',
      marginTop: 30,
      position: 'relative',
      padding: 15,
    },
    infoTabContainer: {
      flexDirection: 'row', 
      marginTop: 30, 
      alignItems: 'center'
    },
    infoTab: {
      borderRadius: 100,
      borderColor: '#298158',
      borderWidth: 1,
      marginRight: 12,
      padding: 12,
      paddingBottom: 10,
      paddingTop: 8,
      flexDirection: 'row',
      alignItems: 'center'
    },
    infoImage: {
      resizeMode: 'contain',
      width: 20,
      height: 20,
      marginRight: 6
    },
    infoText: {
      color: '#298158', 
      fontSize: 12,
      fontFamily: 'OpenSans-Regular'
    }
  });
  