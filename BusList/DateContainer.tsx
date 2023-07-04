import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../../../constants/Colors';

import { DateList } from './data';

const DateContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingTop: 10
      }}>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={DateList}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.1}
        horizontal={true}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{marginRight: 20}}
            key={index}
            onPress={() => setSelectedIndex(index)}>
            <Text style={styles.date}>{item.date}</Text>
            <Text
              style={[
                styles.price,
                selectedIndex === index && styles.selectedPrice,
              ]}>
              ₹ {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
};

export default DateContainer;

const styles = StyleSheet.create({
  date: {
    fontSize: 10,
    color: Colors.darkGray,
    fontWeight: '400',
    fontFamily: 'Open Sans',
  },
  price: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.black,
    fontWeight: '700',
    marginTop: 3,
    paddingBottom: 8,
  },
  selectedPrice: {
    color: Colors.primary,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
  },
});
