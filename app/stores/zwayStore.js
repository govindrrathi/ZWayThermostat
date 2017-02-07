export default class ZWayStore {
  constructor() {
    this.userId = ''
  }

  signIn(zboxId, userId, password) {
    return this.initializeZBWSession(zboxId, userId, password)
  }

  getAllDevices() {
     let init = {
       method: 'GET',
       credentials: 'include',
       mode: 'cors',
     };

     //console.log("Begin GetDevices@@@@@@@@");
     return fetch('https://find.z-wave.me/ZAutomation/api/v1/devices', init)
   }

  initializeZBWSession(zboxId, password) {
    let data = "act=login&login=" + zboxId + "&pass=" + password;
    console.log("Data is " + data)
    let init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      mode: 'cors',
      body: data
    };

    return fetch('https://find.z-wave.me/zboxweb', init)
  }

  initializeZWaySession(userId, password) {
     let data = JSON.stringify({"password":password,"login":userId,"rememberme":false});

     let init = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       credentials: 'include',
       mode: 'cors',
       body: data
     };

     return fetch('https://find.z-wave.me/ZAutomation/api/v1/login', init)
   }

   setThermostatMode(mode) {
 		let url = 'https://find.z-wave.me/ZWave.zway/Run/devices[20].instances[0].ThermostatMode.Set(' + mode + ')';
    let init = {
      method: 'GET'
    }
 		return fetch(url, init)
 	}

  getThermostatMode() {
    let url = 'https://find.z-wave.me/ZWave.zway/Run/devices[20].instances[0].ThermostatMode'
    let init = {
      method: 'GET'
    }
		return fetch(url, init)
	}
}
