import { AsyncStorage } from 'react-native'

const keyPrefix = '@ZWayThermostat:'
const userIdKey = keyPrefix + 'uid'

export default class SettingsStore {
  constructor() {
    this.splashTime = 1000
    this.userId = null

    AsyncStorage.getItem(userIdKey, (error, value) => {
      if(error !== null) {
        console.log('We have some error in reading ' + userIdKey + ': ' + error)
      }
      if (value !== null){
        this.userId = value
      }
    });
  }
  get SplashTime() {
    return this.splashTime
  }

  set SplashTime(val) {
    this.splashTime = val
  }

  get UserId() {
    return this.userId
  }

  set UserId(val) {
    this.userId = val
    AsyncStorage.setItem(userIdKey, val, (error) => {
      console.log('We have some error in storing ' + userIdKey + ': ' + error)
    })
  }
}
