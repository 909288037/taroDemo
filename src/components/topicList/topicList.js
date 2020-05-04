import Taro, {Component} from "@tarojs/taro";
import {ScrollView, View, Text, Button} from "@tarojs/components";
import { AtLoadMore, AtActivityIndicator} from 'taro-ui'
import {connect} from "@tarojs/redux";
import {getTopicList, getNextList} from "../../actions/topicList";
import Topic from './Topic'

import './topicList.scss'

@connect(({topic, menu}) => ({
  topic,
  menu
}), (dispatch) => {
  return {
    getTopicList(params) {
      dispatch(getTopicList(params))
    },
    getNextList(params) {
      return dispatch(getNextList(params))
    }
  }
})

class TopicList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false
    }
    this.isRequest = true
  }


  componentDidMount() {
    let {getTopicList, topic, menu} = this.props;
    getTopicList && getTopicList({page: topic.page, limit: topic.limit, tab: menu.currentCata.key})
  }

  onScrollToLower = () => {
    let {getNextList, topic, menu} = this.props;
    if (this.isRequest && topic.hasMore) {
      this.isRequest = false
      getNextList && getNextList({page: topic.page + 1, limit: topic.limit, tab: menu.currentCata.key}).then(res => {
        this.isRequest = res;
      })
    }
  }

  render() {
    const {topic} = this.props;
    const {isOpened} = this.state;
    return (
      <ScrollView
        className={'a'}
        scrollY
        scrollWithAnimation
        onScrollToLower={this.onScrollToLower}
      >
        {
          topic.list.map( item => {
            return (
              <Topic item={item} key={item.id}></Topic>
            )
          })
        }
        <AtLoadMore
          status={topic.hasMore ? 'loading' : 'noMore'}
        />
      </ScrollView>
    )
  }
}

export default TopicList
