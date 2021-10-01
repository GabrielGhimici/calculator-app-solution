import React, { useContext } from 'react';
import { StyleSheet, Pressable, Alert, Text, View } from 'react-native';
import { palette } from './styles/Palette';
import { StateContext } from './styles/ThemeContext';

export default function Key({ label, lastInLine, variant }) {
  const { theme } = useContext(StateContext);
  const stylesForVariant = (selectedVariant) => {
    switch (selectedVariant) {
      case 'eq':
        return {
          key: [styles.doubleKey, styles[`${theme}Accent`]],
          background: [styles[`${theme}AccentBackground`]],
          label: [styles[`${theme}AccentLabel`]],
        };
      case 'fnDouble':
        return {
          key: [styles.doubleKey, styles[`${theme}Function`]],
          background: [styles[`${theme}FunctionBackground`]],
          label: [styles.smallerText, styles[`${theme}FunctionLabel`]],
        };
      case 'fn':
        return {
          key: [styles[`${theme}Function`]],
          background: [styles[`${theme}FunctionBackground`]],
          label: [styles.smallerText, styles[`${theme}FunctionLabel`]],
        };
      case 'dot':
      case 'op':
      case 'num':
      default:
        return {
          key: [styles[`${theme}Default`]],
          background: [styles[`${theme}DefaultBackground`]],
          label: [styles[`${theme}DefaultLabel`]],
        };
    }
  };

  let backgroundStyles = [styles.background];
  let keyStyles = [styles.container];
  let labelStyles = [styles.label];

  if (lastInLine) {
    keyStyles.push(styles.noRightMargin);
  }

  const {
    background: sBackground,
    key: sKey,
    label: sLabel,
  } = stylesForVariant(variant);
  keyStyles = [...keyStyles, ...sKey];
  backgroundStyles = [...backgroundStyles, ...sBackground];
  labelStyles = [...labelStyles, ...sLabel];

  return (
    <Pressable
      android_disableSound={true}
      style={keyStyles}
      onPress={() => Alert.alert(`${label} key pressed`)}
    >
      <View style={backgroundStyles} />
      <Text style={labelStyles}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    aspectRatio: 0.95,
    marginRight: 12,
    overflow: 'hidden',
  },
  noRightMargin: {
    marginRight: 0,
  },
  label: {
    fontFamily: 'Spartan_700Bold',
    fontSize: 32,
    marginBottom: 4,
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    position: 'absolute',
    bottom: 4,
  },
  doubleKey: {
    aspectRatio: 1.95,
  },
  smallerText: {
    fontSize: 18,
  },

  darkDefault: {
    backgroundColor: palette.dark.keys.primaryShadow,
  },
  darkDefaultBackground: {
    backgroundColor: palette.dark.keys.primaryBackground,
  },
  darkDefaultLabel: {
    color: palette.dark.text.dark,
  },
  darkFunction: {
    backgroundColor: palette.dark.keys.secondaryShadow,
  },
  darkFunctionBackground: {
    backgroundColor: palette.dark.keys.secondaryBackground,
  },
  darkFunctionLabel: {
    color: palette.dark.text.light,
  },
  darkAccent: {
    backgroundColor: palette.dark.keys.accentShadow,
  },
  darkAccentBackground: {
    backgroundColor: palette.dark.keys.accentBackground,
  },
  darkAccentLabel: {
    color: palette.dark.text.light,
  },

  lightDefault: {
    backgroundColor: palette.light.keys.primaryShadow,
  },
  lightDefaultBackground: {
    backgroundColor: palette.light.keys.primaryBackground,
  },
  lightDefaultLabel: {
    color: palette.light.text.dark,
  },
  lightFunction: {
    backgroundColor: palette.light.keys.secondaryShadow,
  },
  lightFunctionBackground: {
    backgroundColor: palette.light.keys.secondaryBackground,
  },
  lightFunctionLabel: {
    color: palette.light.text.light,
  },
  lightAccent: {
    backgroundColor: palette.light.keys.accentShadow,
  },
  lightAccentBackground: {
    backgroundColor: palette.light.keys.accentBackground,
  },
  lightAccentLabel: {
    color: palette.light.text.light,
  },

  contrastDefault: {
    backgroundColor: palette.contrast.keys.primaryShadow,
  },
  contrastDefaultBackground: {
    backgroundColor: palette.contrast.keys.primaryBackground,
  },
  contrastDefaultLabel: {
    color: palette.contrast.text.accent,
  },
  contrastFunction: {
    backgroundColor: palette.contrast.keys.secondaryShadow,
  },
  contrastFunctionBackground: {
    backgroundColor: palette.contrast.keys.secondaryBackground,
  },
  contrastFunctionLabel: {
    color: palette.contrast.text.light,
  },
  contrastAccent: {
    backgroundColor: palette.contrast.keys.accentShadow,
  },
  contrastAccentBackground: {
    backgroundColor: palette.contrast.keys.accentBackground,
  },
  contrastAccentLabel: {
    color: palette.contrast.text.dark,
  },
});
