<template>
  <div class="live-mager"
       v-ComLoading="loading"
       com-loading-text="拼命加载中">
    <div class="live-title">
      <span class="title">活动列表</span>
      <div class="search-box fr" v-if="tableList.length || isSearch">
        <el-select v-model="searchParams.status" @change='statusChange'
                   placeholder="直播状态" popper-class='webinar-list-select'>
          <el-option v-for="item in optionsStates"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="searchParams.sortBy"
                   placeholder="请选择" popper-class='webinar-list-select'>
          <el-option v-for="item in optionsOrder"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <com-input type="search"
                   class="search-com"
                   :value.sync="searchParams.keyword"
                   :maxLength="30"
                   @keyup.native.enter="searchEnter"
                   placeholder="输入直播名称"></com-input>
        <button class="primary-button create-btn"
                @click="createLive">新建活动
        </button>
      </div>
    </div>
    <div class="mager-box"
         style="padding-bottom: 60px;" v-show="endRequset">
         <template v-if="tableList.length">
          <live-table :tableList="tableList"
                      @handleClick="handleClick"/>
            <div class="pagination-box">
              <div class="page-pagination"
                  v-if="total>pageSize">
                <ve-pagination :total="total"
                              :pageSize="pageSize"
                              :currentPage="searchParams.page"
                              @changePage="changePage"/>
              </div>
            </div>
         </template>
         <template v-else>
           <template v-if="isSearch">
             <div class="empty-box empty-search">
                <p class="img"></p>
                <p class='title'>很抱歉，没有找到搜索结果</p>
              </div>
           </template>
           <template v-else>
              <div class="empty-box">
                <p class="img"></p>
                <p class='title'>你还没有活动，快去创建吧</p>
                <!-- <p class='desc'>你还没有活动，快去创建吧</p> -->
                <router-link :to="`/liveMager/create`"><el-button class='primary-button'>创建活动</el-button></router-link>
              </div>
           </template>
         </template>
    </div>
    <message-box class='in-countdown'
                 v-show="inCountdown"
                 width="300"
                 header="提示"
                 cancelText="放弃"
                 confirmText='仍然进入'
                 @handleClick='inCountdownClick'>
      <p>当前时间与您预先设置的时间不一致，是否现在发起正式直播？</p>
      <p>您设置的时间为:</p>
      <p>{{startTime}}</p>
    </message-box>
  </div>
</template>

