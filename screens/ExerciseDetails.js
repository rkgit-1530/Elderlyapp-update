import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Title, Paragraph } from 'react-native-paper';
import { FontAwesome5, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

export default function ExerciseDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Card (Spanning Full Width) */}
      <Card style={[styles.fullWidthCard]}>
        <Card.Content>
          <Title style={styles.title}>
            <FontAwesome5 name="dumbbell" size={24} color="#388e3c" /> Exercise & Fitness
          </Title>
        </Card.Content>
      </Card>

      {/* 2-Column Grid Layout */}
      <View style={styles.row}>
        {/* Recommended Exercises */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.sectionTitle}>
              <MaterialIcons name="directions-walk" size={22} color="#e67e22" /> Exercises
            </Title>
            <Paragraph style={styles.item}>🚶 Walking - 30 minutes</Paragraph>
            <Paragraph style={styles.item}>🏃 Jogging - Boosts stamina</Paragraph>
            <Paragraph style={styles.item}>🧘 Yoga - Improves flexibility</Paragraph>
            <Paragraph style={styles.item}>💪 Strength Training</Paragraph>
          </Card.Content>
        </Card>

        {/* Health Benefits */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.sectionTitle}>
              <FontAwesome5 name="heartbeat" size={22} color="#e74c3c" /> Benefits
            </Title>
            <Paragraph style={styles.item}>✔ Reduces stress & anxiety</Paragraph>
            <Paragraph style={styles.item}>✔ Strengthens immunity</Paragraph>
            <Paragraph style={styles.item}>✔ Aids in weight loss</Paragraph>
            <Paragraph style={styles.item}>✔ Improves heart health</Paragraph>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.row}>
        {/* Tips */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.sectionTitle}>
              <MaterialIcons name="tips-and-updates" size={22} color="#3498db" /> Tips
            </Title>
            <Paragraph style={styles.item}>💧 Stay hydrated</Paragraph>
            <Paragraph style={styles.item}>🔥 Warm up before workouts</Paragraph>
            <Paragraph style={styles.item}>📏 Maintain posture</Paragraph>
            <Paragraph style={styles.item}>🕒 Get enough rest</Paragraph>
          </Card.Content>
        </Card>

        {/* Required Equipment */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.sectionTitle}>
              <Ionicons name="fitness" size={22} color="#ff9800" /> Equipment
            </Title>
            <Paragraph style={styles.item}>🏋️ Dumbbells</Paragraph>
            <Paragraph style={styles.item}>🧘 Yoga Mat</Paragraph>
            <Paragraph style={styles.item}>⚖️ Resistance Bands</Paragraph>
            <Paragraph style={styles.item}>🚴 Treadmill/Bicycle</Paragraph>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.row}>
        {/* Motivation */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.sectionTitle}>
              <Entypo name="quote" size={22} color="#8e44ad" /> Motivation
            </Title>
            <Paragraph style={styles.item}>🏆 "No pain, no gain!"</Paragraph>
            <Paragraph style={styles.item}>💪 "Stronger every day!"</Paragraph>
            <Paragraph style={styles.item}>🔥 "Push yourself!"</Paragraph>
            <Paragraph style={styles.item}>🏅 "Stay consistent!"</Paragraph>
          </Card.Content>
        </Card>

        {/* Nutrition Tips */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.sectionTitle}>
              <FontAwesome5 name="carrot" size={22} color="#27ae60" /> Nutrition
            </Title>
            <Paragraph style={styles.item}>🥦 Eat more greens</Paragraph>
            <Paragraph style={styles.item}>🥚 High-protein diet</Paragraph>
            <Paragraph style={styles.item}>🍌 Stay energized</Paragraph>
            <Paragraph style={styles.item}>🥤 Drink plenty of water</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f0f4c3',
    height:'100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f0f4c3',
  },
  fullWidthCard: {
   padding:'3',
   marginTop:'25',
   height:'200px',
   marginBottom:'20'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#388e3c',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  item: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
});

