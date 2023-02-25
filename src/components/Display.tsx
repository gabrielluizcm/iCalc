import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#010101',
  },
  displayValue: {
    fontSize: 80,
    color: '#e4e4e4',
  },
});

export default (props) => (
  <View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>
      {props.value}
    </Text>
  </View>
);
