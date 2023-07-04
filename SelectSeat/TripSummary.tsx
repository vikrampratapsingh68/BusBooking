import UCHeaderBar from "../../../components/UCHeaderBar";
import React from "react";
import {useState} from 'react'
import{View,Text,Image,Button,TextInput,StyleSheet,Alert} from 'react-native' 
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import UCButton from "../../../components/UCButton";
import { RadioButton } from 'react-native-paper';
export const TripSummary=()=>{
    const navigation = useNavigation()
    const [text,OnTextChange]=React.useState('')
    const [inputValue, setInputValue] = useState('');
    const [isRequiredFilled, setIsRequiredFilled] = useState(false); 
    const handleInputChange = (text:any) => {
        setInputValue(text);
        setIsRequiredFilled(text.length > 0);
      };
      const handleSubmit = () => {
        if (!isRequiredFilled) {
          Alert.alert('Please fill out the required field');
          return;
        }
    }
    const [checked, setChecked] = React.useState('first');
    return(
        <View>
            <UCHeaderBar 
            onPress={() => navigation.goBack()}
            title='UdChalo '></UCHeaderBar>
            <SafeAreaView>
                <View style={{display:'flex',flexDirection:'column'}}>
                    <Text style={{marginLeft:10,fontSize:20}}>Trip Summary</Text>
                    <Text style={{marginLeft:30,marginTop:50}}>ONWARD JOURNEY</Text>
                    <Text style={{marginLeft:30,marginTop:0}}>Date: Fri, 12 May 2023 </Text>
                    <Text style={{marginLeft:10,marginTop:60,fontSize:20}}>Passenger Information </Text>
                    <Text style={{marginLeft:10,marginTop:10,fontSize:16}}>Passenger 1  |  Seat 2  |   Primary</Text>       
            <TextInput 
             style={
                styles.name
              }
             placeholder="Full Name" onChangeText={handleInputChange} value={inputValue} />
             {!isRequiredFilled && <Text style={{ marginLeft:20,color: 'red' }}>This field is required</Text>}
             <Text style={{marginTop:10,marginLeft:10,fontSize:12}}>Gender</Text>  
            <View style={{display:'flex',flexDirection:'row',marginTop:0}}>
    
                <View style={{display:'flex',flexDirection:'row'}}>
                   
            <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={{marginTop:5,fontSize:14}}>Male</Text>
      </View>
      <View style={{marginLeft:10,display:'flex',flexDirection:'row'}}>
            <RadioButton
              value="second"
           status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /> 
      <Text style={{marginTop:5,fontSize:14}}>Female</Text>
      </View>
      <View style={{marginTop:-15,display:'flex',flexDirection:'column'}}>
      <TextInput 
             style={
                styles.age
              }
             placeholder="Age" onChangeText={handleInputChange} value={inputValue} />
             {!isRequiredFilled && <Text style={{ marginLeft:20,color: 'red' }}>This field is required</Text>}
             </View>
            </View>
            <View style={{marginTop:350}}>
                <UCButton
                title='CONTINUE TO BOOKING'
                />
            </View>
            <Text style={{marginLeft:10,marginTop:50,fontSize:20}}>Passenger Information </Text>
            </View>
            </SafeAreaView>
        </View>
    )
  
}
const styles = StyleSheet.create({
    name: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginRight:20,
        marginLeft:20
     },
     age: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginRight:50,
        marginLeft:20
     },
     
  });
  