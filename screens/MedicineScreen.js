import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputField from '../components/InputField';
import Button from '../components/Button';
import MedicineCard from '../components/MedicineCard';
import { Ionicons } from '@expo/vector-icons';

export default function MedicineScreen() {
  const [person, setPerson] = useState('');
  const [medicine, setMedicine] = useState('');
  const [time, setTime] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [people, setPeople] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  // Load data from AsyncStorage
  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('medicineData');
      if (storedData) {
        setPeople(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Save data to AsyncStorage
  const saveData = async (newData) => {
    try {
      await AsyncStorage.setItem('medicineData', JSON.stringify(newData));
      Alert.alert('Success', 'Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      Alert.alert('Error', 'Failed to save data.');
    }
  };

  // Add a new person
  const addPerson = () => {
    if (person.trim() === '') {
      Alert.alert('Error', 'Please enter a person name.');
      return;
    }
    if (!people[person]) {
      const updatedPeople = { ...people, [person]: [] };
      setPeople(updatedPeople);
      saveData(updatedPeople);
      Alert.alert('Success', `${person} added successfully!`);
    } else {
      Alert.alert('Error', `${person} already exists.`);
    }
    setPerson('');
  };

  // Add medicine for the selected person
  const addMedicine = () => {
    if (!selectedPerson) {
      Alert.alert('Error', 'Please select a person.');
      return;
    }
    if (medicine.trim() === '' || time.trim() === '') {
      Alert.alert('Error', 'Please enter both medicine name and time.');
      return;
    }

    const updatedPeople = {
      ...people,
      [selectedPerson]: [...people[selectedPerson], { id: Date.now().toString(), name: medicine, time }],
    };

    setPeople(updatedPeople);
    saveData(updatedPeople);
    setMedicine('');
    setTime('');
    Alert.alert('Success', 'Medicine added successfully!');
  };

  // Delete medicine from selected person
  const deleteMedicine = (id) => {
    if (!selectedPerson) return;

    Alert.alert(
      'Delete Medicine',
      'Are you sure you want to delete this medicine?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            const updatedPeople = {
              ...people,
              [selectedPerson]: people[selectedPerson].filter((item) => item.id !== id),
            };
            setPeople(updatedPeople);
            saveData(updatedPeople);
            Alert.alert('Success', 'Medicine deleted successfully!');
          },
          style: 'destructive',
        },
      ]
    );
  };

  // Delete person and their medicines
  const deletePerson = (personName) => {
    Alert.alert(
      'Delete Person',
      `Are you sure you want to delete ${personName} and all their medicines?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            const updatedPeople = { ...people };
            delete updatedPeople[personName];
            setPeople(updatedPeople);
            saveData(updatedPeople);
            if (selectedPerson === personName) setSelectedPerson(null);
            Alert.alert('Success', `${personName} deleted successfully!`);
          },
          style: 'destructive',
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Medicine Tracker</Text>

      {/* Add Person Section */}
      <Text style={styles.label}>Person Name</Text>
      <InputField placeholder="Enter Person Name" value={person} onChangeText={setPerson} />
      <Button title="Add Person" onPress={addPerson} />

      {/* Select Person Section */}
      <Text style={styles.subTitle}>Select a Person:</Text>
      {Object.keys(people).length === 0 ? (
        <Text style={styles.emptyStateText}>No people added yet.</Text>
      ) : (
        <FlatList
          data={Object.keys(people)}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.personCard}>
              <TouchableOpacity
                style={[styles.personButton, selectedPerson === item && styles.selectedPersonButton]}
                onPress={() => setSelectedPerson(item)}
              >
                <Text style={styles.personButtonText}>{item}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletePerson(item)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* Medicine Input Section */}
      {selectedPerson && (
        <>
          <Text style={styles.subTitle}>Add Medicine for {selectedPerson}</Text>
          <Text style={styles.label}>Medicine Name</Text>
          <InputField placeholder="Enter Medicine Name" value={medicine} onChangeText={setMedicine} />
          <Text style={styles.label}>Time</Text>
          <InputField placeholder="Enter Time (e.g., 9:00 AM)" value={time} onChangeText={setTime} />
          <Button title="Add Medicine" onPress={addMedicine} />
        </>
      )}

      {/* Medicine List */}
      {selectedPerson && (
        <>
          <Text style={styles.subTitle}>{selectedPerson}'s Medicines:</Text>
          {people[selectedPerson].length === 0 ? (
            <Text style={styles.emptyStateText}>No medicines added yet.</Text>
          ) : (
            <FlatList
              data={people[selectedPerson]}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MedicineCard medicine={item.name} time={item.time} onDelete={() => deleteMedicine(item.id)} />
              )}
            />
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#555',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#666',
  },
  personCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  personButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  selectedPersonButton: {
    backgroundColor: '#007bff',
  },
  personButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyStateText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});