import Taro, {Component} from "@tarojs/taro";
import {View, Text, Button} from "@tarojs/components";
import {AtNavBar, AtDrawer} from 'taro-ui'
import {connect} from "@tarojs/redux";
import {setTitle} from "../../actions/menu";
import {getTopicList} from "../../actions/topicList";

import './menu.scss'

@connect(({ menu }) => ({
  menu
}), (dispatch) => ({
  setTitle(title, currentCata) {
    dispatch(setTitle(title, currentCata))
  }
}))

class Menu extends Component {

  state = {
    show: false,
    items: [], // 抽屉列表
  }

  onClickLeftIcon = () => {
    this.setState({
      show: true
    })
  }

  onClickRgIconSt = () => {
    Taro.openSetting({
      success: function (res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
    // Taro.getSetting({
    //   success: function (res) {
    //     console.log(res.authSetting)
    //     if (res.authSetting['scope.userInfo']) {
    //       Taro.getUserInfo().then(res => {
    //         console.log(res.userInfo);
    //       })
    //     }
    //     // res.authSetting = {
    //     //   "scope.userInfo": true,
    //     //   "scope.userLocation": true
    //     // }
    //   }
    // })
  }

  onClickRgIconNd = () => {

  }

  onClose = () => {
    this.setState({
      show: false
    })
  }

  onItemClick = (index) => {
    const {menu, setTitle} = this.props;
    setTitle(menu.cataData[index].value, index)
  }

  formatItemsData = () => {
    const {menu: {cataData}} = this.props;
    const newArr = cataData.map(item => {
      return item.value;
    })
    return newArr
  }

  render() {

    let {show, items} = this.state;
    items = this.formatItemsData();
    return (
      <View className='topiclist-menu'>
        <AtNavBar
          onClickRgIconSt={this.onClickRgIconSt}
          // onClickRgIconNd={this.onClickRgIconNd}
          onClickLeftIcon={this.onClickLeftIcon}
          color='#000'
          leftIconType='bullet-list'
          rightFirstIconType='user'
          // rightSecondIconType='user'
        >
          <View>{this.props.menu.title}</View>
        </AtNavBar>
        <AtDrawer
          show={show}
          mask
          onClose={this.onClose}
          items={items}
          onItemClick={this.onItemClick}
        ></AtDrawer>
      </View>
    )
  }
}

export default Menu
