import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Spartan_700Bold } from '@expo-google-fonts/spartan';
import ThemeProvider from './app/styles/ThemeContext';
import MainView from './app/MainView';
import StateProvider from './app/core/StateContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Spartan_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider>
        <StateProvider>
          <MainView />
        </StateProvider>
      </ThemeProvider>
    );
  }
}
