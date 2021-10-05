import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemeSelector from './ThemeSelector';
import { StateContext } from './styles/ThemeContext';
import { palette } from './styles/Palette';

export default function Header() {
  const { theme } = useContext(StateContext);
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.title, styles[`${theme}Title`]]}>calc</Text>
      <ThemeSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Spartan_700Bold',
    fontSize: 32,
  },
  darkTitle: {
    color: palette.dark.text.light,
  },
  lightTitle: {
    color: palette.light.text.dark,
  },
  contrastTitle: {
    color: palette.contrast.text.accent,
  },
});
