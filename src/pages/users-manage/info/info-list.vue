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
      <li class="clearfix" v-for="itemData in tableList" :key="itemData.id">
        <div class="v-activity-content v-name">
          {{itemData.title}}
        </div>
        <div class="v-activity-content v-time">
          {{itemData.startTime}}
        </div>
        <div class="v-activity-content v-type">
          {{itemData.status}}
        </div>
        <div class="v-activity-content v-operation">
          <a :href="PUBLIC_PATH+'subscribe/'+itemData.id">查看</a>
        </div>
      </li>
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
  </div>
</template>
<script>
import { MessageBox } from 'components/common/message-box'
import VePagination from 'src/components/ve-pagination'
import activityService from 'src/api/activity-service'
export default {
  components: { VePagination },
  data () {
    return {
      tableList: [],
      PUBLIC_PATH: process.env.PUBLIC_PATH,
      searchParams: {
        page: 1,
        pageSize: 9,
        totalPage: 0
      },
      total: 0,
      pageSize: 9
    }
  },
  created () {
    this.getDataList()
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getDataList () {
      this.$get(activityService.GET_ACTIVITY_LIST, this.searchParams).then((res) => {
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
          this.searchParams.totalPage = res.data.totalPage
        } else { // 未报名提示
          MessageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
        }
      })
      // this.$get(activityService.GET_ACTIVITY_LIST, this.searchParams).then((res) => {
      //   res.data.list.map((item, indx) => {
      //     if (item.imgUrl) {
      //       item.imgUrl = this.$imgHost + '/' + item.imgUrl
      //     } else {
      //       item.imgUrl = '//cnstatic01.e.vhall.com/static/img/v35-webinar.png'
      //     }
      //     return item
      //   })
      //   res.data.list.forEach(element => {
      //     this.tableList.push(element)
      //   })
      //   this.total = res.data.total
      //   this.searchParams.page = parseInt(res.data.currPage) + 1
      //   this.searchParams.totalPage = res.data.totalPage
      // })
    },
    changePage (currentPage) {
      this.searchParams.page = currentPage
      this.getDataList()
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
      .v-activity-content {
        float: left;
        text-align: left;
        padding: 0 20px;
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
}
</style>
