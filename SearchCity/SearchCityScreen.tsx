import React, { Fragment, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Routes } from '../../../navigation/Routes';

import Colors from '../../../constants/Colors';
import { airportList } from '../../../constants/StaticData';

import UCHeaderBar from '../../../components/UCHeaderBar';
import UCIcon, { Icons } from '../../../components/UCIcon';
import TextField from '../../../components/UCTextField';
import axios from 'react-native';

const SearchCityScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<Routes, 'SearchAirport'>>();
  const [searchText, setSearchText] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { type } = route.params;
  const city=[];
  const url1= 'https://static.udchalo.com/configs/prod/homepage.json';
  const url2= 'https://bus-engine-stage-api-preprod.udchalo.com/search/cities/agra';
  const url3="http://http://localhost:3000/search/cities/delhi";
  const url4="https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
  fetch(url2,{
    method:'GET',  
   })
    .then(response => {
        console.log('Waiting for response from URL 3');
        console.log(response);
    })
    .catch(error => {  
        console.log(":::Request Failed :::")
        console.log(error);
    });
  return (
    <Fragment>

      <UCHeaderBar
        title={'Search City'}
        onPress={() => navigation.goBack()}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>

        <View
          style={styles.container}>

          <TextField
            label={'search'}
            value={searchText}
            icon={
              <UCIcon
                type={Icons.AntDesign}
                name={'search1'}
                color={Colors.primary}
                size={20}
              />
            }
            onChangeText={text => {
              setSearchText(text);
              setShowSuggestion(true);
            }}
            onBlur={() => setShowSuggestion(false)}
            onResetText={() => setSearchText('')}
          />

          {showSuggestion && searchText !== '' && (
            <View
              style={styles.listContainer}>

              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}>
                {airportList.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSearchText(item.city);
                      navigate(
                        'SearchBus',
                        type === 'origin'
                          ? {
                            startTitle: item.city,
                            startSubTitle: `${item.cityShortcut} - ${item.airport}`,
                          }
                          : {
                            endTitle: item.city,
                            endSubTitle: `${item.cityShortcut} - ${item.airport}`,
                          },
                      );
                      setShowSuggestion(false);
                    }}>

                    <View
                      style={styles.city_container}>
                      <Text style={styles.city_text}>
                        {item.city}
                      </Text>
                      {/* <Text style={styles.city_text}>
                        ({item.cityShortcut})
                      </Text> */}
                    </View>

                    <View
                      style={styles.airport_container}>
                    </View>

                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#F0F0F0'
                      }} />
                  </TouchableOpacity>
                ))}

              </ScrollView>

            </View>
          )}

        </View>

      </SafeAreaView>

    </Fragment>
  );
};

export default SearchCityScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listContainer: {
    backgroundColor: Colors.white,
    height: 300,
    marginTop: 5,
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#00000090'
  },
  city_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  airport_container: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  city_text: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular'
  },
  airport_text: {
    marginLeft: 5,
    fontSize: 12,
    color: Colors.darkGray,
    fontFamily: 'OpenSans-Regular'
  }
})
