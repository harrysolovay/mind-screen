
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  header : {
    fontFamily : 'FuturaLTBook',
    fontSize : 20,
    lineHeight : 24
  },

  heading : {
    fontFamily : 'HelveticaNeueLight',
    fontSize : 16,
    lineHeight : 24
  },

  subHeading : {
    fontFamily : 'HelveticaNeueRegular',
    fontSize : 16,
    lineHeight : 24
  },

  body : {
    fontFamily : 'HelveticaNeueRegular',
    fontSize : 16,
    lineHeight : 24
  }

})

const HeaderText = props => <Text { ...props } style={[ styles.header, props.style ]} />
const HeadingText = props => <Text { ...props } style={[ styles.heading, props.style ]} />
const SubHeadingText = props => <Text { ...props } style={[ styles.subHeading, props.style ]} />
const BodyText = props => <Text { ...props } style={[ styles.body, props.style ]} />

export {
  HeaderText,
  HeadingText,
  SubHeadingText,
  BodyText
}