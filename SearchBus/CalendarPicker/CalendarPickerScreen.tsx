import React, {useEffect, useState} from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import { CalendarPickerStyle } from './CalendarPicker.style';

import {Routes} from '../../../../navigation/Routes';

import CalendarList from '../../../../components/Calendar/CalendarList';
import UCHeaderBar from '../../../../components/UCHeaderBar';
import UCButton from '../../../../components/UCButton';

const CalendarPickerScreen = ({route}: any) => {
  const Navigation = useNavigation();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<Routes, 'CalendarPicker'>>();
  const tabList = ['Departure', 'Return'];
  const [selectedTab, setSelectedTab] = useState(route.params?.dateType);
  const [departureDate, setDepartureDate] = useState(
    route.params?.choosedDepartureDate,
  );
  const [returnDate, setReturnDate] = useState(route.params?.choosedReturnDate);
  const Months: any = [
    'Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec',
  ];

  useEffect(() => {
    if (departureDate.year > returnDate.year) {
      setReturnDate({
        day: '',
        month: '',
        year: '',
      });
    } else {
      if (departureDate.month > returnDate.month) {
        setReturnDate({
          day: '',
          month: '',
          year: '',
        });
      } else if (
        departureDate.month === returnDate.month &&
        departureDate.day > returnDate.day
      ) {
        setReturnDate({
          day: '',
          month: '',
          year: '',
        });
      }
    }
  }, [departureDate]);

  const selectDateHandler = () => {
    if (route.params?.tripType === 'One Way') {
      if (selectedTab === 'Departure') {
        navigate('SearchFlight', {
          selectedDepartureDate: departureDate,
        });
      } else {
        navigate('SearchFlight', {
          selectedReturnDate: returnDate,
        });
      }
    } else if (route.params?.tripType === 'Round Way') {
      if (selectedTab === 'Departure') {
        setSelectedTab('Return');
      } else if (selectedTab === 'Return' && returnDate.day !== '') {
        navigate('SearchFlight', {
          selectedDepartureDate: departureDate,
          selectedReturnDate: returnDate,
        });
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <UCHeaderBar
          title={'Search Flights'}
          onPress={() => Navigation.goBack()}
        />
        <View style={CalendarPickerStyle.headerContaier}>
          {tabList.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                route.params?.tripType === 'Round Way' && setSelectedTab(item)
              }
              style={[
                CalendarPickerStyle.tabContainer,
                selectedTab === item && {
                  borderBottomColor: '#32996A',
                  borderBottomWidth: 2,
                },
              ]}>
              <Text
                style={[
                  CalendarPickerStyle.tabTitle,
                  selectedTab === item && {color: '#32996A'},
                ]}>
                {item}
              </Text>
              {item === 'Departure' && (
                <Text style={CalendarPickerStyle.tab_subTitle}>
                  {departureDate.day} {Months[departureDate.month]},{' '}
                  {departureDate.year}
                </Text>
              )}
              {item === 'Return' && (
                <>
                  {returnDate.day !== '' ? (
                    <Text style={CalendarPickerStyle.tab_subTitle}>
                      {returnDate.day} {Months[returnDate.month]},{' '}
                      {returnDate.year}
                    </Text>
                  ) : (
                    <Text style={[CalendarPickerStyle.tab_subTitle, {color: '#798D9B'}]}>
                      + Add Return Date
                    </Text>
                  )}
                </>
              )}
            </TouchableOpacity>
          ))}
        </View>
        {selectedTab === 'Departure' ? (
          <CalendarList
            setTabDate={(date: any) => setDepartureDate(date)}
            selectedTabDate={departureDate}
          />
        ) : (
          <CalendarList
            setTabDate={(date: any) => setReturnDate(date)}
            selectedTabDate={returnDate}
            departureDate={departureDate}
          />
        )}
      </View>
      <View style={CalendarPickerStyle.footerContainer}>
        <UCButton title={'Select Date'} onPress={selectDateHandler} />
      </View>
    </View>
  );
};

export default CalendarPickerScreen;

