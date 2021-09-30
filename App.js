import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Spartan_700Bold } from '@expo-google-fonts/spartan';
import Header from './app/Header';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Display from './app/Display';
import Keypad from './app/keypad/Keypad';

export default function App() {
  let [fontsLoaded] = useFonts({
    Spartan_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar backgroundColor={'hsl(222, 26%, 31%)'} />
        <View style={[styles.container, styles.background]}>
          <Header />
          <Display value={1000000.542} />
          <Keypad />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    marginTop: Constants.statusBarHeight,
  },
  background: {
    backgroundColor: 'hsl(222, 26%, 31%)',
  },
});
