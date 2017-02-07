import React, { Component } from 'react'
import { View, Text } from 'native-base'

export default class Splash2Scene extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   console.log("SOMEHTING...");
  //   const { stores } = this.props
  //   setTimeout(() => {
  //     //stores.settings.SplashTime = stores.settings.SplashTime + 1000;
  //     stores.settings.TempValue = stores.settings.TempValue + 1
  //     this.props.navigator.replace({title: "Splash", passProps: this.props})
  //   }, stores.settings.SplashTime)
  // }

  render() {
    //const { settings } = this.props.stores
    const { stores } = this.props
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading... I AM TWO {stores.settings.TempValue}</Text>
      </View>
    )
  }
}
