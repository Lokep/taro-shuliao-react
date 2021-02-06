import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtIcon, AtTag } from 'taro-ui'

import ProgresCanvas from "../../components/ProgressCircle/index";//页面引入
const progData = {
  stepone: 2,//底层圆进度，默认满圆
  steptwo: 1,//上层圆进度
  size: 1.2,//大小
  width: 8,//宽度
  colorone: "#E7E7E7",//底层圆颜色
  colortwo: "#FFB17D",//上层圆颜色
  idone: "bigdata_pro0101",//底层圆id(可用随机数)
  idtwo: "bigdata_pro0102",//上层圆id
  start: 1,//开始位置（不需要可屏蔽，相对应progress里面做相应屏蔽）
  end: 1//控制整圆or半圆
};
 

 // 按需引入
import './index.scss'

export default class Index extends Component {

  state = {
    tags: [{
      id: 1,
      active: false,
      name: '所有'
    }, {
      id: 2,
      active: false,
      name: '未完成'
    }, {
      id: 3,
      active: false,
      name: '未读完'
    }, {
      id: 4,
      active: false,
      name: '今日入院'
    }]
  }

  // componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 标签筛选
  chooseTags(id) {
    let { tags } = this.state
    let index = tags.findIndex(item => item.id == id)
    tags[index].active = !tags[index].active
    this.setState({
      tags
    })
  }

  render () {
    const { tags } = this.state
    return (
      <View className='container tabbar'>
        <View className="fixed-top align-center justify-center" onClick={() => Taro.navigateTo({ url: '/pages/department/index' })} >
          <View>新生儿科-滨江</View>
          <AtIcon value="chevron-down" />
        </View>

        <View className="tags align-center">
          {
            tags.map(item => (
              <View className="tag" key={item.id}>
                <AtTag active={item.active} circle onClick={() => this.chooseTags(item.id)}>
                  {item.name}
                </AtTag>
              </View>
            ))
          }
        </View>

        <View className="patient-list flex">
          <View className="patient-item align-center" onClick={() => Taro.navigateTo({ url: '/pages/patient/index' })}>
            {/* <ProgresCanvas data={progData} width={30} /> */}
            <View className="patient-circle"></View>
            <View className="patient-info">
              <View className="align-center">
                <View className="patient-name" >诸葛铁牛</View>
                <View className="patient-days" >12天</View>
              </View>
              <View className="patient-no">25424523451</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
