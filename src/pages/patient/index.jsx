import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

class Patient extends Component {
  componentWillUnmount() {

  }

  setTitle() {
    Taro.setNavigationBarTitle
  }

  render() {
    return (
      <View className="container">
        <View className="patient-info">

        </View>
        <View className="timeline">

        </View>
        <View className="fixed-btn" onClick={() => Taro.navigateTo({ url: '/pages/course/index' })}>
          fasd 
        </View>
      </View>
    )
  }
}

export default Patient
