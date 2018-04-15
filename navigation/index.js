
import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { HeaderText, Touchable } from 'components'

import {
  Welcome,
  LogIn,
  Contribute,
  Survey,
  Calendar,
  Insights,
  Account,
  About
} from 'screens'

const Tabs = TabNavigator({
  calendar : {
    screen : Calendar,
    navigationOptions : {
      tabBarIcon : ({ tintColor }) => (
        <Ionicons
          name='ios-calendar-outline'
          size={ 30 }
          color={ tintColor }
        />
      ),
      title : 'MEASURING YOUR SCREEN TIME'
    }
  },
  insights : {
    screen : Insights,
    navigationOptions : {
      tabBarIcon : ({ tintColor }) => (
        <Ionicons
          name='ios-albums-outline'
          size={ 30 }
          color={ tintColor }
        />
      ),
      title : `YOUR USAGE & IT'S IMPLICATIONS`
    }
  },
  account : {
    screen : Account,
    navigationOptions : {
      tabBarIcon : ({ tintColor }) => (
        <Ionicons
          name='ios-contact-outline'
          size={ 32 }
          color={ tintColor }
        />
      ),
      title : `YOUR ACOUNT`
    }
  }
}, {
  tabBarOptions : {
    labelStyle : {
      display : 'none'
    },
    style : {
      paddingTop : 10,
      backgroundColor : '#eee',
      borderColor : '#ddd'
    }
  }
})

const options = () => ({
  navigationOptions : ({ navigation }) => ({
    headerLeft : () => (
      <Touchable
        onPress={ () => navigation.goBack() }
        style={{ marginLeft : 10 }}
      >
        <Ionicons
          name='ios-arrow-round-back'
          size={ 40 }
        />
      </Touchable>
    ),
    headerTitle : HeaderText,
    headerStyle : {
      borderColor : '#ccc',
      backgroundColor : '#eee'
    }
  }),
  cardStyle : { backgroundColor : '#fff' }
})

const Navigator = StackNavigator({
  welcome : {
    screen : Welcome,
    navigationOptions : {
      title : 'WELCOME!'
    }
  },
  logIn : {
    screen : LogIn,
    navigationOptions : {
      title : 'LOG IN'
    }
  },
  contribute : {
    screen : Contribute,
    navigationOptions : {
      title : 'PLEASE HELP US LEARN'
    }
  },
  survey : {
    screen : Survey,
    navigationOptions : {
      title : 'HOW MUCH DO YOU AGREE?'
    }
  },
  tabs : { screen : Tabs },
  about : {
    screen : About,
    navigationOptions : {
      title : 'ABOUT MIND SCREEN'
    }
  }
}, options())

export default Navigator