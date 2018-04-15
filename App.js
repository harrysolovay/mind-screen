
import React, { Component } from 'react'
import { AppLoading, Font } from 'expo'
import { StatusBar, View } from 'react-native'
import { Provider } from 'mobx-react'
import stores from 'stores'
import Navigator from 'navigation'

console.ignoredYellowBox = [
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted(...) is deprecated',
]

class App extends Component {

  state = {
    assetsLoading : true
  }

  render() {
    return this.state.assetsLoading
      ? (
        <AppLoading
          startAsync={ this._loadAssets }
          onError={ console.error }
          onFinish={ () => this.setState({ assetsLoading : false }) }
        />
      ) : (
        <View style={{ flex : 1 }}>
          <StatusBar
            barStyle='dark-content'
          />
          <Provider { ...stores }>
            <Navigator />
          </Provider>
        </View>
      )
  }

  _loadAssets = async() => (
    Promise.all([
      Font.loadAsync({
        HelveticaNeueLight : require('./assets/fonts/HelveticaNeue-Light.ttf'),
        HelveticaNeueRegular : require('./assets/fonts/HelveticaNeue-Regular.ttf'),
        HelveticaNeueBold : require('./assets/fonts/HelveticaNeue-Bold.ttf'),
        FuturaLTBook : require('./assets/fonts/FuturaLT-Book.ttf')
      })
    ])
  )

}

export default App