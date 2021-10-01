import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Key from '../Key';
import { keypadPattern } from './KeypadPattern';
import { StateContext } from '../styles/ThemeContext';
import { palette } from '../styles/Palette';

export default function Keypad() {
  const { theme } = useContext(StateContext);
  const keypadContent = keypadPattern.map((row, rowIndex) => {
    const rowStyles = [styles.keypadRow];
    if (rowIndex === keypadPattern.length - 1) {
      rowStyles.push(styles.lastKeyPadRow);
    }
    const keys = row.map((key, keyIndex) => {
      const isLastInLine = keyIndex === row.length - 1;
      return (
        <Key
          key={`${keyIndex} - ${key.label}`}
          label={key.label}
          variant={key.variant}
          lastInLine={isLastInLine}
        />
      );
    });
    return (
      <View key={`Keypad row ${rowIndex}`} style={rowStyles}>
        {keys}
      </View>
    );
  });
  return (
    <View style={[styles.keypadContainer, styles[theme]]}>{keypadContent}</View>
  );
}

const styles = StyleSheet.create({
  keypadContainer: {
    padding: 24,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
  },
  keypadRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 16,
  },
  lastKeyPadRow: {
    marginBottom: 0,
  },
  dark: {
    backgroundColor: palette.dark.background.secondary,
  },
  light: {
    backgroundColor: palette.light.background.secondary,
  },
  contrast: {
    backgroundColor: palette.contrast.background.secondary,
  },
});
