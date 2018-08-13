import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// options = {
//   el: '#app',
//   data: { a: 1, b: [1 , 2, 3] }
// }
// new Vue(options)

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' && // NODE_ENV 开发时使用
    !(this instanceof Vue) // 判断this是否指向new Vue()，就是是否是new 出来的
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword') // 抛出来一个错误是否使用new操作符
  }
  this._init(options) // 调用的第一个方法,在下面的initMixin定义的方法
}

initMixin(Vue) // 定义_init
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
