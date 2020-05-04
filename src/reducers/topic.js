import {GET_TOPIC_LIST, APPEND_LIST, CLEAR_STATE} from "../constants/topicList";

const TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: [],
  hasMore: true
}

export default function topicList (state = TOPIC_STATE, action) {
  switch (action.type) {
    case GET_TOPIC_LIST:
      return {
        ...state,
        page: 1,
        list: action.list,
        hasMore: true
      }
    case APPEND_LIST:
      return {
        ...state,
        list: [...state.list, ...action.list],
        page: action.page
      }
    case CLEAR_STATE:
      return {
        page: 1,
        limit: 20,
        list: [],
        hasMore: true
      }
    default:
      return state
  }
}
