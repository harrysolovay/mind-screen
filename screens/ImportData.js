
import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { HeadingText, BodyText, Touchable } from 'components'
import { LinearGradient, ImagePicker } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import XBar from 'react-native-x-bar'

class ImportData extends Component {

  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection : 'row', alignItems : 'center', borderBottomWidth : 1, borderColor : '#ddd', padding : 10, paddingBottom : 3, paddingLeft : 10 }}>
          <HeadingText style={{ flex : 1 }}>IMPORTING USAGE DATA</HeadingText>
          <Touchable
            onPress={ this.props.close }
            style={{ paddingBottom : 1 }}
          >
            <Ionicons
              name='ios-close-circle-outline'
              size={ 30 }
            />
          </Touchable>
        </View>
        <View style={{ margin : 15, borderWidth : 1, borderColor : '#ddd' }}>
          <XBar
            slots={[
              {
                children : <BodyText>Step 1</BodyText>
              },
              {
                children : <BodyText>Go to the Settings App</BodyText>,
                overflow : {
                  effect : 'fade',
                  effectConfig : {
                    LinearGradient
                  }
                },
                style : {
                  paddingLeft : 15
                }
              }
            ]}
            layout='space between'
            style={{ paddingBottom : 10, paddingTop : 17, paddingHorizontal : 15 }}
          />
          <XBar
            slots={[
              {
                children : <BodyText>Step 2</BodyText>
              },
              {
                children : <BodyText>Navigate to Battery > Last # Days</BodyText>,
                overflow : {
                  effect : 'fade',
                  effectConfig : {
                    LinearGradient
                  }
                },
                style : {
                  paddingLeft : 15
                }
              }
            ]}
            layout='space between'
            style={{ paddingBottom : 10, paddingTop : 17, paddingHorizontal : 15 }}
          />
          <XBar
            slots={[
              {
                children : <BodyText>Step 3</BodyText>
              },
              {
                children : <BodyText>Tap anywhere in the App list</BodyText>,
                overflow : {
                  effect : 'fade',
                  effectConfig : {
                    LinearGradient
                  }
                },
                style : {
                  paddingLeft : 15
                }
              }
            ]}
            layout='space between'
            style={{ paddingBottom : 10, paddingTop : 17, paddingHorizontal : 15 }}
          />
          <XBar
            slots={[
              {
                children : <BodyText>Step 4</BodyText>,
              },
              {
                children : <BodyText>Take a screenshot</BodyText>,
                overflow : {
                  effect : 'fade',
                  effectConfig : {
                    LinearGradient
                  }
                },
                style : {
                  paddingLeft : 15
                }
              }
            ]}
            layout='space between'
            style={{ paddingBottom : 10, paddingTop : 17, paddingHorizontal : 15 }}
          />
          <XBar
            slots={[
              {
                children : <BodyText>Step 5</BodyText>
              },
              {
                children : <BodyText>Import the screenshot below</BodyText>,
                overflow : {
                  effect : 'fade',
                  effectConfig : {
                    LinearGradient
                  }
                },
                style : {
                  paddingLeft : 15
                }
              }
            ]}
            layout='space between'
            style={{ paddingBottom : 10, paddingTop : 17, paddingHorizontal : 15 }}
          />
        </View>
        <Touchable style={{ paddingBottom : 10, paddingTop : 17, paddingHorizontal : 15, borderWidth : 1, borderColor : '#ccc', margin : 15, marginTop : 0 }}
          onPress={ this._pickScreenshot }
        >
          <BodyText style={{ color : '#4cadef' }}>IMPORT SCREENSHOT FROM CAMERA</BodyText>
        </Touchable>
      </ScrollView>
    )
  }

  _pickScreenshot = async() => {
    const image = await ImagePicker.launchImageLibraryAsync()
  }

}

export default ImportData