<script>
import activityService from 'src/api/activity-service'
import LiveTable from './live/live-table'
import VePagination from 'src/components/ve-pagination'
import EventBus from 'src/utils/eventBus'
export default {
  name: 'index',
  components: { LiveTable, VePagination },
  data () {
    return {
      show: false,
      pageSize: 16,
      loading: false,
      inCountdown: false,
      isPublished: false,
      hostOnline: false,
      jumpId: '',
      startTime: '',
      optionsStates: [
        { value: '', label: '全部' },
        { value: 'PREPARE', label: '预告' },
        { value: 'LIVING', label: '直播中' },
        { value: 'FINISH', label: '已结束' },
        { value: 'PLAYBACK', label: '回放' }
      ],
      optionsOrder: [
        { value: 'createTime', label: '按创建时间排序' },
        { value: 'startTime', label: '按直播开始时间排序' }
      ],
      searchParams: {
        status: '',
        sortBy: 'createTime',
        keyword: '',
        page: 1,
        pageSize: 16
      },
      tableList: [],
      total: 0,
      PC_HOST: process.env.PC_HOST,
      isSearch: false,
      endRequset: false
    }
  },
  watch: {
    searchParams: {
      handler (newVal) {
        if (newVal.keyword) return
        this.queryList()
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    EventBus.$emit('breads', [{
      title: '活动管理'
    }, {
      title: '活动列表'
    }])
  },
  methods: {
    handleClick (event) {
      console.log(event)
      if (event.type === 'play') { // 开播
        if (this.isOverdue(event.endTime)) {
          this.$toast({
            content: '该活动已过期，无法再次发起直播'
          })
          return false
        }
        // 请求活动详情 判断 是否 发布 是否进入 24小时内
        this.isPublished = event.published === 'Y'
        this.startTime = event.startTime
        this.jumpId = event.id
        this.getDetails(event.id)
        // window.open(`${this.PC_HOST}master/${event.id}`)
      } else if (event.type === 'delete') { // 编辑删除
        this.$messageBox({
          header: '删除活动',
          content: '活动删除后，所有数据将一并删除，并且不可恢复。确定要删除吗？',
          cancelText: '暂不删除',
          confirmText: '仍要删除',
          type: 'error',
          width: '400px',
          handleClick: (e) => {
            if (e.action !== 'confirm') return
            this.deleteLive(event.id)
          }
        })
      } else if (event.type === 'share') { // 推广
        this.$router.push(`/liveMager/detail/${event.id}#tg`)
      } else if (event.type === 'info') { // 详情
        this.$router.push(`/liveMager/detail/${event.id}`)
      } else if (event.type === 'data') {
        this.$router.push(`/data/preview/${event.id}`)
      } else if (event.type === 'viewer') {
        this.$router.push(`/data/viewerList/${event.id}?type=all`)
      }
    },
    inCountdownClick (e) {
      console.log(e)
      if (e.action === 'cancel') {
        this.inCountdown = false
      } else if (e.action === 'confirm') {
        this.inCountdown = true
        this.judgePublish()
      }
    },
    judgePublish () {
      if (this.isPublished) {
        this.inCountdown = false
        const tempwindow = window.open('_blank') // 先打开页面
        tempwindow.location = `${this.PC_HOST}master/${this.jumpId}` // 后更改页面地址
      } else {
        this.inCountdown = false
        this.$messageBox({
          header: '提示',
          width: '400px',
          content: '进入直播后，您的活动官网和观看引导页将正式对外发布，是否继续执行？',
          cancelText: '暂不开播', // 不传递cancelText将只有一个确定按钮
          confirmText: '确认开播',
          handleClick: (e) => {
            console.log(e)
            if (e.action === 'cancel') {
            } else if (e.action === 'confirm') {
              const tempwindow = window.open('_blank') // 先打开页面
              tempwindow.location = `${this.PC_HOST}master/${this.jumpId}` // 后更改页面地址
              // this.status = 0
              this.publish(this.jumpId)
            }
          }
        })
      }
    },
    isToday (str) {
      if (new Date(str).toDateString() === new Date().toDateString()) {
        // 今天
        console.log('当天')
        return false
      } else {
        // 之前
        console.log('非当天')
        return true
      }
    },
    isOverdue (str) { // 是否超过48小时
      if (str === null) {
        return false
      }
      if (new Date().getTime() - new Date(str).getTime() > 3600 * 24 * 2 * 1000) {
        return true
      } else {
        return false
      }
    },
    async getDetails (id) {
      await this.$get(activityService.GET_HOSTING, {
        activityId: this.jumpId
      }).then((res) => {
        this.hostOnline = res.data.hostOnline
      })
      if (this.hostOnline) {
        this.$toast({
          content: '暂不支持这种方式发起直播',
          position: 'center'
        })
        return false
      }
      this.$get(activityService.GET_DETAILS, {
        activityId: id
      }).then((res) => {
        if (this.isToday(res.data.activity.startTime)) { // 在24小时之外
          this.inCountdown = true
        } else {
          this.judgePublish()
        }
      })
    },
    changePage (currentPage) {
      this.searchParams.page = currentPage
      // this.queryList()
    },
    searchEnter () {
      this.isSearch = true
      this.queryList()
    },
    createLive () {
      this.$router.push('/liveMager/create')
    },
    deleteLive (activityId) {
      this.$post(activityService.POST_DEL_ACTIVITY, {
        id: activityId
      }).then((res) => {
        this.queryList()
      })
    },
    queryList () {
      this.$config().$get(activityService.GET_ACTIVITY_LIST, this.searchParams).then((res) => {
        res.data.list.map((item, indx) => {
          if (item.imgUrl) {
            item.imgUrl = this.$imgHost + '/' + item.imgUrl
          }
          return item
        })
        this.tableList = res.data.list
        this.endRequset = true
        this.total = res.data.total
      })
    },
    publish (id) {
      this.$config().$post(activityService.POST_PUBLISH_ACTIVITE, {
        activityId: id
      }).then((res) => {
        this.$toast({
          content: '活动发布成功',
          position: 'center'
        })
      })
    },
    statusChange (res) {
      this.isSearch = true
    }
  }
}
</script>

<style lang="scss" scoped src="./css/live.scss">
</style>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
.mager-box {
  .empty-box {
    text-align: center;
    color: $color-font-sub;
    min-height: 550px;
    padding: 150px 0;
    background-color: #fff;
    .img {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      border-radius: 500px;
      // background:rgba(245,245,245,1);
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.02);
      background: url('~assets/image/webinar_empty.png') no-repeat;
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
    &.empty-search {
      .img {
        background-image: url('~assets/image/search_empty.png');
      }
    }
  }
}
.in-countdown {
  p {
    text-align: center;
    margin: 20px 0;
    &:nth-of-type(3) {
      color: #fc5659;
      font-size: 20px;
    }
  }
}
</style>

