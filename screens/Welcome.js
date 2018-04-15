
import React, { Component } from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { View } from 'react-native'
import Picache from 'picache'
import { BodyText, HeadingText, SubHeadingText } from 'components'

const Square = () => (
  <View
    style={{
      width : 100,
      height : 100,
      backgroundColor : 'green'
    }}
  />
)

class Welcome extends Component {

  render() {
    return (
      <Onboarding
        pages={[
          { backgroundColor: '#75cb80', image: <Picache source={require('assets/logo.png')} imageResizeMode='contain' style={{ top : -100, width : 150, height : 150 }} />, title : 'Become aware of how your specific app usage patterns can influence your personality and promote both healthy and unhealthy behaviors', subtitle : '' },
          { backgroundColor : 'red', image: <Picache source={require('assets/logo.png')} imageResizeMode='contain' style={{ top : -100, width : 150, height : 150 }} />, title: '1) easily import your "screen time"', subtitle: '' },
          { backgroundColor: "#fe6e58", image: <Picache source={require('assets/logo.png')} imageResizeMode='contain' style={{ top : -100, width : 150, height : 150 }} />, title: '2) learn from statistical insights about how your usage might be creating dysfunction', subtitle : '' },
          { backgroundColor: "#999", image: <Picache source={require('assets/logo.png')} imageResizeMode='contain' style={{ top : -100, width : 150, height : 150 }} />, title: '3) Self-improve', subtitle: '' },
        ]}
        onSkip={ this._goToLogIn }
        onDone={ this._goToLogIn }
      />
    )
  }

  _goToLogIn = () => {
    this.props.navigation.navigate('logIn')
  }

}

export default Welcome