import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import HospitalDetails from "../screens/HospitalDetails";
import EmergencyDetails from "../screens/EmergencyDetails";
import ExerciseDetails from "../screens/ExerciseDetails";
import FoodDetails from "../screens/FoodDetails";
import MedicineScreen from "../screens/MedicineScreen";

import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Medicine" component={MedicineScreen} />
        <Stack.Screen name="HospitalDetails" component={HospitalDetails} />
        <Stack.Screen name="EmergencyDetails" component={EmergencyDetails} />
        <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
