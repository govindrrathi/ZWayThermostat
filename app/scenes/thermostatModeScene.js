import React, { Component } from 'react'
import {
  Container,
  Content,
  View,
  Spinner,
  Text
} from 'native-base'
import { Image, StyleSheet, Dimensions } from 'react-native'

import ThermostatMode from '../components/thermostatMode'

export default class ThermostatModeScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: {id: 1, text: 'Heat'},
      validModes: [
        {id: 0, text: 'Off'},
        {id: 1, text: 'Heat'},
        {id: 2, text: 'Cool'},
        {id: 3, text: 'Auto'}
      ],
      loading: false
    }
  }

  handleModeChange(id, name) {
    this.setState({
        mode: {'id': id, 'text': name}
    });
  }

  render() {
    const { loading, validModes, mode } = this.state

    return (
      <Container>
        {loading ? <Spinner/> : null}
        <View>
          <Text> Current Mode: {mode.text} </Text>
        </View>
        <View style={style.container}>
          { validModes? validModes.map(function(mode, index){
              return <ThermostatMode key={mode.id} id={mode.id} name={mode.text} onUserInput={this.handleModeChange.bind(this)} />;
          }.bind(this)) : null}
        </View>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10
  }
})
