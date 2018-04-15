
import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { BodyText, HeadingText, SubHeadingText } from 'components'
import XBar from 'react-native-x-bar'

const Insight = ({ category, body }) => (
  <View style={{ borderWidth : 1, borderColor : '#ccc', margin : 15, marginTop : 0, padding : 15 }}>
    <HeadingText>{ `Category: ${ category }` }</HeadingText>
    <BodyText>{ body }</BodyText>
  </View>
)

class Insights extends Component {

  state = {
    view : '1 Week'
  }

  render() {
    return (
      <ScrollView>
        <XBar
          slots={[
            {
              style : {
                paddingTop : 20, paddingBottom : 11, paddingHorizontal : 15
              }
            },
            [
              {
                children : <BodyText>Summary for:</BodyText>
              },
              {
                children : <BodyText
                style={{
                  color : this.state.view === '1 Week' ? '#4cadef' : '#000000'
                }}
                >1 Week</BodyText>,
                onPress : () => this.setState({ view : '1 Week' })
              },
              {
                children : <BodyText
                style={{
                  color : this.state.view === '2 Weeks' ? '#4cadef' : '#000000'
                }}
                >2 Weeks</BodyText>,
                onPress : () => this.setState({ view : '2 Weeks' })
              },
              {
                children : <BodyText
                style={{
                  color : this.state.view === '1 Month' ? '#4cadef' : '#000000'
                }}
                >1 Month</BodyText>,
                onPress : () => this.setState({ view : '1 Month' })
              }
            ]
          ]}
          layout='space evenly'
        />

        <View style={{ borderWidth : 1, borderColor : '#ccc', margin : 15, marginTop : 0, marginBottom : 45, padding : 15 }}>
          <BodyText>Your app usage is heavily associated with the following psychological profile</BodyText>
          <View style={{ flex : 1, height : 1, backgroundColor : '#ccc', marginTop : 10, marginBottom : 15 }} />
          <SubHeadingText>{ `there is evidence that continuing this usage pattern could further reenforce these attitudes / behaviors` }</SubHeadingText>
        </View>
        
        <Insight
          category={ `Fight-Flight-Freeze System` }
          body={ `37% above average: focused approach to problem solving under extreme pressure.` }
        />

        <Insight
          category={ `Goal-Drive Persistence` }
          body={ `21% below average: you are often discouraged by falures, which prompt you to give up on or unnecessarily re-evaluate a goal.` }
        />

        <Insight
          category={ `Reward Reactivity` }
          body={ `38% above average: you are willing to take great risks to achieve your goals.` }
        />

        <Insight
          category={ `Impulsivity` }
          body={ `10% below average: you are quick to judge and dismiss those that you believe to be irrelevant to your wellbeing and the wellbeing of those for whom you care.` }
        />

      </ScrollView>
    )
  }

}

export default Insights