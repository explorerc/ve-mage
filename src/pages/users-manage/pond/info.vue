<!--用户分组-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
        <span class="title" >用户池</span>
    </div>
    <div class="content from-box">
      <div class="v-user-info">
        <div class="tt">
          <div class="left">
            <div class="lc">
              <div class="box1">
                <img src="../../../assets/image/avatar@2x.png" alt="" class="v-avatar">
                <p class="v-name">
                  {{user.name}}
                </p>
                <p class="v-account-info">
                  <span v-if="user.sex!=''">
                    {{user.sex}}
                  </span>
                  <span>
                    ID:{{user.id}}
                  </span>
                  <span>
                    |
                  </span>
                  <span class="v-type">
                    高价值客户
                  </span>
                </p>
              </div>
              <div class="box2">
                <div class="v-info">
                  <span class="v-label">
                    昵称：
                  </span>
                  <span class="v-content">
                    Flankerto
                  </span>
                </div>
                <div class="v-info">
                  <span class="v-label">
                    手机：
                  </span>
                  <span class="v-content">
                    15210101112
                  </span>
                </div>
                <div class="v-info">
                  <span class="v-label">
                    邮箱：
                  </span>
                  <span class="v-email-info v-fist">
                    <span class="v-content">
                      123@123.com
                    </span>
                    <span class="v-type">
                      导入
                    </span>
                  </span>
                  <span class="v-email-info">
                    <span class="v-content">
                      123@123.com
                    </span>
                    <span class="v-type">
                      导入
                    </span>
                  </span>
                </div>
                <div class="v-info">
                  <span class="v-label">
                    微信：
                  </span>
                  <span class="v-content">
                    Flankerto
                  </span>
                </div>
              </div>
              <div class="box3">
                <date-select title="生日" :content="user.birthday" @saveInfo="saveInfo($event,'birthday')"> </date-select>
                <com-select title="行业" :content="user.industry" :selectValue="selectValue" type="single" @saveInfo="saveInfo($event,'industry')"></com-select>
                <com-select title="职位" :content="user.position" :selectValue="selectValue" type="single" @saveInfo="saveInfo($event,'position')"></com-select>
                <com-select title="教育" :content="user.education" :selectValue="selectValue" type="single" @saveInfo="saveInfo($event,'education')"></com-select>
                <div class="v-from">
                  <span class="v-title">
                    来源：
                  </span>
                  <span class="v-content">
                    {{user.source === '' ? '无' : user.source}}
                  </span>
                </div>
                <city-select title="地区" :content="user.region" :selectValue="options"></city-select>
                <single-input title="地址" :content="user.address"></single-input>
                <single-input title="备注" :content="user.emarks"></single-input>
              </div>
              <div class="box4">
                <p class="v-title">
                  所属群组
                  <i class="iconfont icon-duigou1 fr"></i>
                </p>
                <div class="v-groups clearfix">
                  <span class="fl">
                    世界互联网客户
                  </span>
                  <span class="fl">
                    医疗客户
                  </span>
                  <span class="fl">
                    全国物联网暨技术客户
                  </span>
                </div>
              </div>
              <div class="box5">
                <p class="v-title">
                  所属标签
                </p>
                <div class="v-labels clearfix">
                  <span class="fl">
                    互联网
                  </span>
                  <span class="fl">
                    医疗大会
                  </span>
                  <span class="fl">
                    全国户
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="ru">
              <ol class="clearfix">
                <li>
                  <p class="v-data">
                    1
                  </p>
                  <p class="v-title">
                    参会次数
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    2018.08.04
                  </p>
                  <p class="v-title">
                    首次参会
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    2018.10.12
                  </p>
                  <p class="v-title">
                    最近参会
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    56

                  </p>
                  <p class="v-title">
                    累计观看 (分)
                  </p>
                </li>
                <li>
                  <p class="v-data">
                    25
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
                  <div class="v-footprints">
                    <div class="v-footprint">
                      <i class="iconfont icon-duigou1">
                      </i>
                      <i class="v-border"></i>
                      <p class="v-time">
                        2018-07-07 18:16:35
                      </p>
                      <p class="v-content">
                        参加了活动 2018年云溪大会杭州分会场
                        <button>
                          查看详情
                        </button>
                      </p>
                    </div>
                    <div class="v-footprint">
                      <i class="iconfont icon-duigou1">
                      </i>
                      <i class="v-border"></i>
                      <p class="v-time">
                        2018-07-07 18:16:35
                      </p>
                      <p class="v-content">
                        参加了活动 2018年云溪大会杭州分会场
                        <button>
                          查看详情
                        </button>
                      </p>
                    </div>
                    <div class="v-footprint">
                      <i class="iconfont icon-duigou1">
                      </i>
                      <i class="v-border"></i>
                      <p class="v-time">
                        2018-07-07 18:16:35
                      </p>
                      <p class="v-content">
                        参加了活动 2018年云溪大会杭州分会场
                        <button>
                          查看详情
                        </button>
                      </p>
                    </div>
                    <div class="v-footprint">
                      <i class="iconfont icon-duigou1">
                      </i>
                      <i class="v-border"></i>
                      <p class="v-time">
                        2018-07-07 18:16:35
                      </p>
                      <p class="v-content">
                        参加了活动 2018年云溪大会杭州分会场
                        <button>
                          查看详情
                        </button>
                      </p>
                    </div>
                  </div>
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
  </div>
