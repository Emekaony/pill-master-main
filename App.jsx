import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import MedicationContainer from './src/components/MedicationContainer';

const data = [
  {
    id: 1,
    time: '8:00',
    frequency: 'Daily',
    name: 'Tylenol',
    weight: '8mg',
    qty: '120',
    fills: '14',
  },
  {
    id: 2,
    time: '8:00',
    frequency: 'Daily',
    name: 'Dummy',
    weight: '1mg',
    qty: '120',
    fills: '14',
  },
  {
    id: 3,
    time: '8:00',
    frequency: 'Daily',
    name: 'Xanax',
    weight: '200mg',
    qty: '120',
    fills: '14',
  },
  {
    id: 4,
    time: '8:00',
    frequency: 'Daily',
    name: 'Xanax',
    weight: '6mg',
    qty: '120',
    fills: '14',
  },
];

const App = () => {
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
    <View>
      <View style={styles.header}>
        <Text style={styles.headerGreeting}>Good Morning!</Text>
        <Text style={styles.headerDate}>Wednesday, October 25th.</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.daysMedication}>Today's Medication</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({item}) => renderPill(item)}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 190,
    backgroundColor: '#375D7F',
    paddingTop: 100,
    paddingLeft: 20,
  },
  headerGreeting: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  headerDate: {
    color: '#E2E2E2',
    marginTop: 10,
    fontSize: 15,
  },
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

export default App;
