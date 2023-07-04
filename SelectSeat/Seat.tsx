import { View,Text } from "react-native";
import UpperDeck from "./UpperDeck";
import LowerDeck from "./LowerDeck";
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UCButton from "../../../components/UCButton";
import { useNavigation } from "@react-navigation/native";
import  PickAndDrop  from "./PickAndDrop";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../../../navigation/Routes";
const Tab = createMaterialTopTabNavigator();
function Seat({navigation}:any){
  const { navigate } =
     useNavigation<NativeStackNavigationProp<Routes, 'PickAndDrop'>>();
   return(
    <View style={{flex:1}}>
       <Tab.Navigator>
  <Tab.Screen name="Lower" component={LowerDeck} />
  <Tab.Screen name="UPPER" component={UpperDeck} />
</Tab.Navigator>
</View>
   )
}
export default Seat;