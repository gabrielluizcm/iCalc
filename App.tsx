import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Display from './src/components/Display';
import Button from './src/components/Button';

const initialState = {
  displayValue: '0',
  needClear: false,
  operation: '',
  values: [0, 0],
  currentValueIndex: 0,
};

export default class App extends Component {
  state = { ...initialState };

  addDigit = (n: string) => {
    let { displayValue, values, needClear, currentValueIndex } = this.state;

    if (n === '.' && !needClear && displayValue.includes('.')) {
      return;
    }

    needClear = needClear || displayValue === '0';
    displayValue = needClear ? n : displayValue + n;
    values[currentValueIndex] = parseFloat(displayValue);

    this.setState({ displayValue, needClear: false, values });
  };

  clearMemory = () => {
    const { displayValue } = this.state;

    if (displayValue !== '0') {
      const { values, currentValueIndex } = this.state;
      values[currentValueIndex] = 0;
      this.setState({ displayValue: '0', needClear: true, values });
    } else {
      this.setState(initialState);
    }
  };

  setOperation = (operation: string) => {
    if (this.state.operation !== '' || operation === '=') {
      this.executeStateOperation();
    }

    this.setState({
      needClear: true,
      operation: operation === '=' ? '' : operation,
      currentValueIndex: operation === '=' ? 0 : 1,
    });
  };

  executeStateOperation = () => {
    let { operation, values } = this.state;
    const formulas = {
      '+': values[0] + values[1],
      '-': values[0] - values[1],
      '×': values[0] * values[1],
      '÷': values[0] / values[1],
      '': values[0],
    };
    const result = formulas[operation] ?? '0';
    this.setState({ displayValue: result, values: [result, 0] });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" light triple onClick={this.clearMemory} />
          <Button label="÷" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="×" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
