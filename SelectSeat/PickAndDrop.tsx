import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import UCButton from '../../../components/UCButton';
import { Routes } from '../../../navigation/Routes';
const PickAndDrop = () => {
  const navigation = useNavigation();
    const { navigate } =
    useNavigation<NativeStackNavigationProp<Routes, 'SelectSeat'>>();
  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Pune Station'},
      {key:'2', value:'Agra Cantt'},
  ]

  return(
    <SafeAreaView>
        <View style={{display:'flex',flexDirection:'column'}}>
        <Text style={{marginLeft:5,color:'#000057',fontSize:20 ,marginTop:20}}>Boarding Point:</Text>
       <View style={{marginTop:12,marginLeft:5,width:250}}>
        <SelectList 
         setSelected={(val:any) => setSelected(val)} 
         data={data} 
         save="value"
     />
     </View>   
        </View>
        <View style={{marginTop:30,display:'flex',flexDirection:'column'}}>
        <Text style={{marginLeft:5,color:'#000057',fontSize:20 ,marginTop:20}}>Dropping Point:</Text>
       <View style={{marginTop:12,marginLeft:5,width:250}}>
        <SelectList 
         setSelected={(val:any) => setSelected(val)} 
         data={data} 
         save="value"
     />
     
     </View>
      <View style={{marginLeft:5,display:'flex',flexDirection:'column'}}>
      <Text style={{marginTop:20,fontSize:16,color:'#000057',fontWeight:'500'}}>Fare Details{'                                                '}Rs. 105</Text>
     <Text style={{marginTop:5,fontSize:14,color:'#000057',}}>Bus fare (*Inclusive of taxes)</Text>
     <Text style={{marginTop:10,fontSize:14,color:'#000057',}}>Total discounts{'                                                   '}Rs. 5</Text>
     <Text style={{marginTop:10,fontSize:14,color:'#000057',fontWeight:'500'}}>Total Amount{'                                                      '}Rs. 100</Text>
     <Text style={{marginTop:0,fontSize:12,color:'#000057',}}>(Total Amount inclusive of taxes)</Text>
        </View>  
           
        </View>
        <UCButton
        style={{marginTop:40}}
         title='PROCEED TO BOOK' 
        onPress={()=>{
          navigate('TripSummary')
        }}
        />
       
    </SafeAreaView>
  )

};
export default PickAndDrop;