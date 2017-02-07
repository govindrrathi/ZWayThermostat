import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { AsyncStorage } from 'react-native'

export default class SplashScene extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { stores } = this.props
    setTimeout(() => {
      stores.settings.TempValue = stores.settings.TempValue + 1
      this.props.navigator.replace({title: "Login", passProps: this.props})
    }, stores.settings.SplashTime)
  }

  render() {
    //const { settings } = this.props.stores
    const { stores } = this.props;
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading...{stores.settings.TempValue}</Text>
      </View>
    )
  }
}
