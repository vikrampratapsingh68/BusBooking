import React from 'react';
import { FlatList, View ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { flightList } from '../data';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BusListCard from './BusListCard';
import { Routes } from '../../../../navigation/Routes';

const BusListContainer = (props:any) => {
    const navigation = useNavigation();
    const { navigate } =
    useNavigation<NativeStackNavigationProp<Routes, 'SelectSeat'>>();
    return(
    <FlatList style={{marginLeft:-10,marginRight:-10,marginTop:-30}}
      showsVerticalScrollIndicator={false}
      data={flightList}
      keyExtractor={(item, index) => index.toString()}
      onEndReachedThreshold={0.1}
      contentContainerStyle={{paddingBottom: 200}}
      renderItem={({item, index}) => (
        <>
          <TouchableOpacity onPress={()=> {
             navigate('SelectSeat');
          }}>
          <BusListCard item={item}/>
          </TouchableOpacity>
        </>
      )}
    />
  );
};

export default BusListContainer;
