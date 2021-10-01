import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import {
  StateContext,
  DispatchContext,
  updateTheme,
} from './styles/ThemeContext';
import { palette } from './styles/Palette';

export default function ThemeSelector() {
  const { theme } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const availableThemes = ['dark', 'light', 'contrast'];
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
    dispatch(updateTheme(availableThemes[newIndex]));
  };

  const toggleStyles = [
    styles.toggleBackground,
    styles[`${theme}Position`],
    styles[`${theme}ToggleBackground`],
  ];

  const toggleLabels = availableThemes.map((availableTheme, index) => {
    return (
      <Text
        key={`${availableTheme} - ${index}`}
        style={[styles.label, styles.themeLabel, styles[`${theme}LabelColor`]]}
      >
        {index + 1}
      </Text>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles[`${theme}LabelColor`]]}>THEME</Text>
      <Pressable
        android_disableSound={true}
        style={styles.selector}
        onPress={toggleTheme}
      >
        <View style={styles.themeLabels}>{toggleLabels}</View>
        <View style={toggleStyles}>
          <View style={[styles.thumb, styles[`${theme}Thumb`]]}></View>
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
    fontSize: 12,
    padding: 6,
  },
  darkLabelColor: {
    color: palette.dark.text.light,
  },
  lightLabelColor: {
    color: palette.light.text.dark,
  },
  contrastLabelColor: {
    color: palette.contrast.text.accent,
  },
  themeLabel: {
    width: 28,
    textAlign: 'center',
  },
  toggleBackground: {
    padding: 6,
    borderRadius: 22,
    display: 'flex',
    flexDirection: 'row',
  },
  darkToggleBackground: {
    backgroundColor: palette.dark.background.secondary,
  },
  lightToggleBackground: {
    backgroundColor: palette.light.background.secondary,
  },
  contrastToggleBackground: {
    backgroundColor: palette.contrast.background.secondary,
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  darkThumb: {
    backgroundColor: palette.dark.keys.accentBackground,
  },
  lightThumb: {
    backgroundColor: palette.light.keys.accentBackground,
  },
  contrastThumb: {
    backgroundColor: palette.contrast.keys.accentBackground,
  },
  darkPosition: {
    justifyContent: 'flex-start',
  },
  lightPosition: {
    justifyContent: 'center',
  },
  contrastPosition: {
    justifyContent: 'flex-end',
  },
});
