<template>
  <div class="live-mager"
       v-ComLoading="loading"
       com-loading-text="拼命加载中">
    <div class="live-title">
      <span class="title">活动列表</span>
      <div class="search-box fr">
        <el-select v-model="searchParams.status"
                   @change="changeSearch"
                   placeholder="直播状态">
          <el-option v-for="item in optionsStates"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="searchParams.sortBy"
                   @change="changeSearch"
                   placeholder="请选择">
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
        <button class="primary-button"
                @click="createLive">创建直播</button>
      </div>
    </div>
    <div class="mager-box">
      <live-table :tableList="tableList"
                  @handleClick="handleClick" />
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
  </div>
</template>

<script>
import activityService from 'src/api/activity-service'
import LiveTable from './live/live-table'
import VePagination from 'src/components/ve-pagination'

export default {
  name: 'index',
  components: {LiveTable, VePagination},
  data () {
    return {
      show: false,
      pageSize: 16,
      loading: false,
      optionsStates: [
        {value: '', label: '全部'},
        {value: 'PREPARE', label: '预告'},
        {value: 'LIVING', label: '直播中'},
        {value: 'FINISH', label: '已结束'},
        {value: 'PLAYBACK', label: '回放'}
      ],
      optionsOrder: [
        {value: 'createTime', label: '按创建时间排序'},
        {value: 'startTime', label: '按直播开始时间排序'}
      ],
      searchParams: {
        status: '',
        sortBy: 'createTime',
        keyword: '',
        page: 1,
        pageSize: 16
      },
      tableList: [],
      total: 0
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
  methods: {
    handleClick (event) {
      console.log(event)
      if (event.type === 'play') { // 开播
        this.$router.push(`/master/${event.id}`)
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
      }
    },
    changePage (currentPage) {
      this.searchParams.page = currentPage
      this.queryList()
    },
    changeSearch () {
      this.searchParams.page = 1
      this.queryList()
    },
    searchEnter () {
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
      // liveHttp.deleteById(activityId).then((res) => {
      //   if (res.code !== 200) return
      //   this.queryList()
      // })
    },
    queryList () {
      // this.loading = true
      this.$config({loading: true}).$get(activityService.GET_ACTIVITY_LIST, this.searchParams).then((res) => {
        res.data.list.map((item, indx) => {
          if (item.imgUrl) {
            item.imgUrl = this.$imgHost + '/' + item.imgUrl
          }
          return item
        })
        this.tableList = res.data.list
        this.total = res.data.total
      })
      // liveHttp.queryList(this.searchParams).then((res) => {
      //   this.loading = false
      //   if (res.code === 200) {
      //     res.data.list.map((item, indx) => {
      //       if (item.imgUrl) {
      //         item.imgUrl = this.$imgHost + '/' + item.imgUrl
      //       }
      //       return item
      //     })
      //     this.tableList = res.data.list
      //     this.total = res.data.total
      //   }
      // }).catch(() => {
      //   this.loading = false
      // })
    }
  }
}
</script>

<style lang="scss" scoped src="./css/live.scss">
</style>
