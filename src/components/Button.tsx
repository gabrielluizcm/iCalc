import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

type ButtonProps = {
  label: string;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
  light?: boolean;
  onClick: () => void;
};

export default (props: ButtonProps) => {
  const stylesButton: any[] = [styles.button];
  let styleText = styles.text;

  if (props.double) {
    stylesButton.push(styles.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(styles.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(styles.operationButton);
  }
  if (props.light) {
    stylesButton.push(styles.lightButton);
    styleText = styles.darkText;
  }

  return (
    <TouchableHighlight onPress={props.onClick} style={stylesButton}>
      <Text style={styleText}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').width / 4.5,
    width: Dimensions.get('window').width / 4.5,
    padding: 20,
    backgroundColor: '#5b5b5b',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    marginBottom: 10,
  },
  lightButton: {
    backgroundColor: '#9c9c9c',
    color: '#010101',
  },
  operationButton: {
    backgroundColor: '#5f22d9',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2 - 20,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3 - 20,
  },
  text: {
    fontSize: 40,
    color: '#e4e4e4',
  },
  darkText: {
    fontSize: 40,
    color: '#010101',
  },
});
