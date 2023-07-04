import React, {useState, useEffect} from 'react';
import {Dimensions,StyleSheet,Text,View} from 'react-native';

import Colors from '../../../constants/Colors';

import UCFooter from '../../../components/UCFooter';
import AllOfferScreen from './AllOffer/AllOfferScreen';
import BankOfferScreen from './BankOffer/BankOfferScreen';
import BookingContainer from './BookingContainer/BookingContainer';
import FAQScreen from './FAQS/FAQScreen';
import QuickActionContainer from '../../../components/QuickAction/QuickActionContainer';
import SearchBusPortal from './SearchBusPortal/SearchBusPortal';

const SearchBusScreen = (props: any) => {
  let {width, height} = Dimensions.get('window');
  const [selectedInfoTab, setSelectedInfoTab] = useState('Armed Forces');
  const [showArmedTooltip,setShowArmedtooltip] = useState(false)
  const [showFaujiTooltip,setShowFaujitooltip] = useState(false)
  const [tooltipContent,setToolTipContent] = useState('')
  const [origin, setOrigin] = useState({
    title: 'Delhi',
    subTitle: 'DEL - Indira Gandhi International Airport',
  });
  const [destination, setDestination] = useState({
    title: 'Bengaluru',
    subTitle: 'BLR - Kempegowda International Airport',
  });
  const [departureDate, setDepartureDate] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [returnDate, setReturnDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  useEffect(() => {
    if (props.route.params?.startTitle) {
      setOrigin({
        title: props.route.params?.startTitle,
        subTitle: props.route.params?.startSubTitle,
      });
    }
    if (props.route.params?.endTitle) {
      setDestination({
        title: props.route.params?.endTitle,
        subTitle: props.route.params?.endSubTitle,
      });
    }
    if (props.route.params?.selectedDepartureDate) {
      setDepartureDate(props.route.params?.selectedDepartureDate);
    }
    if (props.route.params?.selectedReturnDate) {
      setReturnDate(props.route.params?.selectedReturnDate);
    }
  }, [props.route.params]);

  return (
    <View style={{backgroundColor: '#EAF0F6'}}>
      <SearchBusPortal
        origin={origin}
        destination={destination}
        departureDate={departureDate}
        returnDate={returnDate}
        //traveller={props.traveller}
        navigate={props.navigate}
        //selectedTab={props.selectedTab}
        selectedInfoTab={selectedInfoTab}
        showArmedTooltip={showArmedTooltip}
        showFaujiTooltip={showFaujiTooltip}
        showArmedTooltipHandler={(status: boolean)=>setShowArmedtooltip(status)}
        showFaujiTooltipHandler={(status: boolean)=>setShowFaujitooltip(status)}
        selectedInfoTabHandler={(data: string) => setSelectedInfoTab(data)}
        toolTipContentHandler={(data: string)=>setToolTipContent(data)}
        bottomPanelHandler={props.bottomPanelHandler}
        swapIconHandler={() => {
          setOrigin({
            title: destination.title,
            subTitle: destination.subTitle,
          });
          setDestination({
            title: origin.title,
            subTitle: origin.subTitle,
          });
        }}
      />
      {
        showArmedTooltip &&
        <View
        style={[
          styles.tooltipContainer,
          {
            top: height / 2 - 60,left: 25
          },
        ]}>
        <Text style={styles.toolTipText}>{tooltipContent}</Text>
      </View>
      }
      {
        showFaujiTooltip &&
        <View
        style={[
          styles.tooltipContainer,
          {
            top: height / 2 - 60,right: 25
          },
        ]}>
        <Text style={styles.toolTipText}>{tooltipContent}</Text>
      </View>
      }
      
       
    </View>
  );
};

export default SearchBusScreen;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: Colors.white,
    fontSize: 16,
    color: Colors.lightBlack,
    fontFamily: 'OpenSans-SemiBold',
    padding: 20
  },
  tooltipContainer: {
    position: 'absolute',
    padding: 15,
    backgroundColor: Colors.white,
    zIndex: 100,
    width: '65%',
    borderRadius: 8,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {width: -2, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  quickLinkContainer: {
    backgroundColor: Colors.white,
    paddingBottom: 16
  },
  qucikLinkText: {
    fontSize: 12,
    paddingHorizontal: 16,
    color: '#545454',
    lineHeight: 20,
    fontFamily: 'OpenSans-Regular'
  },
  toolTipText: {
    fontSize: 12,
    color: Colors.lightBlack,
    fontFamily: 'OpenSans-Regular'
  }
});
