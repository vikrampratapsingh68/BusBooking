import React, { Fragment, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../../constants/Colors';

import UCHeaderBar from '../../../components/UCHeaderBar';
import UCIcon, { Icons } from '../../../components/UCIcon';
import UCBlurOverlay from '../../../components/UserGuide/UCBlurOverlay';
import UCLogin from '../../../components/Auth/UCLogin';
import DateContainer from './DateContainer';

import BusListContainer from './BusListContainer/BusListContainer';
const Months: any = [
  'Jan','Feb','Mar','Apr','May','Jun',
  'Jul','Aug','Sep','Oct','Nov','Dec',
];
const BusListScreen = (props:any) => {
  
  const day=props.route.params.TravelDate.day;
  const month=Months[props.route.params.TravelDate.month];
  const year=props.route.params.TravelDate.year;
  const origin=props.route.params.TravelOrigin;
  const destination=props.route.params.TravelDestination;
  const navigation = useNavigation()
  const [isActive, setIsActive] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Cheapest');
  const [loginBox, setLoginBox] = useState(false);
  return (
    <Fragment>

      <UCHeaderBar>
        <View
          style={styles.headerContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <UCIcon
                type={Icons.Ionicons}
                name={'chevron-back-sharp'}
                color={Colors.white}
                onPress={() => navigation.goBack()}
                size={30}
              />
            </View>
            <View>
              <Text style={styles.headerTitle}>
                {origin}{'  '}
                <UCIcon
                  type={Icons.Fontisto}
                  name={'arrow-right-l'}
                  color={Colors.white}
                  size={10}
                />
                {'  '}{destination}
                {"\n"}{day}{' '}{month}{' '}{year}
              </Text>       
            </View>
            <View style={{ marginLeft: 15 }}>
              <UCIcon
                type={Icons.Ionicons}
                name={'pencil-sharp'}
                color={Colors.white}
                size={20}
              />
            </View>
          </View>
          <View>
            <UCIcon
              type={Icons.Ionicons}
              name={'notifications-outline'}
              color={Colors.white}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
      </UCHeaderBar>
      <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View>
            </View>
          <View style={styles.container}>
            <View style={styles.flexBox}>
            </View>
            <BusListContainer /> 
          </View>
        </View>
        {loginBox && (
          <UCLogin
            isActive={loginBox}
            bottomPanelHandler={(status: boolean) => {
              setLoginBox(status);
            }}
          />
        )}
        {(loginBox || isActive) && <UCBlurOverlay blur={5} />}
      </SafeAreaView>

    </Fragment>
  );
};

export default BusListScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitle: {
    color: Colors.white,
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
  },
  headerSubtitle: {
    color: Colors.white,
    marginLeft: 10,
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
  },
  container: {
    backgroundColor: '#E5EDF4',
    borderRadius: 20,
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 10,
  },
});
