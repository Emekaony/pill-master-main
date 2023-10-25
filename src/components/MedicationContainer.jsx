import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MedicationContainer = ({time, frequency, name, qty, weight}) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time} AM</Text>
        <Text style={styles.frequency}>{frequency}</Text>
        <Text style={styles.name}>
          {name} ({weight})
        </Text>
        <View style={styles.qtyContainer}>
          <View style={styles.qty}>
            <Text style={{color: 'grey'}}>Qty</Text>
            <Text style={{fontWeight: 'bold'}}>{qty} days</Text>
          </View>
          <View style={styles.fills}>
            <Text style={{color: 'grey'}}>Fills</Text>
            <Text style={{fontWeight: 'bold'}}>{qty} left</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.taken}>
          <Text>Mark as Taken</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 230,
    width: 180,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 20,
  },
  timeContainer: {
    height: 80,
    backgroundColor: '#375D7F',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 20,
    paddingTop: 20,
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  frequency: {
    color: 'white',
    paddingTop: 5,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  capsule: {
    width: 50,
    height: 50,
  },
  qtyContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  qty: {
    marginRight: 10,
  },
  taken: {
    borderWidth: 2,
    borderColor: '#375D7F',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
    marginTop: 20,
    marginRight: 17,
  },
});

export default MedicationContainer;
