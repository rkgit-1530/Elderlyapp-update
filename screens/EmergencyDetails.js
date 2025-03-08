import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function EmergencyDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Card style={[styles.fullWidthCard]}>
        <Card.Content>
          <Title style={styles.title}>
            <FontAwesome5 name="exclamation-triangle" size={24} color="#d32f2f" /> Emergency Information
          </Title>
        </Card.Content>
      </Card>

      {/* Emergency Contacts */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <MaterialIcons name="phone" size={22} color="#e74c3c" /> Emergency Contacts
          </Title>
          <Paragraph style={styles.item}>🚑 Ambulance: 108</Paragraph>
          <Paragraph style={styles.item}>🚒 Fire Service: 101</Paragraph>
          <Paragraph style={styles.item}>🚓 Police: 100</Paragraph>
          <Paragraph style={styles.item}>☠ Poison Control: 1800-222-1222</Paragraph>
          <Paragraph style={styles.item}>🌪 Disaster Helpline: 1070</Paragraph>
        </Card.Content>
      </Card>

      {/* First Aid Tips */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <FontAwesome5 name="medkit" size={22} color="#3498db" /> First Aid Tips
          </Title>
          <Paragraph style={styles.item}>✔ CPR for unconscious individuals</Paragraph>
          <Paragraph style={styles.item}>✔ Apply pressure to stop bleeding</Paragraph>
          <Paragraph style={styles.item}>✔ Cool burns with running water</Paragraph>
          <Paragraph style={styles.item}>✔ Heimlich maneuver for choking</Paragraph>
          <Paragraph style={styles.item}>✔ Immobilize fractures before moving</Paragraph>
        </Card.Content>
      </Card>

      {/* Emergency Kit */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <FontAwesome5 name="briefcase-medical" size={22} color="#ff9800" /> Emergency Kit Essentials
          </Title>
          <Paragraph style={styles.item}>• Bandages & Antiseptic</Paragraph>
          <Paragraph style={styles.item}>• Painkillers & Allergy Medications</Paragraph>
          <Paragraph style={styles.item}>• Flashlight & Extra Batteries</Paragraph>
          <Paragraph style={styles.item}>• Canned Food & Bottled Water</Paragraph>
          <Paragraph style={styles.item}>• Personal IDs & Emergency Contacts</Paragraph>
        </Card.Content>
      </Card>

      {/* Disaster Preparedness */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <Entypo name="thunder-cloud" size={22} color="#27ae60" /> Disaster Preparedness
          </Title>
          <Paragraph style={styles.item}>🌊 Floods: Move to higher ground</Paragraph>
          <Paragraph style={styles.item}>🔥 Fire: Stop, Drop, and Roll</Paragraph>
          <Paragraph style={styles.item}>🌎 Earthquake: Drop, Cover, Hold</Paragraph>
          <Paragraph style={styles.item}>🌀 Storms: Secure loose items & stay indoors</Paragraph>
          <Paragraph style={styles.item}>💥 Gas Leak: Evacuate & avoid flames</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ffebee',
    height:'200px'
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  fullWidthCard: {
    marginBottom: 15,
    marginTop:25,
    maxHeight:'200'

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d32f2f',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  item: {
    fontSize: 13,
    marginTop: 5,
    color: '#555',
  },
});
