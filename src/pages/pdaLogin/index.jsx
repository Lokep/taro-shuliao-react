import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import Taro from '@tarojs/taro'

import './index.scss'
import { padLogin } from '../../api/login'
import { saveCache } from '../../utils/taro-api'

export default class Index extends Component {

  componentDidMount () {
    console.log('componentDidMount')
    saveCache('a', '1')
  }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('componentDidShow')
    this.login()
  }

  componentDidHide () { }

  login() {
    return padLogin({
      'userDTO.account': 'mis_loutn',
      'userDTO.password': 123456,
      'userDTO.remember': 1,
    }).then(res => {

    })
  }

  render () {
    return (
      <View className='container'>
        <View className="form">
          <AtInput
            name='value'
            title='账号'
            type='text'
            placeholder='请输入账号'
          />
          <AtInput
            name='value'
            title='密码'
            type='password'
            border={false}
            placeholder='请输入密码'
          />
        </View>
        <View className="btn-fixed">
          <AtButton type="primary" circle >提交</AtButton>
        </View>
      </View>
    )
  }
}
