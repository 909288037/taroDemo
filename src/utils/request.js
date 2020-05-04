import Taro from '@tarojs/taro';

export function getJSON(url, data) {
  return Taro.request({
    url,
    data,
    method: 'GET'
  })
}

export function postJSon(url, data) {
  return Taro.request({
    url,
    data,
    method: 'POST'
  })
}


export default {
  getJSON,
  postJSon
}

