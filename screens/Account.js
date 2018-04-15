
import React, { Component } from 'react'
import { BodyText, Touchable } from 'components'
import { View } from 'react-native'
import * as firebase from 'firebase'
import { NavigationActions } from 'react-navigation'
import XBar from 'react-native-x-bar'
import { Ionicons } from '@expo/vector-icons'

class Account extends Component {

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Touchable
          onPress={ this._logOut }
          style={{ backgroundColor : '#b82e27', padding : 15, paddingBottom : 10, borderRadius : 3, margin : 15, alignItems : 'center' }}
        >
          <BodyText style={{ color : '#fff' }}>Log Out</BodyText>
        </Touchable>
        <XBar
          slots={[
            {
              children : <BodyText>About this app</BodyText>
            },
            {
              children : (
                <Ionicons
                  name='ios-arrow-forward'
                  zize={ 20 }
                  color='#000'
                  style={{ paddingBottom : 4 }}
                />
              )
            }
          ]}
          layout='space between'
          style={{
            padding : 15, paddingBottom : 8,
            borderWidth : 1,
            borderColor : '#ccc',
            margin : 15
          }}
          onPress={ () => this.props.navigation.navigate('about') }
        />
      </View>
    )
  }

  _logOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.dispatch(NavigationActions.reset({
        index : 0,
        actions : [NavigationActions.navigate({ routeName : 'logIn' })]
      }))
    })
  }

}

export default Account