import Taro, {Component} from "@tarojs/taro";
import {View, Text, Image} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import moment from 'moment'
import './topic.scss'

class Topic extends Component {
  render() {
    const {item} = this.props;
    if (!item) return null
    return (
      <View className={'topicList-topic'}>
        <Image lazyLoad={true} className={'head-img'} src={item.author ? item.author.avatar_url : ''}></Image>
        <View className='topicList-right'>
          <View className='topic-title'>
            {
              item.top ? <Text className='topic-up'>置顶</Text> : item.good ? <Text className='topic-up green'>精华</Text> : item.tab === 'share' ? <Text className='topic-up blue'>分享</Text> : <Text className='topic-up red'>问答</Text>
            }
            <Text>{item.title}</Text>
          </View>
          <View className={'topic-info'}>
            <Text>{item.author ? item.author.loginname : ''}</Text>
            <Text>{item.reply_count + '/' + item.visit_count}</Text>
            <Text>创建时间{item.create_at ? moment(item.create_at).format('YYYY-MM-DD HH:mm:ss') : '未知'}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Topic
