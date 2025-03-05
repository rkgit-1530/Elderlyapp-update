import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator'; // Import the AppNavigator

export default function App() {
  return (
    <SafeAreaProvider>
      {/* StatusBar for controlling the status bar appearance */}
      <StatusBar style="auto" />

      {/* AppNavigator handles the navigation stack */}
      <AppNavigator />
    </SafeAreaProvider>
  );
}