
import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { BodyText, Touchable } from 'components'
import { Calendar as ReactNativeCalendars } from 'react-native-calendars'
import XBar from 'react-native-x-bar'
import { Ionicons } from '@expo/vector-icons'
import Modal from 'react-native-modalbox'
import { ImportData } from 'screens'
import { Notifications, Constants, Permissions } from 'expo'

class Calendar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      reminders : true,
      remindersToggled : false,
      importingData : false,
      aWeekFromNow : '04-22-2018'
    }

    let t = new Date();
    t.setSeconds(t.getSeconds() + 604800);

    Notifications.scheduleLocalNotificationAsync({
      title : 'Import your app usage data',
      body : `It's been a whole week! Please import your app usage data so that we can provide you with valuable insights into your psyche.`,
      ios : {
        sound : true
      },
      priority : 'high',
      vibrate : true
    }, {
      time : t,
      repeat : 'week'
    })

  }

  render() {
    return (
      <View style={{ flex : 1 }}>
        <ScrollView>
          <Touchable style={{ borderColor : '#ddd', borderWidth : 1, flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center', padding : 15, margin : 15, marginTop : 30 }}
            onPress={ () => this.setState({ importingData : true }) }
          >
            <BodyText style={{ color : '#4cadef', flex : 1, paddingTop : 4 }}>Tap in this box to add usage data (for valuable insights into your general well-being)</BodyText>
          </Touchable>
          <View style={{ padding : 15, borderColor : '#ddd', borderWidth : 1, margin : 15 }}>
            <BodyText>{ `Would you like weekly reminders to save your usage (this will improve the insights that can be gained regarding your phone usage habits and corresponding mental health)` }</BodyText>
            <XBar
              slots={[
                {
                  children : <BodyText style={{ color : this.state.reminders ? '#000' : '#4cadef' }}>NO</BodyText>,
                  onPress : () => {
                    this.setState({ reminders : false, remindersToggled : true })
                    Notifications.cancelAllScheduledNotificationsAsync()
                  }
                },
                {
                  children : <BodyText style={{ color : this.state.reminders ? '#4cadef' : '#000' }}>YES</BodyText>,
                  onPress : () => this.setState({ reminders : true, remindersToggled : true })
                }
              ]}
              layout='space evenly'
              style={{ paddingTop : 15 }}
            />
          </View>
          {
            this.state.remindersToggled &&
              <View style={{ padding : 15, borderColor : '#ddd', borderWidth : 1, margin : 15, marginTop : 0 }}>
                <BodyText>
                  {
                    this.state.reminders
                      ? `Great! We'll let you know when it's time to enter your usage data`
                      : `Okay–we won't remind you to enter your usage data`
                  }
                </BodyText>
              </View>
          }
          <View style={{ padding : 15 }}>
            <ReactNativeCalendars
              style={{
                borderWidth : 1,
                borderColor : '#ddd'
              }}
              current={ this.state.today }
              firstDay={1}
              markedDates={
                this.state.reminders ? {
                  '2018-04-22' : {marked: true, dotColor: 'green'},
                  '2018-04-29' : {marked: true, dotColor: 'green'},
                  '2018-05-06' : {marked: true, dotColor: 'green'}
                } : null
              }
              // disabledByDefault={true}
              hideArrows={true}
            />
          </View>
        </ScrollView>
        <Modal
          isOpen={ this.state.importingData }
          swipeToClose={ true }
          onClosed={ () => this.setState({ importingData : false }) }
        >
          <ImportData
            close={ (() => this.setState({ importingData : false })).bind(this) }
          />
        </Modal>
      </View>
    )
  }

  async componentDidMount() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  }

}

export default Calendar