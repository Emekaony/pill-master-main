import React from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';

import MedicationContainer from '../components/MedicationContainer';
import Header from '../components/Header';
import DATA from '../data/data';

const Welcome = () => {
  const renderPill = item => (
    <MedicationContainer
      time={item.time}
      frequency={item.frequency}
      name={item.name}
      weight={item.weight}
      qty={item.qty}
      fills={item.fills}
    />
  );

  return (
    <ScrollView>
      <Header />
      <View style={styles.lowerContainer}>
        <Text style={styles.daysMedication}>Today's Medication</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          Vertical
          data={DATA}
          renderItem={({item}) => renderPill(item)}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lowerContainer: {
    paddingLeft: 20,
  },
  daysMedication: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
});

export default Welcome;
