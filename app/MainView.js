import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Display from './Display';
import Keypad from './keypad/Keypad';
import { StateContext } from './styles/ThemeContext';
import { palette } from './styles/Palette';

export default function MainView() {
  const { theme } = useContext(StateContext);
  const statusBarBackground = palette[theme].background.primary;
  return (
    <>
      <StatusBar backgroundColor={statusBarBackground} />
      <View style={[styles.container, styles[theme]]}>
        <Header />
        <Display value={1000000.542} />
        <Keypad />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    marginTop: Constants.statusBarHeight,
  },
  dark: {
    backgroundColor: palette.dark.background.primary,
  },
  light: {
    backgroundColor: palette.light.background.primary,
  },
  contrast: {
    backgroundColor: palette.contrast.background.primary,
  },
});
