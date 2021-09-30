import React from 'react';
import { Text, StyleSheet } from 'react-native';
import numbro from 'numbro';

export default function Display({ value }) {
  const formattedValue = numbro(value).format({ thousandSeparated: true });
  return <Text style={styles.displayText}>{formattedValue}</Text>;
}

const styles = StyleSheet.create({
  displayText: {
    backgroundColor: 'hsl(224, 36%, 15%)',
    padding: 24,
    marginBottom: 24,
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Spartan_700Bold',
    fontSize: 32,
    textAlign: 'right',
    borderRadius: 12,
  },
});