</template>

<script>
import comSelect from './com-select'
import singleInput from './single-input'
import dateSelect from './date-select'
import citySelect from './city-select'
import infoList from './info-list'
export default {
  data () {
    return {
      user: {
        name: '姓名', // 姓名
        sex: '男', // 性别
        id: 'V123141', // id
        birthday: '2018-12-08', // 生日
        industry: '黄金糕', // 行业
        position: '黄金糕', // 职位
        education: '黄金糕', // 教育
        source: '666', // 来源
        region: '', // 地区 需要写计算属性，根据id赋值
        address: '地址地址地址地址地址地址', // 地址
        emarks: '6666' // 备注
      }, // 用户信息
      selectValue: [{
        value: '黄金糕'
      }, {
        value: '双皮奶'
      }, {
        value: '蚵仔煎'
      }, {
        value: '龙须面'
      }, {
        value: '北京烤鸭'
      }],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }]
      }],
      tabValue: 1
    }
  },
  components: {
    'com-select': comSelect,
    'date-select': dateSelect,
    'single-input': singleInput,
    'city-select': citySelect,
    'info-list': infoList
  },
  methods: {
    saveInfo (val, type) {
      switch (type) {
        case 'birthday':
          this.user.birthday = val
          break
        case 'industry':
          debugger
          this.user.industry = val
          break
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.pond-page {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
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
    margin: 10px;
    min-height: 500px;
    overflow: hidden;
    position: relative;
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
        overflow: hidden;
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
          }
        }
      }
      .box2 {
        padding: 20px 0;
        border-bottom: 1px solid #e2e2e2;
        .v-info {
          min-height: 40px;
          line-height: 40px;
          span {
            display: inline-block;
          }
          .v-label {
            color: #888;
            width: 42px;
          }
          .v-content {
            color: #222;
          }
          .v-email-info {
            position: relative;
            margin-left: 46px;
            &.v-fist {
              margin-left: 0px;
            }
            .v-type {
              font-size: 12px;
              color: #888;
              position: absolute;
              left: 0;
              bottom: -17px;
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
          span {
            display: inline-block;
            padding: 5px 12px;
            background-color: #e2e2e2;
            border-radius: 50px;
            overflow: hidden;
            margin: 15px 5px 0 0;
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
          span {
            display: inline-block;
            padding: 5px 12px;
            background-color: #e2e2e2;
            border-radius: 50px;
            overflow: hidden;
            margin: 15px 5px 0 0;
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
      .rb /deep/ {
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
          .tab-header {
            margin-bottom: 0;
            border-bottom: 1px solid #e2e2e2;
            padding: 0 25px;
          }
          .tab-content {
            padding: 30px;
            .v-footprints {
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
                  line-height: 28px;
                  text-align: center;
                  margin-left: 20px;
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
}
</style>

