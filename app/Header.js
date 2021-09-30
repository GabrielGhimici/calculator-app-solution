import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemeSelector from './ThemeSelector';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>calc</Text>
      <ThemeSelector selectedTheme={'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Spartan_700Bold',
    fontSize: 32,
  },
});
