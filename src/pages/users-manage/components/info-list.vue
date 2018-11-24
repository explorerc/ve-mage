<template>
  <div class="v-activity-list clearfix">
    <ol>
      <li class="clearfix">
        <div class="v-activity-content v-name">
          活动名称
        </div>
        <div class="v-activity-content v-time">
          发送时间
        </div>
        <div class="v-activity-content v-type">
          类型
        </div>
        <div class="v-activity-content v-operation">
          操作
        </div>
      </li>
      <template v-if="tableList.length > 0">
        <li class="clearfix" v-for="itemData in tableList" :key="itemData.behavior_id">
          <div class="v-activity-content v-name">
            {{itemData.activity_title}}
          </div>
          <div class="v-activity-content v-time">
            {{itemData.generated_at}}
          </div>
          <div class="v-activity-content v-type">
            {{itemData.event === 'APPLY_ACTIVITY' ? '报名':'问卷'}}
          </div>
          <div class="v-activity-content v-operation">
            <a href="javascript:;" @click="getQuestionDetial(itemData.activity_id,itemData.data.question_id,itemData.data.answer_id)">查看</a>
          </div>
        </li>
      </template>
      <li class="v-nodata" v-else>
        <div>
          暂无数据
        </div>
      </li>
      <!-- <li class="clearfix">
        <div class="v-activity-content v-name">
          活动标题
        </div>
        <div class="v-activity-content v-time">
          2018-07-24 12:24:23
        </div>
        <div class="v-activity-content v-type">
          报名
        </div>
        <div class="v-activity-content v-operation">
          <a :href="PUBLIC_PATH+'subscribe/666'">查看</a>
        </div>
      </li> -->
    </ol>
    <div class="pagination-box">
      <div class="page-pagination"
           v-if="total>pageSize">
        <ve-pagination :total="total"
                       :pageSize="pageSize"
                       :currentPage="searchParams.page"
                       @changePage="changePage" />
      </div>
    </div>
    <message-box v-show="messageBoxViewShow"
                 @handleClick="messageBoxClick"
                 width="590px"
                 class="message-box v-question-box"
                 confirmText="确定"
                 type='prompt'
                 :header='boxTitle'>
      <div class="v-content">
        <img v-if="defaultImg"
             :src="defaultImg"
             alt="">
        <p class="v-title">
          {{this.title}}
        </p>
        <p class="v-summary">
          {{this.description}}
        </p>
        <div class="v-hr"></div>
        <questions-detail :dragData="dragData"></questions-detail>
      </div>
    </message-box>
  </div>
</template>
<script>
// import { MessageBox } from 'components/common/message-box'
import VePagination from 'src/components/ve-pagination'
import userService from 'src/api/user-service'
import questionsDetail from './question-detail'
import questionService from 'src/api/questionnaire-service'
export default {
  components: { VePagination,
    questionsDetail },
  data () {
    return {
      tableList: [],
      PUBLIC_PATH: process.env.PUBLIC_PATH,
      searchParams: {
        business_consumer_uid: 0,
        page: 1,
        page_size: 9
      },
      total: 0,
      pageSize: 9,
      imgUrl: '',
      boxTitle: '',
      title: '',
      description: '',
      dragData: [],
      messageBoxViewShow: false
    }
  },
  created () {
    this.getDataList()
  },
  computed: {
    defaultImg () {
      return this.imgUrl ? this.$imgHost + '/' + this.imgUrl : ''
    }
  },
  watch: {
  },
  methods: {
    getDataList () {
      this.searchParams.business_consumer_uid = this.$route.params.id
      this.$config({ handlers: true }).$get(userService.GET_SURVER_LIST, this.searchParams).then((res) => {
        if (res.code === 200) { // 已报名弹框
          res.data.list.map((item, indx) => {
            if (item.imgUrl) {
              item.imgUrl = this.$imgHost + '/' + item.imgUrl
            } else {
              item.imgUrl = '//cnstatic01.e.vhall.com/static/img/v35-webinar.png'
            }
            return item
          })
          this.tableList = res.data.list
          this.total = res.data.total
          this.searchParams.page = parseInt(res.data.currPage)
        }
      }).catch(err => {
        if (err.code !== 201) {
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
        }
      })
    },
    changePage (currentPage) {
      this.searchParams.page = currentPage
      this.getDataList()
    },
    getQuestionDetial (activityId, naireId, answerId) {
      this.dragData = []
      this.$get(questionService.GET_ANSWER, {
        activityId: activityId,
        naireId: naireId,
        answerId: answerId
      }).then((res) => {
        this.dragData = res.data.detail
        this.title = res.data.title
        this.imgUrl = res.data.imgUrl
        this.description = res.data.description
        this.dragData.forEach(item => {
          if (item.type === 'checkbox') {
            item.answer = item.answer.length > 0 ? item.answer.join('、') : '-'
          } else {
            item.answer = item.answer ? item.answer : '-'
          }
        })
        this.messageBoxViewShow = true
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
<style lang="scss" scoped>
.v-activity-list /deep/ {
  width: 100%;
  position: relative;
  margin: 0 auto;
  width: 100%;
  ol {
    width: 100%;
    li {
      width: 100%;
      height: 52px;
      line-height: 52px;
      background-color: #fff;
      border-bottom: 1px solid #e2e2e2;
      &:first-child {
        height: 61px;
        line-height: 61px;
        background-color: #f5f5f5;
        &:hover {
          background-color: #f5f5f5;
        }
      }
      &:hover {
        background-color: #f0f1fe;
      }
      &.v-nodata {
        text-align: center;
        &:hover {
          background-color: #fff;
        }
      }
      .v-activity-content {
        float: left;
        text-align: left;
        padding: 0 20px;
        word-break: break-all;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .v-name {
        width: 53%;
      }
      .v-time {
        width: 23%;
      }
      .v-type {
        width: 13%;
      }
      .v-operation {
        width: 9%;
        text-align: center;
        padding: 0;
        a {
          &:hover {
            color: #4b5afe;
          }
        }
      }
    }
  }
  .pagination {
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
  }
  .page-pagination {
    margin: 30px 10px 20px 0;
    text-align: center;
  }
  .pagination-box {
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
  }
  .v-question-box {
    .ve-message-box__btns {
      display: none;
    }
    .ve-message-box__container {
      overflow-y: auto;
    }
    .v-content {
      max-height: 500px;
      img {
        display: block;
        margin: 30px auto 40px;
        max-width: 450px;
        max-height: 70px;
      }
      .v-title {
        font-size: 30px;
        text-align: center;
      }
      .v-summary {
        font-size: 16px;
        color: #555;
        text-align: center;
        margin-top: 30px;
      }
      .v-hr {
        width: 100%;
        height: 1px;
        background-color: #ffd021;
        margin: 30px auto 0;
      }
      ul {
        margin-top: 35px;
        li {
          position: relative;
        }
        .v-question-title {
          font-weight: bold;
          word-break: break-all;
          padding-left: 26px;
          .v-index {
            position: absolute;
            top: 2px;
            left: 0;
            width: 26px;
            text-align: left;
            display: inline-block;
          }
          .v-red {
            color: #fc5659;
            margin-left: 10px;
          }
        }
        .v-content {
          word-break: break-all;
          margin: 10px auto 20px;
          padding-left: 26px;
        }
      }
    }
  }
}
</style>
