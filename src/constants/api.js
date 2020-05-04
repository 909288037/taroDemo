const rootPath = 'https://cnodejs.org/api/v1';

const apiObj = {
  //  GET 获取主题首页
  getTopics: rootPath + '/topics',
  //  GET 主题详情
  getTopicInfo: rootPath + '/topic/',
  //  POST 验证 accessToken 的正确性
  checkUserToken: rootPath + '/accesstoken',
  // GET 获取用户信息
  getUserInfo: rootPath + '/user/',
}

export default apiObj
