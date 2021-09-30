import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

export default function ThemeSelector({ selectedTheme }) {
  const availableThemes = ['dark', 'light', 'contrast'];
  const [theme, setTheme] = useState(selectedTheme);
  const [increment, setIncrement] = useState(1);

  const toggleTheme = () => {
    const themeIndex = availableThemes.indexOf(theme);
    if (themeIndex === -1) return;
    let newIndex = themeIndex;
    newIndex = newIndex + increment;
    if (newIndex === availableThemes.length - 1) {
      setIncrement(-1);
    } else if (newIndex === 0) {
      setIncrement(1);
    }
    setTheme(availableThemes[newIndex]);
  };

  const toggleStyles = [styles.toggleBackground, styles[theme]];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>THEME</Text>
      <Pressable
        android_disableSound={true}
        style={styles.selector}
        onPress={toggleTheme}
      >
        <View style={styles.themeLabels}>
          <Text style={[styles.label, styles.themeLabel]}>1</Text>
          <Text style={[styles.label, styles.themeLabel]}>2</Text>
          <Text style={[styles.label, styles.themeLabel]}>3</Text>
        </View>
        <View style={toggleStyles}>
          <View style={styles.thumb}></View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  selector: {
    display: 'flex',
    flexDirection: 'column',
  },
  themeLabels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Spartan_700Bold',
    color: 'hsl(0, 0%, 100%)',
    fontSize: 12,
    padding: 6,
  },
  themeLabel: {
    width: 28,
    textAlign: 'center',
  },
  toggleBackground: {
    backgroundColor: 'hsl(223, 31%, 20%)',
    borderColor: 'hsl(223, 31%, 20%)',
    borderWidth: 6,
    borderRadius: 22,
    display: 'flex',
    flexDirection: 'row',
  },
  thumb: {
    backgroundColor: 'hsl(6, 63%, 50%)',
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  dark: {
    justifyContent: 'flex-start',
  },
  light: {
    justifyContent: 'center',
  },
  contrast: {
    justifyContent: 'flex-end',
  },
});
