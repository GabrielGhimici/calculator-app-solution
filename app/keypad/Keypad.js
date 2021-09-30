import React from 'react';
import { View, StyleSheet } from 'react-native';
import Key from '../Key';
import { keypadPattern } from './KeypadPattern';

export default function Keypad() {
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
  return <View style={styles.keypadContainer}>{keypadContent}</View>;
}

const styles = StyleSheet.create({
  keypadContainer: {
    backgroundColor: 'hsl(223, 31%, 20%)',
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
});
