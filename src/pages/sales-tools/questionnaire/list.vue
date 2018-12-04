<template>
  <div class="v-list">
    <div class="v-list-title clearfix">
      <span class="title">问卷</span>
      <com-back :url="`/liveMager/detail/${activityId}`" style='line-height: 30px;'></com-back>
      <template v-if="tableData.length">
        <router-link class="v-add"
                     :class="{disabled: isAdd}"
                     :to="{ name: 'questionnaire', params: { activityId: activityId }}">新建问卷</router-link>
        <!-- <a class="v-add" :class="{disabled: isAdd}" :href="'/salesTools/questionnaire/edit/'+activityId">

        </a> -->
        <router-link class="v-view"
                     :class="{disabled: !hasData}"
                     :to="`/data/live/${this.activityId}#questions`">查看数据</router-link>
      </template>
    </div>
    <div class="v-table">
      <template v-if="tableData.length">
        <table>
          <thead>
            <tr>
              <td>
                问卷名称
              </td>
              <td>
                问题数量
              </td>
              <td>
                是否推送
              </td>
              <td>
                修改时间
              </td>
              <td>
                操作
              </td>
            </tr>
          </thead>
          <tbody>
            <template v-if="tableData.length>0">
              <tr v-for="itemData in tableData"
                  :key="itemData.naireId">
                <td>
                  {{itemData.title}}
                </td>
                <td>
                  {{itemData.questionNum}}
                </td>
                <td>
                  {{itemData.publish === 'Y' ? '是':'否'}}
                </td>
                <td>
                  {{itemData.update_time?itemData.update_time.substr(0,10):'-'}}
                </td>
                <td>
                  <a href="javascript:;"
                     @click="jumpEdit(itemData.publish,itemData.naireId)">编辑</a><span>|</span>
                  <a href="javascript:;"
                     @click="view(itemData.naireId)">预览</a><span>|</span>
                  <a href="javascript:;"
                     class="v-del"
                     @click="confirmDel(itemData)">删除</a>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr class="v-nodata">
                <td colspan="5">
                  暂无数据
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="pagination-box">
          <div class="page-pagination"
               v-if="total>pageSize">
            <ve-pagination :total="total"
                           :pageSize="pageSize"
                           :currentPage="searchParams.page"
                           @changePage="changePage" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="empty-box">
          <p class="img"></p>
          <p class='title'>问卷</p>
          <p class='desc'>您可以通过创建问卷收集活动中的用户信息<br>以获得商机或者改善您的服务。</p>
          <router-link :to="{ name: 'questionnaire', params: { activityId: activityId }}">
            <el-button class='primary-button'>新建问卷</el-button>
          </router-link>
        </div>
      </template>
    </div>
    <message-box v-if="messageBoxViewShow"
                 @handleClick="messageBoxClick"
                 width="700px"
                 class="message-box v-view"
                 confirmText="确定"
                 type='prompt'
                 header='预览'>
      <div class="text">预览</div>
      <div class="v-content">
        <div class="v-hearder">
          <div v-if="defaultImg" class="v-question-img" :style="{'background-image': `url(${defaultImg})`}">

          </div>
          <!-- <img :src="defaultImg"
               alt=""
               v-if="defaultImg"
               class="v-question-img"> -->
          <p class="v-title">
            {{this.title}}
          </p>
          <p class="v-summary">
            {{this.description}}
          </p>
        </div>
        <div class="v-questions">
          <questions :dragData="dragData"
                     :phoneData="phoneData"
                     :isView="true"></questions>
        </div>
      </div>
    </message-box>
  </div>
