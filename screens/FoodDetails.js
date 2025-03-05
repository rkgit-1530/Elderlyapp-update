import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function FoodDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Header */}
      <Card style={[styles.card, styles.fullWidthCard]}>
        <Card.Content>
          <Title style={styles.title}>
            <MaterialIcons name="restaurant-menu" size={24} color="#ff9800" /> Healthy Eating Guide
          </Title>
        </Card.Content>
      </Card>

      {/* Recommended Foods */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <FontAwesome5 name="apple-alt" size={22} color="#4caf50" /> Recommended Foods
          </Title>
          <Paragraph style={styles.item}>🍎 Fruits: Apples, Bananas, Oranges, Berries</Paragraph>
          <Paragraph style={styles.item}>🥦 Vegetables: Broccoli, Spinach, Carrots, Bell Peppers</Paragraph>
          <Paragraph style={styles.item}>🥩 Proteins: Chicken, Fish, Lentils, Eggs</Paragraph>
          <Paragraph style={styles.item}>🥛 Dairy: Milk, Yogurt, Cheese</Paragraph>
          <Paragraph style={styles.item}>🌾 Whole Grains: Oats, Quinoa, Brown Rice</Paragraph>
          <Paragraph style={styles.item}>🥜 Nuts & Seeds: Almonds, Walnuts, Chia Seeds</Paragraph>
          <Paragraph style={styles.item}>🫒 Healthy Fats: Olive Oil, Avocados, Coconut Oil</Paragraph>
        </Card.Content>
      </Card>

      {/* Healthy Eating Tips */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <MaterialIcons name="emoji-food-beverage" size={22} color="#e91e63" /> Healthy Eating Tips
          </Title>
          <Paragraph style={styles.item}>✔ Eat more fiber-rich foods</Paragraph>
          <Paragraph style={styles.item}>✔ Reduce sugar and salt intake</Paragraph>
          <Paragraph style={styles.item}>✔ Drink plenty of water</Paragraph>
          <Paragraph style={styles.item}>✔ Control portion sizes</Paragraph>
          <Paragraph style={styles.item}>✔ Avoid processed and junk foods</Paragraph>
          <Paragraph style={styles.item}>✔ Eat a variety of nutrients daily</Paragraph>
        </Card.Content>
      </Card>

      {/* Meal Planning */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>
            <Entypo name="bowl" size={22} color="#ff5722" /> Meal Planning
          </Title>
          <Paragraph style={styles.item}>🍽 **Breakfast:** Oatmeal & Fruits, Scrambled Eggs, Greek Yogurt</Paragraph>
          <Paragraph style={styles.item}>🥗 **Lunch:** Grilled Chicken & Salad, Quinoa with Vegetables</Paragraph>
          <Paragraph style={styles.item}>🍛 **Dinner:** Brown Rice & Vegetables, Grilled Salmon with Sweet Potatoes</Paragraph>
          <Paragraph style={styles.item}>🍎 **Snacks:** Nuts, Smoothies, Hummus with Carrots</Paragraph>
        </Card.Content>
      </Card>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'transparent',
    marginTop:'20'
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff9800',
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
