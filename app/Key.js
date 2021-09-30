import React from 'react';
import { StyleSheet, Pressable, Alert, Text, View } from 'react-native';

export default function Key({ label, lastInLine, variant }) {
  const stylesForVariant = (selectedVariant) => {
    switch (selectedVariant) {
      case 'eq':
        return {
          key: styles.red,
          background: styles.redBackground,
          label: styles.redLabel,
        };
      case 'fnDouble':
        return {
          key: styles.blueDouble,
          background: styles.blueBackground,
          label: styles.blueLabel,
        };
      case 'fn':
        return {
          key: styles.blue,
          background: styles.blueBackground,
          label: styles.blueLabel,
        };
      case 'dot':
      case 'op':
      case 'num':
      default:
        return {
          key: styles.grey,
          background: styles.greyBackground,
          label: styles.greyLabel,
        };
    }
  };

  const backgroundStyles = [styles.background];
  const keyStyles = [styles.container];
  const labelStyles = [styles.label];

  if (lastInLine) {
    keyStyles.push(styles.noRightMargin);
  }

  const {
    background: sBackground,
    key: sKey,
    label: sLabel,
  } = stylesForVariant(variant);
  keyStyles.push(sKey);
  backgroundStyles.push(sBackground);
  labelStyles.push(sLabel);

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
  grey: {
    backgroundColor: 'hsl(28, 16%, 65%)',
  },
  greyBackground: {
    backgroundColor: 'hsl(30, 25%, 89%)',
  },
  greyLabel: {
    color: 'hsl(221, 14%, 31%)',
  },
  red: {
    backgroundColor: 'hsl(6, 70%, 34%)',
    aspectRatio: 1.95,
  },
  redBackground: {
    backgroundColor: 'hsl(6, 63%, 50%)',
  },
  redLabel: {
    color: 'hsl(0, 0%, 100%)',
  },
  blue: {
    backgroundColor: 'hsl(224, 28%, 35%)',
  },
  blueDouble: {
    backgroundColor: 'hsl(224, 28%, 35%)',
    aspectRatio: 1.95,
  },
  blueBackground: {
    backgroundColor: 'hsl(225, 21%, 49%)',
  },
  blueLabel: {
    color: 'hsl(0, 0%, 100%)',
    fontSize: 18,
  },
});
