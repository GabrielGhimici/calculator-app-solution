import React, { useContext } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import numeral from 'numeral';
import { ThemeStateContext } from './styles/ThemeContext';
import { palette } from './styles/Palette';
import { MainStateContext } from './core/StateContext';

export default function Display() {
  const { theme } = useContext(ThemeStateContext);
  const { display } = useContext(MainStateContext);

  let formattedValue = '';
  if (display !== 'Err' && display !== 'Infinity') {
    const numericValue = Number(display);
    let decimalPatternRoot = '0';
    const maxDecimalPatternLength = 10;
    let decimalPatternLength = maxDecimalPatternLength;
    const intValue = display.split('.')[0];
    decimalPatternLength =
      intValue.length >= maxDecimalPatternLength
        ? 0
        : maxDecimalPatternLength - intValue.length;
    const decimalPattern = Array(decimalPatternLength)
      .fill(decimalPatternRoot)
      .join('');
    let formattingPattern = `0,0[.][${decimalPattern}]}`;
    if (
      (display.length > 12 && !display.includes('.')) ||
      (display.includes('.') && intValue.length > 10)
    ) {
      formattingPattern = '0.000000e+0';
    }
    formattedValue = numeral(numericValue).format(formattingPattern);
    if (display.endsWith('.')) {
      formattedValue = `${formattedValue}.`;
    }
  } else {
    formattedValue = display;
  }
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode={'clip'}
      style={[styles.displayText, styles[theme]]}
    >
      {formattedValue}
    </Text>
  );
}

const styles = StyleSheet.create({
  displayText: {
    ...Platform.select({
      web: {
        minHeight: 38 + 2 * 24,
      },
    }),
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
