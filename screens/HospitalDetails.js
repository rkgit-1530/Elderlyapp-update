import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Card, Text, Title, Paragraph, Button, Modal, Portal, Provider } from 'react-native-paper';
import { MaterialIcons, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';

// Sample hospital data
const hospitals = [
  { id: 1, name: "Apollo Hospital", district: "Chennai", address: "123, Health St", contact: "+91 9876543210", openTime: "24/7", closeTime: "-", specialties: ["Cardiology", "Neurology", "Orthopedics"], emergencyAvailable: true, rating: 4.8, website: "https://www.apollohospitals.com" },
  { id: 2, name: "Fortis Hospital", district: "Chennai", address: "45, Greenway Road", contact: "+91 9087654321", openTime: "8:00 AM", closeTime: "10:00 PM", specialties: ["Cardiology", "Oncology", "Pediatrics"], emergencyAvailable: true, rating: 4.6, website: "https://www.fortishealthcare.com" },
  { id: 3, name: "SIMS Hospital", district: "Chennai", address: "100, Anna Nagar", contact: "+91 9994422110", openTime: "24/7", closeTime: "-", specialties: ["Neurology", "Orthopedics"], emergencyAvailable: true, rating: 4.7, website: "https://www.simshospitals.com" },
  { id: 4, name: "MIOT International", district: "Chennai", address: "55, Mount Road", contact: "+91 9822345678", openTime: "24/7", closeTime: "-", specialties: ["Cardiology", "Neurosurgery"], emergencyAvailable: true, rating: 4.5, website: "https://www.miotinternational.com" },
  { id: 5, name: "SRM Hospital", district: "Chennai", address: "SRM University Campus", contact: "+91 8887766554", openTime: "7:00 AM", closeTime: "11:00 PM", specialties: ["General Medicine", "Gynecology"], emergencyAvailable: true, rating: 4.3, website: "https://www.srmhospital.com" },
  { id: 6, name: "Vijaya Hospital", district: "Chennai", address: "40, Vadapalani", contact: "+91 9988776655", openTime: "24/7", closeTime: "-", specialties: ["Gastroenterology", "Urology"], emergencyAvailable: true, rating: 4.4, website: "https://www.vijayahospital.org" },
  { id: 7, name: "Prashanth Hospital", district: "Chennai", address: "75, Velachery", contact: "+91 9665544332", openTime: "8:00 AM", closeTime: "9:00 PM", specialties: ["ENT", "Dermatology"], emergencyAvailable: false, rating: 4.2, website: "https://www.prashanthhospitals.com" },
  { id: 8, name: "Gleneagles Global Hospital", district: "Chennai", address: "12, Perumbakkam", contact: "+91 9090909090", openTime: "24/7", closeTime: "-", specialties: ["Organ Transplant", "Critical Care"], emergencyAvailable: true, rating: 4.6, website: "https://www.gleneaglesglobalhospitals.com" },
  { id: 9, name: "Billroth Hospital", district: "Chennai", address: "23, Shenoy Nagar", contact: "+91 9765432100", openTime: "7:00 AM", closeTime: "11:00 PM", specialties: ["Pediatrics", "Diabetology"], emergencyAvailable: true, rating: 4.4, website: "https://www.billrothhospitals.com" },
  { id: 10, name: "Kauvery Hospital", district: "Chennai", address: "50, Alwarpet", contact: "+91 9678324567", openTime: "24/7", closeTime: "-", specialties: ["Cardiology", "Neurosurgery"], emergencyAvailable: true, rating: 4.5, website: "https://www.kauveryhospital.com" },
  
  // Other Districts (5 hospitals)
  { id: 11, name: "Manipal Hospital", district: "Bengaluru", address: "100, Whitefield", contact: "+91 9845123456", openTime: "24/7", closeTime: "-", specialties: ["Cardiology", "Oncology"], emergencyAvailable: true, rating: 4.7, website: "https://www.manipalhospitals.com" },
  { id: 12, name: "Narayana Health", district: "Hyderabad", address: "55, Banjara Hills", contact: "+91 8765432109", openTime: "24/7", closeTime: "-", specialties: ["Nephrology", "Cardiac Surgery"], emergencyAvailable: true, rating: 4.6, website: "https://www.narayanahealth.org" },
  { id: 13, name: "PSG Hospitals", district: "Coimbatore", address: "PSG College Campus", contact: "+91 9876543234", openTime: "8:00 AM", closeTime: "9:00 PM", specialties: ["Dermatology", "ENT"], emergencyAvailable: true, rating: 4.5, website: "https://www.psghospitals.com" },
  { id: 14, name: "ABC Hospital", district: "Trichy", address: "45, Thillai Nagar", contact: "+91 9988776655", openTime: "7:00 AM", closeTime: "10:00 PM", specialties: ["Orthopedics", "General Medicine"], emergencyAvailable: true, rating: 4.3, website: "https://www.abchospitaltrichy.com" },
  { id: 15, name: "Meenakshi Mission Hospital", district: "Madurai", address: "22, KK Nagar", contact: "+91 9876567890", openTime: "24/7", closeTime: "-", specialties: ["Cancer Care", "Neurosurgery"], emergencyAvailable: true, rating: 4.7, website: "https://www.meenakshimission.org" },
];

export default function HospitalDetails() {
  const [visible, setVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const showModal = (hospital) => {
    setSelectedHospital(hospital);
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

  const openDialer = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openWebsite = (url) => {
    Linking.openURL(url);
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Title style={styles.headerTitle}>
          <FontAwesome5 name="hospital" size={24} color="#007bff" /> Hospital Information
        </Title>

        {hospitals.map((hospital) => (
          <Card key={hospital.id} style={styles.card} onPress={() => showModal(hospital)}>
            <Card.Content>
              <Title style={styles.cardTitle}>{hospital.name}</Title>
              <Paragraph><Entypo name="location" size={16} color="red" /> {hospital.district}</Paragraph>
              <Paragraph><MaterialIcons name="place" size={16} color="gray" /> {hospital.address}</Paragraph>
            </Card.Content>
          </Card>
        ))}

        {/* Modal to show hospital details */}
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
            {selectedHospital && (
              <View>
                <Title style={styles.modalTitle}>{selectedHospital.name}</Title>
                <Paragraph><Entypo name="location" size={16} color="red" /> District: {selectedHospital.district}</Paragraph>
                <Paragraph><MaterialIcons name="place" size={16} color="gray" /> Address: {selectedHospital.address}</Paragraph>
                <Paragraph><MaterialIcons name="access-time" size={16} color="green" /> Open: {selectedHospital.openTime}</Paragraph>
                <Paragraph><MaterialIcons name="access-time" size={16} color="red" /> Close: {selectedHospital.closeTime}</Paragraph>
                <Paragraph><FontAwesome5 name="stethoscope" size={16} color="purple" /> Specialties:</Paragraph>
                {selectedHospital.specialties.map((spec, index) => (
                  <Paragraph key={index}>✔ {spec}</Paragraph>
                ))}
                <Paragraph>
                  <Ionicons name="md-medkit" size={16} color={selectedHospital.emergencyAvailable ? "green" : "gray"} /> 
                  {selectedHospital.emergencyAvailable ? " Emergency Services Available" : " No Emergency Services"}
                </Paragraph>
                <Paragraph>
                  <FontAwesome5 name="star" size={16} color="gold" /> Rating: {selectedHospital.rating} / 5
                </Paragraph>
                <View style={styles.buttonContainer}>
                  <Button mode="contained" icon="phone" onPress={() => openDialer(selectedHospital.contact)} style={styles.callButton}>
                    Call
                  </Button>
                  {selectedHospital.website && (
                    <Button mode="contained" icon="web" onPress={() => openWebsite(selectedHospital.website)} style={styles.websiteButton}>
                      Website
                    </Button>
                  )}
                </View>
                <Button mode="contained" onPress={hideModal} style={styles.closeButton}>Close</Button>
              </View>
            )}
          </Modal>
        </Portal>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e3f2fd',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007bff',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  callButton: {
    backgroundColor: '#28a745',
  },
  websiteButton: {
    backgroundColor: '#17a2b8',
  },
});
