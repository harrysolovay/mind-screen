
import React, { Component } from 'react'
import { BodyText, Touchable } from 'components'
import { WebBrowser } from 'expo'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

class About extends Component {

  render() {
    return (
      <View style={{ flex : 1, padding : 15 }}>

      <BodyText>Mind Screen was made with <Ionicons name='md-heart' color='#ff69b4' style={{ fontSize : 16, paddingHorizontal : 5 }} /> at Columbia Health Hacks 2018. To view the (open source) repository... </BodyText><Touchable
        onPress={ () => WebBrowser.openBrowserAsync('https://github.com/harrysolovay/mind-screen') }
        style={{ borderWidth : 1, borderColor : '#4cadef', padding : 15, paddingBottom : 8, alignItems : 'center', marginTop : 10 }}
      ><BodyText style={{ color : '#4cadef' }}>click here.</BodyText></Touchable>
      </View>
    )
  }

}

export default About