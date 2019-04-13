import user from './user'
import area from './area'
import role from './role'
import menu from './menu'
import dataPerms from './dataPerms'
import roleRelation from './roleRelation'
import log from './log'
import folder from './folder'
import file from './file'
import Authority from '../controller/Authority'

/**
 * 路由中间件
 * 第一层验证Token
 * 第二层验证用户是否有操作权限
 * 第三层验证参数, 验证成功后再进行事件处理
 */
export default app => {
  // 文件库
  app.use('/api/folder', Authority.checkToken, Authority.permissions, folder)
  app.use('/api/file', Authority.checkToken, Authority.permissions, file)
  // 系统设置
  app.use('/api/user', Authority.checkToken, Authority.permissions, user)
  app.use('/api/area', Authority.checkToken, Authority.permissions, area)
  app.use('/api/role', Authority.checkToken, Authority.permissions, role)
  app.use('/api/menu', Authority.checkToken, Authority.permissions, menu)
  app.use('/api/dataPerms', Authority.checkToken, Authority.permissions, dataPerms)
  app.use('/api/roleRelation', Authority.checkToken, Authority.permissions, roleRelation)
  app.use('/api/log', Authority.checkToken, Authority.permissions, log)
}
