import Taro from '@tarojs/taro'
import {getTopicList, clearList} from "./topicList";
import {SET_TITLE} from "../constants/menu";

export function setTitle(title, index) {
  Taro.setNavigationBarTitle({
    title
  })
  return (dispatch, getState) => {
    dispatch(clearList())
    dispatch({
      type: SET_TITLE,
      title,
      index
    })
    dispatch(getTopicList({page: 1, limit: 20, tab: getState().menu.cataData[index].key}))
  }
}
