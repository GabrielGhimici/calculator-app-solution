import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import numbro from 'numbro';
import { StateContext } from './styles/ThemeContext';
import { palette } from './styles/Palette';

export default function Display({ value }) {
  const { theme } = useContext(StateContext);
  const formattedValue = numbro(value).format({ thousandSeparated: true });
  return (
    <Text style={[styles.displayText, styles[theme]]}>{formattedValue}</Text>
  );
}

const styles = StyleSheet.create({
  displayText: {
    padding: 24,
    marginBottom: 24,
    fontFamily: 'Spartan_700Bold',
    fontSize: 32,
    textAlign: 'right',
    borderRadius: 12,
  },
  dark: {
    backgroundColor: palette.dark.background.screen,
    color: palette.dark.text.light,
  },
  light: {
    backgroundColor: palette.light.background.screen,
    color: palette.light.text.dark,
  },
  contrast: {
    backgroundColor: palette.contrast.background.screen,
    color: palette.contrast.text.accent,
  },
});
