import React, { Component } from 'react'

import ThermostatModeScene from './thermostatModeScene'

export default class ThermostatScene extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(<ThermostatModeScene {...this.props} />)
  }
}
