// const entry=() => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue')
const Layout = () =>
  import('src/pages/layout')
const Test = () =>
  import('src/pages/com-test')
/* 直播列表 */
const LiveMager = () =>
  import('src/pages/live-mager')
/* 登录页面PC */
const Login = () =>
  import('src/pages/login')
/* 首次设置密码 */
const SetPassword = () =>
  import('src/pages/login/set-password')
/* 注册页面 */
const Register = () =>
  import('src/pages/login/register')
const Barrage = () =>
  import('src/pages/barrage/index')
/* 暖场视频 */
const WarmField = () =>
  import('src/pages/live-mager/warm-field')
/* 参会提醒 */
const Reminder = () =>
  import('src/pages/live-mager/reminder')
/* 忘记密码 */
const Forgot = () =>
  import('src/pages/login/forgot')
/* 账户信息设置 */
const SetAccount = () =>
  import('src/pages/account')
/* 直播引导页设置 */
const setLiveGuided = () =>
  import('src/pages/set-live-guided')
/* 邮件邀约--列表 */
const Email = () =>
  import('src/pages/live-mager/email/index')
/* 邮件邀约--添加，编辑 */
const EmailEditOne = () =>
  import('src/pages/live-mager/email/edit-step-one')
const EmailEditTwo = () =>
  import('src/pages/live-mager/email/edit-step-two')
/* 邮件邀约--查看 */
const EmailInfo = () =>
  import('src/pages/live-mager/email/info')
/* 邮件邀约--退订 */
const ExitEmail = () =>
  import('src/pages/live-mager/email/exit-email')

/* 创建 编辑 活动 */
const edit = () =>
  import('src/pages/live-mager/edit')
/* 活动详情 */
const detail = () =>
  import('src/pages/live-mager/detail/detail')
/* 角色设置 */
const role = () =>
  import('src/pages/live-mager/prepare/role')
/* 观看条件-邀请 */
const limitInvite = () =>
  import('src/pages/live-mager/prepare/limit/invite')
/* 直播引导页设置 */
const setLiveWatch = () =>
  import('src/pages/set-live-watch')
/* 观看条件-报名 */
const limitApply = () =>
  import('src/pages/live-mager/prepare/limit/apply')
/* 推广-微信 */
const promoteWechat = () =>
  import('src/pages/live-mager/promote/wechat/list')
const wechatCreate = () =>
  import('src/pages/live-mager/promote/wechat/edit')
const wechatOverview = () =>
  import('src/pages/live-mager/promote/wechat/overview')
/* 推广-短信 */
const promoteMsg = () =>
  import('src/pages/live-mager/promote/message/list')
const msgCreate = () =>
  import('src/pages/live-mager/promote/message/edit')
const msgOverview = () =>
  import('src/pages/live-mager/promote/message/overview')
/* 推广-自动化 */
const promoteAuto = () =>
  import('src/pages/live-mager/promote/automation')
const autoEditwx = () =>
  import('src/pages/live-mager/promote/automation/wechat')
const autoEditmsg = () =>
  import('src/pages/live-mager/promote/automation/msg')
/* 回放 */
const PlayBack = () =>
  import('src/pages/live-mager/playBack')
/* 活动官网 */
const Site = () =>
  import('src/pages/brand/site')
/* 活动官网模板 */
const SiteTemplate = () =>
  import('src/pages/brand/site/template.vue')
const SiteTemplate1 = () =>
  import('src/pages/brand/site/template1.vue')
const SiteTemplate2 = () =>
  import('src/pages/brand/site/template2.vue')

