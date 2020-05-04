import { SET_TITLE } from '../constants/menu'

const INITIAL_STATE = {
  cataData: [
    {
      key: 'all',
      value: '全部',
    },
    {
      key: 'good',
      value: '精华',
    },
    {
      key: 'share',
      value: '分享',
    },
    {
      key: 'ask',
      value: '问答',
    },
    {
      key: 'job',
      value: '招聘',
    },
    {
      key: 'dev',
      value: '客户端测试',
    },
  ],
  currentCata: {
    key: 'all',
    value: '全部',
  },
  title: '首页'
}

export default function menu (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TITLE:
      console.log(action);
      return {
        ...state,
        title: action.title,
        currentCata: state.cataData[action.index]
      }
     default:
       return state
  }
}
