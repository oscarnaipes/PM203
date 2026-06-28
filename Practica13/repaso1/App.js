import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Formulario from './Screens/formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37099c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});