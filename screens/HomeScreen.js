import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import Card from '../components/Card'; // Reusable Card component
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { currentUser } = useAuth();
  const { width } = useWindowDimensions(); // Get device width

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={[styles.container, { paddingHorizontal: width * 0.05 }]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle} numberOfLines={1} adjustsFontSizeToFit>
            Welcome, {currentUser?.email || 'User'}!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-circle-outline" size={width * 0.08} color="#007bff" />
          </TouchableOpacity>
        </View>

        {/* Cards */}
        <Card title="Hospital" icon="medkit" onPress={() => navigation.navigate('HospitalDetails')} backgroundColor="#e3f2fd" />
        <Card title="Emergency" icon="alert-circle" onPress={() => navigation.navigate('EmergencyDetails')} backgroundColor="#ffebee" />
        <Card title="Exercise" icon="fitness" onPress={() => navigation.navigate('ExerciseDetails')} backgroundColor="#f0f4c3" />
        <Card title="Food" icon="restaurant" onPress={() => navigation.navigate('FoodDetails')} backgroundColor="#fff3e0" />

        {/* Add Medicine Button */}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Medicine')}>
          <Text style={styles.addButtonText}>Add Medicine</Text>
          <Ionicons name="add-circle" size={width * 0.07} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop:'20',
    marginBottom:'20'
  },
  container: {
    flexGrow: 1,
    paddingVertical: 20,
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
    flexShrink: 1, // Prevent text overflow
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
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
