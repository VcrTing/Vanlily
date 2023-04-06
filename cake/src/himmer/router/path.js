
import Home from '../../screen/home/Home.vue'
import accounting from './normal/accounting'
import customer from './normal/customer'
import order from './normal/order'
import work from './special/work'

import sign from './auth/sign'
import member from './auth/member'

import widget from './special/widget'
import dashboard from './special/dashboard'

/*
*/
const _ROOT = '/admin'

export default [
  {
    path: '',
    redirect: _ROOT,
    meta: { title: '首页' }
  },
  {
    path: _ROOT,
    component: Home,
    redirect: _ROOT + '/order',
    children: [
      ...work(_ROOT + '/work'),
      ...order(_ROOT + '/order'),

      ...customer(_ROOT + '/customer'),
      ...accounting(_ROOT + '/accounting'),

      ...dashboard(_ROOT + '/dashboard'),

      ...member(_ROOT + '/member')
    ]
  },
  ...sign(),
  ...widget(),
]