import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './screens/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <AppNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
  );
}