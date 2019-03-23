import token from './token'
import user from './user'
import log from './log'
import Authority from '../controller/Authority'

export default app => {
  /**
   * 路由中间件
   * 第一层验证Token
   * 第二层验证用户是否有操作权限
   * 第三层验证参数, 验证成功后再进行事件处理
   */
  app.use('/api/user', Authority.checkToken, Authority.permissions, user)
  app.use('/api/log', Authority.checkToken, Authority.permissions, log)
}
