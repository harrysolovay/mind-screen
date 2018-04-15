
import React, { Component } from 'react'
import { View, ScrollView, CheckBox } from 'react-native'
import { BodyText, Touchable } from 'components'
import { NavigationActions } from 'react-navigation'
import {
  fightFlightFreezeSystem,
  behavioralInhibitionSystem,
  rewardInterest,
  goalDrivePersistence,
  rewardReactivity,
  impulsivity
} from 'constants'

const statements = [
  ...fightFlightFreezeSystem,
  ...behavioralInhibitionSystem,
  ...rewardInterest,
  ...goalDrivePersistence,
  ...rewardReactivity,
  ...impulsivity
]

class Contribute extends Component {

  state = {}

  Statement = props => (
    <View>
      <BodyText>{ props.statement }</BodyText>
      <View style={{ flexDirection : 'row', paddingBottom : 40, paddingTop : 10, justifyContent : 'space-around' }}>
        {
          [1, 2, 3, 4].map((response, i) => (
            <Touchable
              style={{ width : 30, height : 30, borderRadius : 15, borderWidth : 1, borderColor : 'red', backgroundColor : this.state[props.index] === response ? 'red' : 'white' }}
              onPress={ () => {
                this.setState({ [props.index] : response })}
              }
              key={ i }
            />
          ))
        }
      </View>
    </View>
  )

  render() {
    return (
      <View style={{ flex : 1 }}>
        <ScrollView contentContainerStyle={{ padding : 15 }}>
          <BodyText>{ `Mind Screen is powered by data drawn from users who are willing to contribute their usage data, along with details about their current experiences in life. If you're willing to share a bit of information about yourself, it would really help us improve the service so that we can provide even deeper insights. And if you'd rather not, that's cool too.`}</BodyText>
          <View style={{ flex : 1, height : 1, backgroundColor : '#ccc', marginTop : 10, marginBottom : 15 }} />
          <View style={{ padding : 15 }}>
            {
              statements.map((item, i) => (
                <this.Statement
                  statement={ item.statement }
                  index={ item.index }
                  key={ i }
                />
              ))
            }
          </View>
        </ScrollView>
        <Touchable
          style={{ paddingBottom : 30, paddingTop : 20, alignItems : 'center', justifyContent : 'center', borderTopWidth : 1, borderColor : '#ccc' }}
          onPress={ () => this.props.navigation.dispatch(NavigationActions.reset({
            index : 0,
            actions : [NavigationActions.navigate({ routeName : 'tabs' })]
          })) }
        >
          <BodyText>Skip</BodyText>
        </Touchable>
      </View>
    )
  }

}

export default Contribute