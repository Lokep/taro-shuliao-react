import React, { Component } from 'react'
import { View } from '@tarojs/components'
 
class Layout extends Component {
  render () {
    console.log(this.props)
    return (
      <View className='container'>
        sadf
        {
          this.props
        }
      </View>
    )
  }
}

export default Layout