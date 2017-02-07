import React, {Component} from 'react'
import { Drawer, View, Text } from 'native-base'
import { Navigator } from 'react-native'

import SettingsStore from './stores/settingsStore'
import ZWAYStore from './stores/zwayStore'

import SplashScene from './scenes/splashScene'
import Splash2Scene from './scenes/splash2Scene'
import LoginScene from './scenes/loginScene'
import ThermostatScene from './scenes/thermostatScene'

const settings = new SettingsStore()
const zwayStore = new ZWAYStore()

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: {
        settings: settings,
        zwayStore: zwayStore
      }
    }
  }

  renderScene(route, navigator) {
    switch(route.title) {
      case 'Splash': {
        return <SplashScene {...route.passProps} navigator={navigator}/>
      }
      case 'Splash2': {
        return <Splash2Scene {...route.passProps} navigator={navigator}/>
      }
      case 'Login': {
        return <LoginScene {...route.passProps} navigator={navigator}/>
      }
      case 'Thermostat': {
        return <ThermostatScene {...route.passProps} navigator={navigator}/>
      }
      default: {
        return null
      }
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  render() {
    return (
      <Navigator
             ref={(ref) => this._navigator = ref}
             configureScene={this.configureScene.bind(this)}
             renderScene={this.renderScene.bind(this)}
             initialRoute={{
               title: "Splash",
               passProps: {
                 stores: this.state.store,
                 //toggleDrawer: this.toggleDrawer.bind(this),
                 //theme: this.state.theme
               }
             }}
             />
    )
  }
}
