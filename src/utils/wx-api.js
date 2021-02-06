import { handleNotWeappEnv } from './taro-api'

/**
 * 该方法为wx登录方法
 * 
 */


export const wxLogin = () => {
  if (!handleNotWeappEnv()) return false

  return new Promise(resolve => {
    wx.login({
      success(res) {
        if (res.code) {
          resolve(res)
        } else {
          console.error(res.errMsg)
          resolve({})
        }
      }
    })
  })
  
}


/**
 * wx获取设置
 */
export const getSetting = () => {
  if (!handleNotWeappEnv()) return false
  
  return new Promise(resolve => {
    wx.getSetting({
      success: e => {
        resolve(e)
      },
      fail: err => {
        resolve(false)
      }
    })
  })
}



/**
 * 获取用户信息
 */


export const getUserInfo = () => {
  
  if (!handleNotWeappEnv()) return false

  return new Promise((resolve, reject) => {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              resolve(res)
            },
            fail: err => reject(err)
          })
        } else {
          reject()
        }
      }
    })
  })
}