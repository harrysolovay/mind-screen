
import React, { Component } from 'react'
import { BodyText } from 'components'
import { View } from 'react-native'
import { Facebook, Google } from 'expo'
import XBar from 'react-native-x-bar'
import * as firebase from 'firebase'
import { inject } from 'mobx-react'
import { NavigationActions } from 'react-navigation'
import Picache from 'picache'

@inject('userStore')
class LogIn extends Component {

  constructor(props) {
    super(props)
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(true)
        this.props.userStore.user = user
        this.props.navigation.dispatch(NavigationActions.reset({
          index : 0,
          actions : [NavigationActions.navigate({ routeName : 'contribute' })]
        }))
      }
    })
  }

  render() {
    return (
      <View style={{ flex : 1, flexDirection : 'column', justifyContent : 'center', alignItems : 'center' }}>

        <Picache source={require('assets/logo.png')} imageResizeMode='contain' style={{ width : 150, height : 150 }} />
        <BodyText style={{ fontSize : 20 }}>time to start the healing</BodyText>
        <XBar
          slots={[
            {
              children : <BodyText style={{ color : '#fff' }}>Log in with Facebook</BodyText>,
            }
          ]}
          style={{
            borderRadius : 5,
            backgroundColor : '#3B5998',
            paddingTop : 12, paddingHorizontal : 15, paddingBottom : 6,
            alignSelf : 'stretch',
            margin : 15, marginBottom : 0, marginTop : 30
          }}
          layout='space evenly'
          onPress={ this._logInWithFacebook }
        />
        <XBar
          slots={[
            {
              children : <BodyText style={{ color : '#fff' }}>Log in with Google</BodyText>,
            }
          ]}
          style={{
            borderRadius : 5,
            backgroundColor : '#dd4b39',
            paddingTop : 12, paddingHorizontal : 15, paddingBottom : 6,
            alignSelf : 'stretch',
            margin : 15
          }}
          layout='space evenly'
          onPress={ this._logInWithFacebook }
        />
      </View>
    )
  }

  _logInWithFacebook = async () => {

    const { type, token } = await Facebook.logInWithReadPermissionsAsync('144817946357487', {
      permissions : [ 'public_profile' ]
    })

    if(type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(credential)
    }

  }

  _logInWithGoogle = async () => {

    // const result = await Google.logInAsync({
    //   iosClientId : '92268497123-9p51rd05af1n2s861prnf7804o3ikqf0.apps.googleusercontent.com',
    //   scopes : [ 'profile' ]
    // })

    // if(result.type === 'success') {
    //   console.log(result.accessToken)
    // }
  }

}

export default LogIn