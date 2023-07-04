import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from '../../../../constants/Colors';
const arrow="------------->";
const BusListCard = (props: any) => {
  return (
    
    <View style={props.item?.regularFare && styles.cheapFareContainer} >
  
      <View style={styles.subContainer}>

      {/* <Image
  source={{uri: 'app_icon'}}
  style={{marginTop:40,marginBottom:10,width: 40, height: 20,alignItems:'center'}}
/> */}
        <View style={[styles.flexBox, {alignItems: 'center'}]}>
          <View style={{flexDirection: 'row',height:100}}>
            <View>
              <Text
                style={{fontSize: 14, color: Colors.lightBlack, fontFamily: 'OpenSans-SemiBold'}}>
               PUNE MUMBAI TRAVELS{'                 '}
               <Text
                style={{fontSize: 12, color: '#00a833', fontFamily: 'OpenSans-SemiBold'}}>
                10 Seats Left 
              </Text>    
              </Text>
              <Text
                style={{marginTop:7,fontSize: 12, color: Colors.lightBlack, fontFamily: 'OpenSans-SemiBold'}}>
               AC Seater  
             
              </Text>
               
            </View>
            <View>
              <Text
                style={{fontSize: 10, color: Colors.lightBlack, fontFamily: 'OpenSans-SemiBold'}}>
                
              </Text>
            </View>
          </View>
          <Text style={[styles.positionConatiner, {bottom: 23}]}>2hr 05m</Text>
         
          <Text style={{marginTop:20,marginLeft:-375,fontSize: 20, color: '#165eab', fontFamily: 'OpenSans-Regular'}}>
            9:30
            {'  '}
            <Text style={{color: '#165eab'}}>{arrow}</Text>
            {'  '}
            11:35
          </Text>
          <Text style={styles.priceText}>₹ 900</Text>
        </View>
      </View>

    </View>
  );
};

export default BusListCard;

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: Colors.white,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20
  },
  cheapFareContainer: {
    backgroundColor: '#FAEFE7',
    paddingBottom: 5,
    marginTop: 8
  },
  cheapFareHeader: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: '#E89256',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cheapeFareTitle: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: 'OpenSans-SemiBold'
  },
  cheapstText: {
    textAlign: 'right',
    color: '#4885E0',
    fontSize: 10,
    fontFamily: 'OpenSans-SemiBold'
  },
  positionConatiner: {
    color: Colors.darkGray,
    fontSize: 12,
    position: 'absolute',
    left: '23%',
    marginBottom:20,
    fontFamily: 'OpenSans-Regular'
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'OpenSans-SemiBold'
  },
});
