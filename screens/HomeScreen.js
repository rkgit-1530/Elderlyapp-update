import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import Card from '../components/Card'; // Reusable Card component

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, User!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={32} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <Card
        title="Hospital"
        icon="medkit"
        onPress={() => navigation.navigate('HospitalDetails')}
        backgroundColor="#e3f2fd"
      />
      <Card
        title="Emergency"
        icon="alert-circle"
        onPress={() => navigation.navigate('EmergencyDetails')}
        backgroundColor="#ffebee"
      />
      <Card
        title="Exercise"
        icon="fitness"
        onPress={() => navigation.navigate('ExerciseDetails')}
        backgroundColor="#f0f4c3"
      />
      <Card
        title="Food"
        icon="restaurant"
        onPress={() => navigation.navigate('FoodDetails')}
        backgroundColor="#fff3e0"
      />

      {/* Add Medicine Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Medicine')}
      >
        <Text style={styles.addButtonText}>Add Medicine</Text>
        <Ionicons name="add-circle" size={24} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});