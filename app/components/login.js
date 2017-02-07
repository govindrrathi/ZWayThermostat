import React, { Component } from 'react'
import {
  Button,
  InputGroup,
  Input,
  Icon,
  Text,
  View,
  Spinner
} from 'native-base'
import { Alert } from 'react-native'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zboxId: '',
      userId: '',
      password: '',
      msg: '',
      loading: null
    }
  }

  updatezboxId(zboxId) { this.setState({zboxId}) }
  updateUserId(userId) { this.setState({userId}) }
  updatePassword(password) { this.setState({password}) }

  signIn() {
    const { zwayStore } = this.props.stores
    const { zboxId, userId, password } = this.state

    this.setState({loading: true}, () => {
      this.setState({msg: 'Initializing ZBox session'})
      zwayStore.initializeZBWSession(zboxId, password)
      .then((response) => {
        //console.log(response)
        this.setState({msg: 'ZBox session completed'})
        this.setState({msg: 'Logging user'})
        zwayStore.initializeZWaySession(userId, password)
        .then((response) => {
          this.setState({msg: 'Login successful'})
          this.setState({msg: 'Getting devices'})
          zwayStore.getAllDevices()
          .then((response) => {
            this.setState({msg: 'Devices found', loading: false})
            //console.log(response)
            this.props.navigator.replace({title: "Thermostat", passProps: this.props})
          })
        })
      })
      .catch((error) => {
        console.error(error);
      });
    })
  }

  render() {
    const { loading } = this.state
    const { auth } = this.props.stores

    return (
      <View>
        {loading ? <Spinner/> : null}
        <InputGroup style={{marginBottom:10}}>
          <Input style={{color:"black"}}
            placeholder='Please Enter ZBox Id'
            placeholderTextColor="gray"
            onChangeText={(zboxId) => { this.updatezboxId(zboxId)}} />
        </InputGroup>
        <InputGroup style={{marginBottom:10}} boarderType='round'>
          <Input style={{color:"black"}}
            placeholder='Please Enter User Id'
            placeholderTextColor="gray"
            onChangeText={(userId) => { this.updateUserId(userId)}} />
        </InputGroup>
        <InputGroup style={{marginBottom:10}} boarderType='round'>
          <Input style={{color:"black"}}
            placeholder='Please Enter Password'
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(pass) => { this.updatePassword(pass)}} />
        </InputGroup>
        <Button block style={{marginBottom:10}} onPress={this.signIn.bind(this)}>
          {'Connect'}
        </Button>
        <Text>{this.state.msg}</Text>
      </View>
    )
  }
}
