import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Routes } from '../../../navigation/Routes';

import Colors from '../../../constants/Colors';

import UCHeaderBar from '../../../components/UCHeaderBar';
import UCIcon, { Icons } from '../../../components/UCIcon';
import SearchBusScreen from './SearchBusScreen';
import TravellerSelectPanel from './TravellerSwipePanel/TravellerSelectPanel';
import { travellerListJSON } from '../../../constants/StaticData';
import SupportPanel from './SupportPanel';
import UCBlurOverlay from '../../../components/UserGuide/UCBlurOverlay';
import VirtualizedView from '../../../components/VirtualizedView';

const SearchBusTab = ({ route }: any) => {
  const navigation = useNavigation();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<Routes, 'SearchBus'>>();
  const [isActive, setIsActive] = useState(false);
  const [supportActive, setSupportActive] = useState(false)
  const [selectedTab, setSelectedTab] = useState('One Way');
  const [travellerClass, setTravellerClass] = useState('Economy Class');
  const [traveller, setTraveller] = useState({
    adult: 1,
    child: 0,
    infant: 0,
    class: 'Economy Class',
  });
  return (
    <Fragment>

      <UCHeaderBar
        title={'Search Buses'}
        onPress={() => navigation.goBack()}
        icon={
          <TouchableOpacity style={styles.supportContainer}
            onPress={() => setSupportActive(true)}>
            <UCIcon
              type={Icons.Ionicons}
              name={'settings-outline'}
              color={Colors.white}
              size={20}
            />
            <Text style={styles.supportText}>Support</Text>
          </TouchableOpacity>
        }
      />

      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
              }}>
            </View>
          </View>

          <SearchBusScreen
            bottomPanelHandler={() => setIsActive(true)}
            traveller={traveller}
            navigate={navigate}
            route={route}
            selectedTab={selectedTab}
            selectedTabHandler={(data: string) => setSelectedTab(data)}
          />
        </ScrollView>

        {
          (supportActive || isActive) &&
          <UCBlurOverlay
            blur={5}
          />
        }

      </SafeAreaView>

    </Fragment>
  );
};

export default SearchBusTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 20,
    paddingBottom: 0
  },
  tabContainer: {
    borderRadius: 10,
    padding: 6,
    marginRight: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  supportContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  supportText: {
    fontSize: 12,
    color: Colors.white,
    marginLeft: 5,
    fontFamily: 'OpenSans-Bold'
  },
});
