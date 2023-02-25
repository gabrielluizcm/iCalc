import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Display from './src/components/Display';
import Button from './src/components/Button';

export default class App extends Component {
  state = {
    displayValue: '0',
  };

  addDigit = (n: string) => {
    this.setState({ displayValue: n });
  };

  clearMemory = () => {
    this.setState({ displayValue: '0' });
  };

  setOperation = (operation: string) => {
    console.warn(operation);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" light triple onClick={this.clearMemory} />
          <Button label="÷" operation onClick={() => this.setOperation('/')} />
          <Button label="7" onClick={() => this.addDigit('7')} />
          <Button label="8" onClick={() => this.addDigit('8')} />
          <Button label="9" onClick={() => this.addDigit('9')} />
          <Button label="×" operation onClick={() => this.setOperation('*')} />
          <Button label="4" onClick={() => this.addDigit('4')} />
          <Button label="5" onClick={() => this.addDigit('5')} />
          <Button label="6" onClick={() => this.addDigit('6')} />
          <Button label="-" operation onClick={() => this.setOperation('-')} />
          <Button label="1" onClick={() => this.addDigit('1')} />
          <Button label="2" onClick={() => this.addDigit('2')} />
          <Button label="3" onClick={() => this.addDigit('3')} />
          <Button label="+" operation onClick={() => this.setOperation('+')} />
          <Button label="0" double onClick={() => this.addDigit('0')} />
          <Button label="." onClick={() => this.addDigit('.')} />
          <Button label="=" operation onClick={() => this.setOperation('=')} />
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
