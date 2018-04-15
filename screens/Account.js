
import React, { Component } from 'react'
import { BodyText, Touchable } from 'components'
import { View } from 'react-native'
import * as firebase from 'firebase'
import { NavigationActions } from 'react-navigation'

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