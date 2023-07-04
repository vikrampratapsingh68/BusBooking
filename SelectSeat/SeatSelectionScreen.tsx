import React, { useRef, useState } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Alert} from 'react-native';
import UCHeaderBar from '../../../components/UCHeaderBar';
import { useNavigation} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBusScreen from '../SearchBus/SearchBusScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import PickAndDrop from './PickAndDrop';
//import Dropdown from './PickAndDrop';
import Policies from './Policies';
import Seat from './Seat';
import UCButton from '../../../components/UCButton';
//import CustomDropdown from './PickAndDrop';
const Tab = createMaterialTopTabNavigator();
 const SeatSelectionScreen = ({navigation}:any) => {
  const [selectedSeats, setSelectedSeats] = useState([]);



  return (
    <SafeAreaView style={{flex:1,marginTop:-50}}>
            <UCHeaderBar 
            title={'SelectSeat'}
            onPress={() => navigation.goBack()}/>
        <Tab.Navigator>
         <Tab.Screen name="SEATS" component={Seat}  />
         <Tab.Screen name="PICK AND DROP" component={PickAndDrop} />
         <Tab.Screen name="POLICIES" component={Policies} />
       </Tab.Navigator>
       <View style={{marginTop:10}}>
  <UCButton style={{marginLeft:250,marginBottom:8,width:100}} title='Next' 
     onPress={() => {
       navigation.navigate('PICK AND DROP');
     }}
  />
  </View>
       </SafeAreaView>
  );
};
export default SeatSelectionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  seat: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'blue',
  },
});
