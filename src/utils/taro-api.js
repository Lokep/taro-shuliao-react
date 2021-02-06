import Taro, {
  getSystemInfoSync
} from '@tarojs/taro'

/**
 * 未完全列举所有环境变量，详情请看：
 * https://taro-docs.jd.com/taro/docs/apis/about/env#tarogetenv
 * ENV_TYPE.WEAPP 微信小程序环境
 * ENV_TYPE.WEB WEB(H5)环境
 */
export const getEnv = () => Taro.getEnv().toLocaleLowerCase()


/**
 * 获取系统信息
 * https://taro-docs.jd.com/taro/docs/apis/base/system/getSystemInfo
 * pixelRatio 设备像素比
 * platform 客户端平台
 * safeArea 安全区域
 * screenHeight
 * screenWidth
 * statusBarHeight 状态栏高度
 * windowHeight
 * windowWidth
 */

export const getSystemInfo = params => {

  const systemInfo = getSystemInfoSync()

  if (params === undefined) {

    return systemInfo

  } else if (params && typeof params === 'string') {

    return systemInfo[params]

  } else {

    console.error('getSystemIno方法参数类型不正确')

  }
}

// 检查更新
export const checkAppUpdate = () => {
  // 仅在小程序中检查更新
  if (getEnv !== 'weapp') return

  const updateManager = Taro.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    console.log('[应用有新的版本]', res.hasUpdate)
    updateManager.onUpdateReady(function () {
      Taro.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
      Taro.showModal({
        title: '发现新版本',
        content: '请删除当前小程序，重新搜索打开...',
      })
    })
  })

}

export const handleNotWeappEnv = () => {
  if (getEnv() !== 'weapp') {
    console.error('很抱歉，您当前不是weapp环境')
    return false
  }
}

export const handleNotWebEnv = () => {
  if (getEnv() !== 'web') {
    console.error('很抱歉，您当前不是web环境')
    return false
  }
}
