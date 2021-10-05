import React, { useContext } from 'react';
import { StyleSheet, Pressable, Text, View, Platform } from 'react-native';
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
  keyStyles = Platform.select({
    web: [...keyStyles, ...sKey, ...sBackground],
    default: [...keyStyles, ...sKey],
  });
  backgroundStyles = [...backgroundStyles, ...sBackground];
  labelStyles = [...labelStyles, ...sLabel];

  const content = Platform.select({
    web: <Text style={labelStyles}>{label}</Text>,
    default: (
      <View style={backgroundStyles}>
        <Text style={labelStyles}>{label}</Text>
      </View>
    ),
  });

  return (
    <Pressable
      android_disableSound={true}
      style={keyStyles}
      onPress={() => console.log(`${label} key pressed`)}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      web: {
        width: 'calc(25% - 18px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24,
        paddingTop: 12,
        paddingBottom: 6,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        borderRadius: 8,
        cursor: 'pointer',
        userSelect: 'none',
      },
      default: {
        flex: 1,
        aspectRatio: 0.95,
        marginRight: 12,
        borderRadius: 4,
      },
    }),
    overflow: 'hidden',
  },
  noRightMargin: {
    marginRight: 0,
  },
  label: {
    fontFamily: 'Spartan_700Bold',
    fontSize: 32,
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    position: 'absolute',
    bottom: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doubleKey: {
    ...Platform.select({
      web: {
        width: 'calc(50% - 12px)',
      },
      default: {
        aspectRatio: 1.95,
      },
    }),
  },
  smallerText: {
    fontSize: 18,
  },

  darkDefault: {
    ...Platform.select({
      web: {
        shadowColor: palette.dark.keys.primaryShadow,
      },
      default: {
        backgroundColor: palette.dark.keys.primaryShadow,
      },
    }),
  },
  darkDefaultBackground: {
    backgroundColor: palette.dark.keys.primaryBackground,
  },
  darkDefaultLabel: {
    color: palette.dark.text.dark,
  },
  darkFunction: {
    ...Platform.select({
      web: {
        shadowColor: palette.dark.keys.secondaryShadow,
      },
      default: {
        backgroundColor: palette.dark.keys.secondaryShadow,
      },
    }),
  },
  darkFunctionBackground: {
    backgroundColor: palette.dark.keys.secondaryBackground,
  },
  darkFunctionLabel: {
    color: palette.dark.text.light,
  },
  darkAccent: {
    ...Platform.select({
      web: {
        shadowColor: palette.dark.keys.accentShadow,
      },
      default: {
        backgroundColor: palette.dark.keys.accentShadow,
      },
    }),
  },
  darkAccentBackground: {
    backgroundColor: palette.dark.keys.accentBackground,
  },
  darkAccentLabel: {
    color: palette.dark.text.light,
  },

  lightDefault: {
    ...Platform.select({
      web: {
        shadowColor: palette.light.keys.primaryShadow,
      },
      default: {
        backgroundColor: palette.light.keys.primaryShadow,
      },
    }),
  },
  lightDefaultBackground: {
    backgroundColor: palette.light.keys.primaryBackground,
  },
  lightDefaultLabel: {
    color: palette.light.text.dark,
  },
  lightFunction: {
    ...Platform.select({
      web: {
        shadowColor: palette.light.keys.secondaryShadow,
      },
      default: {
        backgroundColor: palette.light.keys.secondaryShadow,
      },
    }),
  },
  lightFunctionBackground: {
    backgroundColor: palette.light.keys.secondaryBackground,
  },
  lightFunctionLabel: {
    color: palette.light.text.light,
  },
  lightAccent: {
    ...Platform.select({
      web: {
        shadowColor: palette.light.keys.accentShadow,
      },
      default: {
        backgroundColor: palette.light.keys.accentShadow,
      },
    }),
  },
  lightAccentBackground: {
    backgroundColor: palette.light.keys.accentBackground,
  },
  lightAccentLabel: {
    color: palette.light.text.light,
  },

  contrastDefault: {
    ...Platform.select({
      web: {
        shadowColor: palette.contrast.keys.primaryShadow,
      },
      default: {
        backgroundColor: palette.contrast.keys.primaryShadow,
      },
    }),
  },
  contrastDefaultBackground: {
    backgroundColor: palette.contrast.keys.primaryBackground,
  },
  contrastDefaultLabel: {
    color: palette.contrast.text.accent,
  },
  contrastFunction: {
    ...Platform.select({
      web: {
        shadowColor: palette.contrast.keys.secondaryShadow,
      },
      default: {
        backgroundColor: palette.contrast.keys.secondaryShadow,
      },
    }),
  },
  contrastFunctionBackground: {
    backgroundColor: palette.contrast.keys.secondaryBackground,
  },
  contrastFunctionLabel: {
    color: palette.contrast.text.light,
  },
  contrastAccent: {
    ...Platform.select({
      web: {
        shadowColor: palette.contrast.keys.accentShadow,
      },
      default: {
        backgroundColor: palette.contrast.keys.accentShadow,
      },
    }),
  },
  contrastAccentBackground: {
    backgroundColor: palette.contrast.keys.accentBackground,
  },
  contrastAccentLabel: {
    color: palette.contrast.text.dark,
  },
});