export default [{
  path: '/test',
  name: 'Test',
  component: Test
}, {
  path: '/brand/site/edit/:id',
  name: 'SiteTemplate',
  component: SiteTemplate
}, {
  path: '/brand/site/preview/:id',
  name: 'SiteTemplate',
  component: SiteTemplate
}, {
  path: '/brand/template/0478320',
  name: 'SiteTemplate1',
  component: SiteTemplate1
}, {
  path: '/brand/template/0478321',
  name: 'SiteTemplate2',
  component: SiteTemplate2
}, {
  path: '/liveMager/emailEditOne/:id',
  name: 'emailEditOne',
  component: EmailEditOne
}, {
  path: '/liveMager/emailEditTwo/:id',
  name: 'emailEditTwo',
  component: EmailEditTwo
}, {
  path: '/exitEmail',
  name: 'exitEmail',
  component: ExitEmail
}, {
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: 'setAccount',
  children: [{
    path: 'brand/site/:id',
    name: 'Site',
    component: Site
  }, {
    path: '/liveMager/list',
    name: 'liveMager',
    component: LiveMager
  },
  {
    path: '/barrage',
    name: 'Barrage',
    component: Barrage,
    meta: {
      noAuth: true,
      noLogin: true
    }
  },
  {
    path: '/liveMager/create',
    name: 'create',
    component: edit
  },
  {
    path: '/liveMager/edit/:id',
    name: 'edit',
    component: edit
  },
  {
    path: '/liveMager/detail/:id',
    name: 'detail',
    component: detail
  },
  {
    path: '/liveMager/prepare/role/:id',
    name: 'role',
    component: role
  },
  {
    path: '/liveMager/warmField/:id',
    name: 'warmField',
    component: WarmField
  },
  {
    path: '/liveMager/reminder/:id',
    name: 'reminder',
    component: Reminder
  },
  {
    path: '/setAccount',
    name: 'setAccount',
    component: SetAccount
  },
  {
    path: '/liveMager/prepare/limit-invite/:id',
    name: 'limitInvite',
    component: limitInvite,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/liveMager/prepare/limit-apply/:id',
    name: 'limitApply',
    component: limitApply,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/setLiveGuided/:id',
    name: 'setLiveGuided',
    component: setLiveGuided
  },
  {
    path: '/setLiveWatch/:id',
    name: 'setLiveWatch',
    component: setLiveWatch
  },
  {
    path: '/liveMager/email/:id',
    name: 'email',
    component: Email
  },
  {
    path: '/liveMager/emailInfo/:id',
    name: 'emailInfo',
    component: EmailInfo
  },
  {
    path: '/liveMager/promote/wechat/list/:id',
    name: 'promoteWechat',
    component: promoteWechat
  },
  {
    path: '/liveMager/promote/wechat/create/:id',
    name: 'wechatCreate',
    component: wechatCreate,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/liveMager/promote/wechat/overview/:id',
    name: 'wechatOverview',
    component: wechatOverview
  },
  {
    path: '/liveMager/promote/msg/overview/:id',
    name: 'msgOverview',
    component: msgOverview
  },
  {
    path: '/liveMager/promote/wechat/edit/:id',
    name: 'wechatEdit',
    component: wechatCreate
  },
  {
    path: '/liveMager/promote/msg/list/:id',
    name: 'promoteMsg',
    component: promoteMsg
  },
  {
    path: '/liveMager/promote/msg/create/:id',
    name: 'msgCreate',
    component: msgCreate
  },
  {
    path: '/liveMager/promote/msg/edit/:id',
    name: 'msgEdit',
    component: msgCreate
  },
  {
    path: '/liveMager/promote/auto/preview/:id',
    name: 'auto',
    component: promoteAuto
  },
  {
    path: '/liveMager/promote/auto/editWx/:id',
    name: 'autoEditwx',
    component: autoEditwx
  },
  {
    path: '/liveMager/promote/auto/editMsg/:id',
    name: 'autoEditmsg',
    component: autoEditmsg
  },
  {
    path: '/liveMager/playBack/:id',
    name: 'playBack',
    component: PlayBack
  }
  ]
}, {
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/register',
  name: 'register',
  component: Register,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/setPassword',
  name: 'setPassword',
  component: SetPassword,
  meta: {
    noAuth: true,
    noLogin: true
  }
},
{
  path: '/forgot',
  name: 'forgot',
  component: Forgot,
  meta: {
    noAuth: true
  }
}
]
