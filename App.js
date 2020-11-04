import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CafeScreen from './src/screens/CafeScreen';

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
      <CafeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    alignItems: 'center',
    // justifyContent: '',
  },
});
