<!--用户分组-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
      <span class="title" >用户详情</span>
    </div>
    <div class="content from-box">
      <div class="v-user-info">
        <div class="tt">
          <div class="left">
            <div class="lc">
              <div class="box1">
                <img :src="avatarImg" alt="" class="v-avatar" v-if="avatarImg">
                <img src="../../../assets/image/avatar@2x.png" alt="" class="v-avatar" v-else>
                <p class="v-name">
                  {{user.real_name?user.real_name:'-'}}
                </p>
                <p class="v-account-info">
                  <span v-if="user.sex!=''">
                    {{user.sex?user.sex:'-'}}
                  </span>
                  <span>
                    ID： {{user.account_id}}
                  </span>
                  <span>
                    |
                  </span>
                  <span class="v-type">
                    {{getUserLevel(user.user_level)}}
                  </span>
                </p>
              </div>
              <div class="box2">
                <div class="v-info">
                  <span class="v-label">
                    昵称：
                  </span>
                  <span class="v-content">
                    {{user.nickname?user.nickname:'-'}}
                  </span>
                </div>
                <div class="v-info">
                  <span class="v-label">
                    手机：
                  </span>
                  <span class="v-content">
                    {{user.phone?user.phone:'-'}}
                  </span>
                </div>
                <div class="v-info">
                  <span class="v-label">
                    邮箱：
                  </span>
                  <span class="v-email-info v-fist">
                    <span class="v-content">
                    {{user.email?user.email:'-'}}
                    </span>
                    <i class="iconfont icon-gengduo2" v-if="user.email_list.length > 0"></i>
                    <div class="v-emails" v-if="user.email_list.length > 0">
                      <div class="v-email" v-for="item in user.email_list" :key="item.consumer_email_id">
                        <span class="v-email-content">
                          {{item.email}}
                        </span>
                        <span class="v-label">
                          {{typeEmail(item.type)}}
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="v-info">
                  <span class="v-label">
                    微信：
                  </span>
                  <span class="v-content">
                    {{user.wx_open_id?user.wx_open_id:'-'}}
                  </span>
                </div>
              </div>
              <div class="box3">
                <date-select title="生日" :content="user.birthday" @saveInfo="saveInfo($event,'birthday')"> </date-select>
                <industry-select title="行业" :content="user.industry" selectType="comIndustry" @saveInfo="saveInfo($event,'industry')"></industry-select>
                <single-input title="职位" :content="user.position" @saveInfo="saveInfo($event,'position')" :maxLength='10'></single-input>
                <industry-select title="教育" :content="user.education_level" selectType="comEducation" type="single" @saveInfo="saveInfo($event,'education_level')"></industry-select>
                <div class="v-from">
                  <span class="v-title">
                    来源：
                  </span>
                  <span class="v-content">
                    {{user.source === '' ? '-' : user.source}}
                  </span>
                </div>
                <div class="v-from">
                  <span class="v-title">
                    地区：
                  </span>
                  <span class="v-content">
                    {{user.province}}-{{user.city}}
                  </span>
                </div>
                <single-input title="地址" :content="user.address" @saveInfo="saveInfo($event,'address')" :maxLength='40'></single-input>
                <single-input title="备注" :content="user.remark" @saveInfo="saveInfo($event,'remark')" :maxLength='40'></single-input>
              </div>
              <div class="box4">
                <p class="v-title">
                  所属群组
                  <i class="iconfont icon-tianjia fr" @click="addGroups"></i>
                </p>
                <div class="v-groups clearfix">
                  <div class="v-item fl" v-for="item in user.group_list" :key="item.title">
                    <span>
                      {{item.title}}
                    </span>
                    <div class="v-description">
                      {{item.describe}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="box5">
                <p class="v-title">
                  所属标签
                </p>
                <div class="v-labels clearfix">
                  <div class="v-item fl" v-for="item in user.tag_list" :key="item.tag_id">
                    <span>
                      {{item.tag_name}}
                    </span>
                    <div class="v-description">
                      {{item.describe}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="ru">
              <ol class="clearfix">
                <li>
                  <p class="v-data">
                    {{user.join_count?user.join_count:0}}
                  </p>
                  <p class="v-title">
                    参会次数
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    {{user.first_visited_at?user.first_visited_at.substring(0,11):'-'}}
                  </p>
                  <p class="v-title">
                    首次参会
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    {{user.last_visited_at?user.last_visited_at.substring(0,11):'-'}}
                  </p>
                  <p class="v-title">
                    最近参会
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    {{watchTime}}
                  </p>
                  <p class="v-title">
                    累计观看 (分)
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    {{user.invite_friends_count?user.invite_friends_count:0}}
                  </p>
                  <p class="v-title">
                    邀请好友 (个)
                  </p>
                </li>
              </ol>
            </div>
            <div class="rb">
              <com-tabs :value.sync="tabValue">
                <com-tab label="用户足迹"
                         :index="1">
                  <com-footprints></com-footprints>
                </com-tab>
                <com-tab label="报名/问卷信息"
                         :index="2">
                  <info-list></info-list>
                </com-tab>
              </com-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
    <com-addgroup v-if="showAddgroup" @handleClick="handleClick" @groupData="groupData"></com-addgroup>
  </div>
</template>

<script>
import comSelect from '../components/com-select'
import comFootprints from '../components/com-footprints'
import singleInput from '../components/single-input'
import industrySelect from '../components/industry-select'
import dateSelect from '../components/date-select'
import citySelect from '../components/city-select'
import infoList from '../components/info-list'
import userService from 'src/api/user-service'
import comAddgroup from '../components/com-addGroup'
import userManage from 'src/api/userManage-service'
import groupService from 'src/api/user_group'
export default {
  data () {
    return {
      user: {
        consumer_uid: '',
        account_id: '',
        real_name: '', // 姓名
        sex: '', // 性别
        business_consumer_uid: '', // id
        user_level: '', // 用户等级
        nickname: '', // 昵称
        phone: '', // 手机
        email: '', // 邮箱
        email_list: [], // 邮箱
        wx_open_id: '', // 微信
        birthday: '', // 生日
        industry: '', // 行业
        position: '', // 职位
        education_level: '', // 教育
        source: '', // 来源
        city: '', // 地区 需要写计算属性，根据id赋值
        province: '',
        area: '', // 地域
        address: '', // 地址
        avatar: '', // 头像
        remark: '', // 备注
        invite_friends_count: '', // 邀请好友个数
        first_visited_at: '', // 首次参会
        join_count: '', // 参会次数
        last_visited_at: '', // 最近参会
        watch_live_time: '', // 观看直播时间
        watch_replay_time: '', // 观看回放时间
        group_list: [] // 标签
      }, // 用户信息
      tabValue: 1,
      showAddgroup: false,
      imgHost: process.env.IMGHOST + '/'
    }
  },
  components: {
    'com-select': comSelect,
    'com-footprints': comFootprints,
    'date-select': dateSelect,
    'single-input': singleInput,
    'city-select': citySelect,
    'info-list': infoList,
    'industry-select': industrySelect,
    'com-addgroup': comAddgroup
  },
  computed: {
    watchTime () {
      let time = 0
      if (this.user.watch_live_time) {
        time += parseInt(this.user.watch_live_time)
      }
      if (this.user.watch_replay_time) {
        time += parseInt(this.user.watch_replay_time)
      }
      return time || '-'
    },
    avatarImg () {
      return this.user.avatar ? this.imgHost + '/' + this.user.avatar : ''
    }
  },
  created () {
    this.getCustomerDetail()
    // console.log(this.user.emails)
  },
  methods: {
    saveInfo (val, type) {
      this.user[type] = val
      let data = {}
      data.business_consumer_uid = this.$route.params.id
      data[type] = val
      this.$config({ handlers: true }).$post(userService.POST_CUSTOMER_UPDATE, data).then((res) => {
      }).catch(err => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    showRecord () {
      this.recordBoxShow = true
    },
    getCustomerDetail () {
      this.$config({ handlers: true }).$get(userService.GET_CUSTOMER_DETAIL, {
        business_consumer_uid: this.$route.params.id
      }).then((res) => {
        this.user = res.data
        console.log(this.user)
      }).catch(err => {
        this.$messageBox({
          header: '提示',
          content: err.msg,
          confirmText: '确定',
          handleClick: (e) => {
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
            }
          }
        })
      })
    },
    getGroupList () {
      this.$post(groupService.GROUPS_LIST, {
        page: 1
      }).then(res => {

      })
    },
    typeEmail (type) {
      let strType = ''
      switch (type) {
        case 'APPLY':
          strType = '报名'
          break
        case 'SURVEY':
          strType = '问卷'
          break
        default:
          strType = '导入'
          break
      }
      return strType
    },
    getUserLevel (level) {
      let strLevel = ''
      switch (level) {
        case '0':
          strLevel = '没有评级'
          break
        case '1':
          strLevel = '优质用户'
          break
        case '2':
          strLevel = '高价值用户'
          break
        case '3':
          strLevel = '一般用户'
          break
        case '4':
          strLevel = '潜力用户'
          break
        case '5':
          strLevel = '流失用户'
          break
        default:
          strLevel = '没有评级'
          break
      }
      return strLevel
    },
    addGroups () {
      this.showAddgroup = true
    },
    /* 点击取消 */
    handleClick (e) {
      if (e.action === 'cancel') {
        this.showAddgroup = false
      }
    },
    groupData (res) {
      const data = res
      Object.assign(data, {
        'business_consumer_uids': this.user.business_consumer_uid
      })
      this.addGroup(data)
    },
    addGroup (data) {
      this.$config({ handlers: true }).$post(userManage.POST_ADD_TO_GROUP, data).then((res) => {
        let addData = {}
        addData.title = data.type === '1' ? data.title : data.name
        addData.describe = data.describe
        this.user.group_list.push(addData)
        this.showAddgroup = false
        this.$toast({
          'content': '导入成功',
          'position': 'center'
        })
      }).catch(err => {
        this.$toast({
          'content': err.msg,
          'position': 'center'
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.pond-page /deep/ {
  border-radius: 5px;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  .com-addGroup-box {
    position: fixed;
  }
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .pond-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content /deep/ {
    font-size: 14px;
    width: 100%;
  }
  .v-user-info {
    widows: 800px;
    min-height: 500px;
    // overflow: hidden;
    position: relative;
    .tt {
      overflow-y: hidden;
      position: relative;
    }
    .left {
      float: left;
      padding-bottom: 2333px;
      margin-bottom: -2333px;
      width: 270px;
      background-color: #fff;
      .lc {
        border: 1px solid #e2e2e2;
        padding: 0 25px;
        border-radius: 4px;
        // overflow: hidden;
      }
      .box1 {
        padding: 30px 0 20px;
        border-bottom: 1px solid #e2e2e2;
        .v-avatar {
          display: block;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto;
          overflow: hidden;
        }
        .v-name {
          font-size: 18px;
          color: #222;
          text-align: center;
          max-width: 162px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 18px auto 8px;
        }
        .v-account-info {
          color: #888;
          text-align: center;
          span {
            display: inline-block;
            margin-right: 5px;
            &:last-child {
              margin-right: 0;
            }
            &.v-type {
              color: #734cea;
            }
          }
        }
      }
      .box2 {
        padding: 20px 0;
        border-bottom: 1px solid #e2e2e2;
        font-size: 14px;
        .v-info {
          position: relative;
          min-height: 40px;
          line-height: 40px;
          span {
            display: inline-block;
          }
          .v-label {
            color: #888;
            width: 42px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .v-content {
            color: #222;
            word-break: break-all;
            max-width: 225px;
            padding-left: 55px;
          }
          .v-email-info {
            position: relative;
            margin-left: 46px;
            width: 100%;
            &.v-fist {
              margin-left: 0px;
              .v-content {
                display: inline-block;
              }
            }
            .v-type {
              font-size: 12px;
              color: #888;
              position: absolute;
              left: 0;
              bottom: -17px;
            }
          }
          .iconfont {
            &:hover {
              & + .v-emails {
                display: block;
              }
            }
          }
          .v-emails {
            position: absolute;
            padding: 12px 13px;
            background-color: #313131;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            z-index: 2;
            font-size: 14px;
            color: #fff;
            top: 35px;
            right: -95px;
            display: none;
            &::after {
              display: block;
              position: absolute;
              content: '';
              height: 0px;
              width: 0px;
              top: -5px;
              left: 50%;
              margin-left: -2.5px;
              border-width: 0 5px 5px;
              border-style: solid;
              border-color: transparent transparent #313131;
            }
            .v-email {
              line-height: 24px;
            }
            .v-email-content {
              display: inline-block;
              max-width: 180px;
              margin-right: 12px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .v-label {
              color: #fff;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
      .box3 {
        padding: 15px 0;
        border-bottom: 1px solid #e2e2e2;
        .v-from {
          min-height: 40px;
          font-size: 14px;
          .v-title {
            color: #888;
            line-height: 20px;
            display: inline-block;
            vertical-align: top;
          }
          .v-content {
            color: #222;
            word-break: break-all;
            max-width: 165px;
            line-height: 20px;
            display: inline-block;
            vertical-align: top;
            &:hover {
              .iconfont {
                opacity: 1;
              }
            }
            .iconfont {
              opacity: 0;
            }
          }
          .com-input {
            width: 155px;
          }
        }
      }
      .box4 {
        padding: 15px 0;
        border-bottom: 1px solid #e2e2e2;
        .v-title {
          font-size: 16px;
        }
        .v-groups {
          width: 100%;
          .v-item {
            position: relative;
            &:hover {
              .v-description {
                display: block;
              }
            }
            .v-description {
              position: absolute;
              padding: 12px 13px;
              width: 240px;
              background-color: #313131;
              box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
              border-radius: 4px;
              z-index: 2;
              font-size: 14px;
              color: #fff;
              bottom: 40px;
              left: -15px;
              display: none;
              &::after {
                display: block;
                position: absolute;
                content: '';
                height: 0px;
                width: 0px;
                top: 22px;
                left: 30px;
                border-color: #313131 transparent transparent;
                border-width: 5px 5px 5px;
                border-style: solid;
                position: relative;
              }
            }
          }
          span {
            display: inline-block;
            padding: 5px 12px;
            background-color: #e2e2e2;
            border-radius: 50px;
            overflow: hidden;
            margin: 15px 5px 0 0;
            word-break: break-all;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .box5 {
        padding: 15px 0;
        .v-title {
          font-size: 16px;
        }
        .v-labels {
          width: 100%;
          .v-item {
            position: relative;
            height: 50px;
            &:hover {
              .v-description {
                display: block;
              }
            }
            .v-description {
              position: absolute;
              padding: 12px 13px;
              width: 240px;
              background-color: #313131;
              box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
              border-radius: 4px;
              z-index: 2;
              font-size: 14px;
              color: #fff;
              bottom: 40px;
              left: -15px;
              display: none;
              &::after {
                display: block;
                position: absolute;
                content: '';
                height: 0px;
                width: 0px;
                top: 22px;
                left: 30px;
                border-color: #313131 transparent transparent;
                border-width: 5px 5px 5px;
                border-style: solid;
                position: relative;
              }
            }
          }
          span {
            display: inline-block;
            padding: 5px 12px;
            background-color: #e2e2e2;
            border-radius: 50px;
            overflow: hidden;
            margin: 15px 5px 0 0;
            word-break: break-all;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
    .right {
      position: absolute;
      top: 0;
      left: 290px;
      right: 0;
      bottom: 0;
      .ru {
        border: 1px solid #e2e2e2;
        height: 130px;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        padding: 39px 30px;
        ol {
          width: 100%;
          height: 100%;
          li {
            width: 20%;
            height: 100%;
            float: left;
            .v-data {
              font-size: 24px;
            }
            .v-title {
              color: #888;
            }
          }
        }
      }
      .rb {
        position: absolute;
        top: 150px;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #e2e2e2;
        background-color: #fff;
        border-radius: 4px;
        .com-tabs {
          width: 100%;
          display: flex;
          flex-direction: column;
          .tab-container {
            flex: 1;
            height: 100%;
          }
          .tab-header {
            margin-bottom: 0;
            border-bottom: 1px solid #e2e2e2;
            padding: 0 25px;
            height: 60px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            right: 0;
          }
          .tab-content {
            padding: 30px;
            height: 100%;
            padding-top: 90px;
            .v-footprints {
              position: relative;
              width: 100%;
              overflow: auto;
              height: calc(100%);
              .v-footprint {
                height: 100px;
                position: relative;
                padding-left: 40px;
                .v-time {
                  color: #888;
                  margin-bottom: 15px;
                }
                &:last-child {
                  .v-border {
                    display: none;
                  }
                }
                button {
                  border: 1px solid #888;
                  background-color: #fff;
                  color: #555;
                  border-radius: 50px;
                  width: 90px;
                  height: 30px;
                  line-height: 27px;
                  text-align: center;
                  margin-left: 20px;
                  &:hover {
                    border-color: #4b5afe;
                    background-color: #4b5afe;
                    color: #fff;
                  }
                }
                .iconfont {
                  position: absolute;
                  top: 0;
                  left: 0;
                }
                .v-border {
                  display: block;
                  position: absolute;
                  left: 8px;
                  top: 16px;
                  bottom: 0px;
                  width: 1px;
                  background-color: #d2d2d2;
                }
              }
            }
          }
          .tab-item {
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            color: #222;
            &.active {
              color: #222;
              border-bottom: 3px solid #4b5afe;
            }
          }
        }
      }
    }
  }
  .v-record /deep/ {
    .ve-message-box__btns {
      display: none;
    }
    .ve-message-box .ve-message-box__container {
      padding: 10px 30px 30px;
    }
    .v-explain {
      font-size: 16px;
      text-align: center;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .v-time {
      color: #888;
      text-align: center;
      margin: 2px auto 15px;
    }
    .v-steps {
      width: 100%;
      border-top: 2px solid #e2e2e2;
    }
    .v-step {
      position: relative;
      padding: 20px 40px;
      &:last-child {
        .v-border {
          display: none;
        }
      }
      .v-content {
        width: 350px;
        padding: 12px 15px;
        background-color: #f5f5f5;
        border-radius: 4px;
        .v-content-time {
          color: #888;
        }
      }
      .iconfont {
        position: absolute;
        top: 35px;
        left: 0;
        z-index: 2;
      }
      .v-border {
        display: block;
        position: absolute;
        top: 50px;
        bottom: -35px;
        width: 1px;
        background-color: #d2d2d2;
        left: 7px;
        z-index: 1;
      }
    }
  }
}
</style>

