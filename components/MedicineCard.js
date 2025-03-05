import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button'; // Custom button component

export default function MedicineCard({ medicine, time, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{medicine} - {time}</Text>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#2c3e50',
  },
});
