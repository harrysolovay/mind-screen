
import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { BodyText, Touchable } from 'components'
import { Calendar as ReactNativeCalendars } from 'react-native-calendars'
import XBar from 'react-native-x-bar'
import { Ionicons } from '@expo/vector-icons'
import Modal from 'react-native-modalbox'
import { ImportData } from 'screens'

class Calendar extends Component {

  constructor(props) {

    super(props)
    
    const d = new Date()

    this.state = {
      today : `${ d.getFullYear() }-${ this._formatDayOrMonth(d.getMonth() + 1) }-${ this._formatDayOrMonth(d.getDate()) }`,
      reminders : true,
      remindersToggled : false,
      importingData : false
    }

  }

  _formatDayOrMonth = (value) => {
    return value.toString().length < 2
      ? `0${value}`
      : value
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
                  onPress : () => this.setState({ reminders : false, remindersToggled : true })
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
              markedDates={{
                '2012-05-23': {selected: true, marked: true},
                '2012-05-24': {selected: true, marked: true, dotColor: 'green'},
                '2012-05-25': {marked: true, dotColor: 'red'},
                '2012-05-26': {marked: true},
                '2012-05-27': {disabled: true, activeOpacity: 0}
              }}
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

}

export default Calendar