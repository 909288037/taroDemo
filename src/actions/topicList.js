import {getJSON, postJSon} from "../utils/request";
import api from '../constants/api'
import {GET_TOPIC_LIST, APPEND_LIST, CLEAR_STATE} from "../constants/topicList";

// 请求首页数据
export function getTopicList(params) {
  return async dispatch => {
    const result = await getJSON(api.getTopics, params);
    if (result && result.data) {
      console.log(result.data);
      if (result.data.success) {
        dispatch({
          type: GET_TOPIC_LIST,
          list: result.data.data
        })
      }
    }
  }
}

//  请求下一页数据
export function getNextList(params) {
  return async dispatch => {
    const result = await getJSON(api.getTopics, params);
    if (result && result.data) {
      if (result.data.success) {
        dispatch({
          type: APPEND_LIST,
          list: result.data.data,
          page: params.page,
          hasMore: result.data.data.length > 0
        })
        return Promise.resolve(true)
      }
    }
  }
}

export function clearList() {
  return dispatch => {
    dispatch({
      type: CLEAR_STATE
    })
  }
}
