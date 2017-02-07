import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'native-base'

export default class ThermostatMode extends Component {
	constructor(props) {
		super(props);

    this.state = {
      mode: ''
    }
	}

	onChangeModePressed() {
    //const { zwayStore } = this.props.stores
		//this.setThermostatMode();
    this.props.onUserInput(this.props.id, this.props.name);
	}

	render() {
		return (
			<Button full style={style.mode} onPress={this.onChangeModePressed.bind(this)}>
        {this.props.name}
      </Button>
		);
	}
}

const style = StyleSheet.create({
  mode: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center'
  }
})
