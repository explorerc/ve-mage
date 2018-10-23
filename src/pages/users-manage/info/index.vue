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
                <date-select title="生日" content="2018-12-08"> </date-select>
                <com-select title="行业" content="黄金糕" :selectValue="selectValue" type="single"></com-select>
                <com-select title="行业" content="" :selectValue="options" type="double"></com-select>
                <single-input title="备注" content="666"></single-input>
                <single-input title="备注" content="asdfdasfasdfdasfffffffffffffffffffffffffffffffffffffff"></single-input>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="ru">我是右上</div>
            <div class="rb">我是右下</div>
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
export default {
  data () {
    return {
      user: {
        name: '姓名',
        sex: '男',
        id: 'V123141'
      }, // 用户信息
      selectValue: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
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
      }]
    }
  },
  components: {
    'com-select': comSelect,
    'date-select': dateSelect,
    'single-input': singleInput
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
        border: 1px solid #dadada;
        padding: 0 25px;
      }
      .box1 {
        padding: 30px 0 20px;
        border-bottom: 1px solid #dadada;
        .v-avatar {
          display: block;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto;
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
        border-bottom: 1px solid #dadada;
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
      }
    }
    .right {
      position: absolute;
      top: 0;
      left: 290px;
      right: 0;
      bottom: 0;
      .ru {
        border: 1px solid #dadada;
        height: 200px;
      }
      .rb {
        position: absolute;
        top: 220px;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #dadada;
      }
    }
  }
}
</style>