</template>
<script>
import EventBus from 'src/utils/eventBus'
import VePagination from 'src/components/ve-pagination'
import questions from '../questionnaire/components/questions'
import questionService from 'src/api/questionnaire-service'
import activityService from 'src/api/activity-service'
// import { types as QTypes } from 'components/questionnaire/types'
export default {
  components: { VePagination,
    questions },
  data () {
    return {
      activityId: '',
      hasData: false,
      title: '',
      description: '',
      imgUrl: '',
      tableData: [],
      searchParams: {
        business_consumer_uid: 0,
        page: 1,
        page_size: 10
      },
      total: 0,
      pageSize: 10,
      dragData: [],
      phoneData: [],
      messageBoxViewShow: false
    }
  },
  beforeDestroy () {
  },
  created () {
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表',
      url: '/liveMager/list'
    }, {
      title: '活动详情',
      url: `/liveMager/detail/${this.$route.params.activityId}`
    }, {
      title: '问卷列表',
      url: `/salesTools/questionnaire/list/${this.$route.params.activityId}`
    }])
  },
  mounted () {
    this.activityId = this.$route.params.activityId
    this.getDataList()
    this.$get(activityService.GET_DETAILS, {
      activityId: this.activityId
    }).then((res) => {
      if (res.data.data.time) {
        this.hasData = true
      }
    })
  },
  computed: {
    isAdd () {
      return this.tableData.length > 9
    },
    defaultImg () {
      return this.imgUrl ? this.$imgHost + '/' + this.imgUrl + '?x-oss-process=image/resize,m_fill,h_140,w_700' : ''
    }
  },
  methods: {
    getDataList () {
      this.$post(questionService.GET_QUESTION_LIST, {
        activityId: this.activityId
      }).then((res) => {
        this.tableData = res.data
      })
    },
    changePage (currentPage) {
      this.searchParams.page = currentPage
      this.getDataList()
    },
    jumpEdit (isPublish, naireId) {
      if (isPublish === 'Y') {
        this.$toast({
          content: '已推送问卷无法再次编辑',
          position: 'center'
        })
      } else {
        this.$router.replace('/salesTools/questionnaire/edit/' + this.activityId + '/' + naireId)
      }
    },
    view (naireId) {
      this.dragData = []
      this.$post(questionService.GET_QUESTION, {
        activityId: this.activityId,
        naireId: naireId
      }).then((res) => {
        this.title = res.data.title
        this.description = res.data.description
        this.imgUrl = res.data.imgUrl
        let data = res.data
        data.detail.forEach(item => {
          item.ext = JSON.parse(item.ext)
          item._required = item.required === 'Y'
          ; ((item) => {
            setTimeout(() => {
              if (item.ext.key === 'phone') {
                this.phoneData.push(item)
              } else {
                this.dragData.push(item)
              }
            }, 0)
          })(item)
        })
        this.messageBoxViewShow = true
      })
    },
    confirmDel (itemData) {
      this.$messageBox({
        header: '提示',
        width: '450px',
        content: '删除问卷将同时删除所有答卷，是否确认删除',
        cancelText: '取消', // 不传递cancelText将只有一个确定按钮
        type: 'error',
        confirmText: '确定',
        handleClick: (e) => {
          if (e.action === 'cancel') {
          } else if (e.action === 'confirm') {
            this.del(itemData)
          }
        }
      })
    },
    del (itemData) {
      this.$config({ handlers: true }).$post(questionService.POST_QUESTION_DELETE, {
        activityId: this.activityId,
        naireId: itemData.naireId
      }).then((res) => {
        let index = this.tableData.indexOf(itemData)
        this.tableData.splice(index, 1)
      }).catch(err => {
        if (err.code === 15105) {
          this.$messageBox({
            header: '提示',
            content: '问卷推送中，暂时无法删除，请活动结束后重试',
            autoClose: 10,
            confirmText: '知道了',
            handleClick: (e) => {
            }
          })
        } else {
          this.$messageBox({
            header: '提示',
            content: err.msg,
            autoClose: 10,
            confirmText: '知道了',
            handleClick: (e) => {
            }
          })
        }
      })
    },
    messageBoxClick (e) {
      if (e.action === 'cancel') {
        this.messageBoxViewShow = false
      }
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.v-list /deep/ {
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  position: relative;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .v-list-title {
    position: relative;
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    margin: 30px 0;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
    a {
      float: right;
      width: 120px;
      height: 40px;
      border: 1px solid #4b5afe;
      line-height: 38px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0);
      font-size: 14px;
      color: #4b5afe;
      text-align: center;
      margin-top: 10px;
      &.v-add {
        border-color: #ffd021;
        background-color: #ffd021;
        color: #222;
        margin-left: 10px;
        &.disabled {
          border-color: #ddd;
          background-color: #ddd;
          color: #999;
          &:hover {
            border-color: #ddd;
            background-color: #ddd;
            color: #999;
          }
        }
      }
      &:hover {
        background-color: #fdd43f;
        border-color: #fdd43f;
        color: #222;
      }
      &:active {
        background-color: #eec11a;
        border-color: #eec11a;
        color: #222;
      }
      &.disabled {
        border-color: #ddd;
        background-color: #ddd;
        color: #999;
        &:hover {
          border-color: #ddd;
          background-color: #ddd;
          color: #999;
        }
      }
    }
    .default-button {
      line-height: 38px;
    }
  }
  .v-table {
    width: 100%;
    padding: 20px 20px 40px;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    min-height: 550px;
    border-radius: 4px;
    overflow: hidden;
    table {
      width: 100%;
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      thead {
        background-color: #f5f5f5;
        td {
          height: 60px;
          line-height: 61px;
          padding: 0 30px;
        }
      }
      tbody {
        tr {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #e2e2e2;
          td {
            padding: 0 30px;
            a {
              &:hover {
                color: #4b5afe;
                &.v-del {
                  color: #fc5659;
                }
              }
            }
            span {
              display: inline-block;
              padding: 0 2px;
            }
          }
          &:hover {
            background-color: #e9ebff;
          }
          &.v-nodata {
            text-align: center;
            &:hover {
              background-color: #fff;
            }
          }
        }
      }
    }
    .empty-box {
      text-align: center;
      color: $color-font-sub;
      min-height: 400px;
      padding: 100px 0;
      .img {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        border-radius: 500px;
        // background:rgba(245,245,245,1);
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.02);
        background: url('~assets/image/ques_empty.png') no-repeat;
        background-size: contain;
      }
      .title {
        font-size: 18px;
        color: $color-font;
        padding-top: 13px;
      }
      .desc {
        display: block;
        width: 340px;
        margin: 0 auto;
        padding: 20px 0;
      }
      a {
        display: block;
        &:hover .el-button {
          color: $color-font;
        }
      }
      .el-button {
        padding: 0;
        width: 220px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin-top: 20px;
      }
    }
  }
  .pagination-box {
    text-align: center;
    margin-top: 70px;
  }
  .ve-message-box {
    .ve-message-box__header {
      background-color: rgba(0, 0, 0, 0) !important;
      .prompt-title {
        display: none;
      }
    }
    .ve-message-box__btns {
      display: none;
    }
  }
  // .box {
  //   width: 145px;
  //   height: 85px;
  //   background-color: #ffd021;
  //   color: #fff;
  //   /* Rotate div */
  //   transform: rotate(-45deg);
  //   position: absolute;
  //   left: -50px;
  //   top: -50px;
  //   z-index: 1;
  // }
  .text {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 18px;
  }
  .v-content {
    overflow: auto;
    max-height: 520px;
  }
  .v-hearder {
    width: 620px;
    margin: 0 auto;
    padding: 20px 0 30px;
    border-bottom: 2px solid #ffd021;
    // img {
    //   margin: 0 auto;
    //   display: block;
    //   max-width: 700px;
    //   max-height: 140px;
    // }
    .v-question-img {
      margin: 0 auto;
      display: block;
      width: 620px;
      height: 124px;
      background-position: center;
      background-size: cover;
    }
    .v-title {
      max-width: 500px;
      word-break: break-all;
      text-align: center;
      font-size: 30px;
      margin: 50px auto 0;
    }
    .v-summary {
      max-width: 500px;
      word-break: break-all;
      text-align: center;
      font-size: 16px;
      margin: 18px auto 0;
    }
  }
}
</style>
