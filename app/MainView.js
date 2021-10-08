import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Platform,
  useColorScheme,
} from 'react-native';
import Header from './Header';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Display from './Display';
import Keypad from './keypad/Keypad';
import {
  ThemeDispatchContext,
  ThemeStateContext,
  updateTheme,
} from './styles/ThemeContext';
import { palette } from './styles/Palette';

export default function MainView() {
  const colorScheme = useColorScheme();
  const { theme } = useContext(ThemeStateContext);
  const dispatch = useContext(ThemeDispatchContext);
  useEffect(() => {
    dispatch(updateTheme(colorScheme || 'dark'));
  }, [colorScheme]);
  const statusBarBackground = palette[theme].background.primary;
  const view = Platform.select({
    web: (
      <View style={[styles.container, styles[theme]]}>
        <View style={styles.calculatorContainer}>
          <Header />
          <Display value={1000000.542} />
          <Keypad />
        </View>
      </View>
    ),
    default: (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={[styles.container, styles[theme]]}>
          <Header />
          <Display />
          <Keypad />
        </ScrollView>
      </SafeAreaView>
    ),
  });
  const statusBarByTheme = () => {
    switch (theme) {
      case 'light':
        return 'dark';
      case 'dark':
      case 'contrast':
        return 'light';
      default:
        return 'auto';
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={statusBarBackground}
        style={statusBarByTheme()}
      />
      {view}
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    marginTop: Constants.statusBarHeight,
    ...Platform.select({
      web: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
  calculatorContainer: {
    width: '35vw',
    minWidth: 375,
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
