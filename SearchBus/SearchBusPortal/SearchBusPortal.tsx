import React, {useState, useEffect} from 'react';
import {
  Animated,
  Easing,
  Image,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {PortalStyle} from './Portal.style';

import Colors from '../../../../constants/Colors';

import UCIcon, {Icons} from '../../../../components/UCIcon';
import UCButton from '../../../../components/UCButton';

const SearchBusPortal = (props: any) => {

  const [clicked, setClicked] = useState(false);
  const rotateAnim = new Animated.Value(0);

  const Months: any = [
    'Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec',
  ];
  const info_tabList = [
    {
      tab: 'Armed Forces',
      popupText:
        'Select this option if you are a serving or a retired Fauji, or if you are a Dependent with a valid Dependent Identity Card.',
    },
    {
      tab: 'Fauji Family',
      popupText:
        'Select this option if you are a serving or a retired Fauji, or if you are a Dependent with a valid Dependent Identity Card.',
    },
  ];

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setClicked(!clicked);
    props.swapIconHandler();
  };

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [clicked]);

  const rotateStyle = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [clicked ? '0deg' : '180deg', clicked ? '180deg' : '0deg'],
  });

  return (
    <View style={PortalStyle.searchFlightContainer}>
      <View>
      <Image style={{width:'120%',height:115}}source={require('../../../../assets/Images/bus_mobile_banner.png')} />
      </View>
      <View style={PortalStyle.flexBox}>
        <TouchableWithoutFeedback onPress={toggle}>
          <Animated.View
            style={[PortalStyle.swapBox, {transform: [{rotate: rotateStyle}]}]}>
            <UCIcon
              type={Icons.AntDesign}
              name={'swap'}
              size={20}
              color={Colors.white}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={PortalStyle.locationContainer}
          onPress={() => props.navigate('SearchCity', {type: 'origin'})}>
          <Text style={PortalStyle.locationLabel}>Origin</Text>
          <Text style={PortalStyle.title} numberOfLines={1}>
            {props.origin.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={PortalStyle.locationContainer}
          onPress={() =>
            props.navigate('SearchCity', {type: 'destination'})
          }>
          <Text style={PortalStyle.locationLabel}>Destination</Text>
             <Text style={PortalStyle.title} numberOfLines={1}>
            {props.destination.title}
          </Text> 
        </TouchableOpacity>
      </View>
      <View style={PortalStyle.flexBox}> 
        <TouchableOpacity
          style={[PortalStyle.locationContainer, PortalStyle.flexBox]}
          onPress={() =>
            props.navigate('CalendarPicker', {
              tripType: props.selectedTab,
              dateType: 'Departure',
              choosedDepartureDate: props.departureDate,
              choosedReturnDate: props.returnDate,
            })
          }>
          <Text style={PortalStyle.locationLabel}>Travel Date</Text>
          <Text
            style={[PortalStyle.subTitle, {color: Colors.black}]}
            numberOfLines={1}>
            {props.departureDate.day} {Months[props.departureDate.month]},{' '}
            {props.departureDate.year}
          </Text>
          <UCIcon
            type={Icons.MaterialCommunityIcons}
            name="calendar-blank-outline"
            color={Colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[PortalStyle.locationContainer, PortalStyle.flexBox]}
          onPress={() =>
            props.navigate('CalendarPicker', {
              tripType: props.selectedTab,
              dateType: 'Return',
              choosedDepartureDate: props.departureDate,
              choosedReturnDate: props.returnDate,
            })
          }>
          {props.returnDate.day !== '' ? (
            <>
              <Text style={PortalStyle.locationLabel}>Return</Text>
              <Text
                style={[PortalStyle.subTitle, {color: Colors.black}]}
                numberOfLines={1}>
                {props.returnDate.day} {Months[props.returnDate.month]},{' '}
                {props.returnDate.year}
              </Text>
            </>
          ) : (
            <Text
              style={[
                PortalStyle.subTitle,
                {fontFamily: 'OpenSans-Bold', color: '#778B99', fontSize: 14},
              ]}>
              + Add Return
            </Text>
          )}
          <UCIcon
            type={Icons.MaterialCommunityIcons}
            name="calendar-blank-outline"
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={PortalStyle.flexBox}>
        {info_tabList.map((item, index) => (
          <View key={index} style={PortalStyle.infoTabContainer}>
            <TouchableOpacity
              onPress={() => props.selectedInfoTabHandler(item.tab)}
              style={[
                PortalStyle.infoTab,
                props.selectedInfoTab === item.tab && {
                  backgroundColor: '#0A1B29',
                  borderColor: '#0A1B29',
                },
              ]}>
              {item.tab === 'Fauji Family' && (
                <Image
                  source={require('../../../../assets/Images/Home/Flights/Fauji.png')}
                  style={PortalStyle.infoImage}
                />
              )}
              <Text
                style={[
                  PortalStyle.infoText,
                  props.selectedInfoTab === item.tab && {color: Colors.white},
                ]}>
                {item.tab}
              </Text>
            </TouchableOpacity>
            <UCIcon
              type={Icons.MaterialIcons}
              name={'info-outline'}
              color={Colors.primary}
              size={20}
              onPress={() => {
                props.toolTipContentHandler(item.popupText);
                item.tab === 'Armed Forces'
                  ? props.showArmedTooltipHandler(!props.showArmedTooltip)
                  : props.showFaujiTooltipHandler(!props.showFaujiTooltip);
              }}
            />
          </View>
        ))}
      </View>
      <UCButton
        title="Search Bus"
        onPress={() => props.navigate('BusList',
        { TravelOrigin:props.origin.title,
          TravelDestination:props.destination.title,
          TravelDate:props.departureDate
        }
        )}
      />
    </View>
  );
};

export default SearchBusPortal;
