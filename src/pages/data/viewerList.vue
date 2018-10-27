<template>
  <div class="data-box search-box">
    <div class="search-total">
      <button class="primary-button fl" @click="exportData">导出</button>
      <div class="search-item fr">
        <com-input type="search"
                   style="width: 220px;"
                   class="search-com"
                   :value.sync="searchParams.keyword"
                   :maxLength="30"
                   @keyup.native.enter="searchEnter"
                   placeholder="输入姓名/手机号/邮箱"></com-input>
        <span class="data-link" style="font-size: 14px;" @click="isHigh=true">高级筛选</span>
      </div>
    </div>
    <div v-if="isHigh" class="data-pad">
      <div class="search-item">
        <span class="search-title">关键词搜索</span>
        <com-input type="search"
                   style="width: 220px;"
                   class="search-com"
                   :value.sync="searchParams.keyword"
                   :maxLength="30"
                   @keyup.native.enter="searchEnter"
                   placeholder="输入姓名/手机号/邮箱"></com-input>
      </div>
      <br/>
      <div class="search-item">
        <span class="search-title">用户性别</span>
        <el-select v-model="searchParams.gender"
                   placeholder="直播状态">
          <el-option v-for="item in genderList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">所属行业</span>
        <el-select v-model="searchParams.tradeId"
                   placeholder="直播状态">
          <el-option v-for="item in tradeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">观看设备</span>
        <el-select v-model="searchParams.device"
                   placeholder="直播状态">
          <el-option v-for="item in deviceList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">新老用户</span>
        <el-select v-model="searchParams.userType"
                   placeholder="直播状态">
          <el-option v-for="item in userTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item">
        <span class="search-title">所属地域</span>
        <el-select style="width: 100px;"
                   v-model="searchParams.provinceId">
          <el-option v-for="item in provinceList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-select style="width: 112px;"
                   v-model="searchParams.cityId">
          <el-option v-for="item in cityList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="search-item flm">
        <span class="search-title">进入时间</span>
        <el-date-picker
          v-model="enterTime"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-item flm">
        <span class="search-title">离开时间</span>
        <el-date-picker
          v-model="leaveTime"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-item">
        <span class="search-title">本次得分</span>
        <el-select style="width: 100px;"
                   v-model="searchParams.scoreType"
                   placeholder="直播状态">
          <el-option v-for="item in scoreTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <com-input type="number"
                   style="width: 112px;"
                   :value.sync="searchParams.score"
                   :maxLength="30"></com-input>
      </div>
      <div class="search-item flm">
        <span class="search-title">活动前用户级别</span>
        <el-select v-model="searchParams.beforeLevel">
          <el-option v-for="item in watcherTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">活动后用户级别</span>
        <el-select v-model="searchParams.afterLevel">
          <el-option v-for="item in userTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-btns">
        <button class="primary-button" @click="searchEnter">查询</button>
        <button class="default-button" @click="cancelClick">取消</button>
      </div>
    </div>
    <div class="table-list-box data-pad">
      <el-table :data="viewerList" :default-sort="{prop: 'score', order: 'descending'}" style="width: 100%">
        <el-table-column label="姓名">
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column prop="score" sortable label="本次得分"></el-table-column>
        <el-table-column prop="level" label="会后级别"></el-table-column>
        <el-table-column prop="phoneNo" label="手机号"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column label="参会时间（第一次）">
          <template slot-scope="scope">
            {{scope.row.meetingDate.substring(0,16)}}
          </template>
        </el-table-column>
        <el-table-column label="观看时长">
          <template slot-scope="scope">
            {{scope.row.watchTimes|fmtTime}}
          </template>
        </el-table-column>
        <el-table-column prop="channelName" label="渠道来源"></el-table-column>
        <el-table-column label="详情">
          <template slot-scope="scope">
            <span class="data-link" @click="goPageDetail(scope.row.userId)">详情</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="page-pagination" v-if="total>pageSize">
        <ve-pagination :total="total"
                       :pageSize="pageSize"
                       @changePage="changePage"/>
      </div>
    </div>
  </div>
</template>

<script>
  import VePagination from 'src/components/ve-pagination'

  export default {
    name: 'viewerList',
    components: { VePagination },
    data () {
      return {
        isHigh: false,
        enterTime: [],
        leaveTime: [],
        total: 0,
        page: 1,
        pageSize: 10,
        viewerList: [],
        searchParams: {
          activityId: '',
          keyword: '',
          gender: '',
          beforeLevel: '',
          afterLevel: '',
          provinceId: '',
          cityId: '',
          tradeId: '',
          endterStartDate: '',
          endterEndDate: '',
          leaveStartDate: '',
          leaveEndDate: '',
          device: '',
          scoreType: '',
          score: '',
          userType: ''
        },
        genderList: [
          { value: '', label: '全部' },
          { value: '1', label: '男' },
          { value: '2', label: '女' }
        ],
        watcherTypeList: [
          { value: '', label: '全部用户' },
          { value: 1, label: '优质用户' },
          { value: 2, label: '潜在用户' },
          { value: 3, label: '一般用户' },
          { value: 4, label: '高价值用户' },
          { value: 5, label: '流失用户' }
        ],
        provinceList: [
          { value: '', label: '省' },
          { value: '1', label: '北京' },
          { value: '2', label: '河南省' },
          { value: '3', label: '河北省' },
          { value: '4', label: '黑龙江' },
          { value: '5', label: '湖北' }
        ],
        cityList: [
          { value: '', label: '市' },
          { value: '1', label: '北京市' },
          { value: '2', label: '郑州市' },
          { value: '3', label: '天津市' }
        ],
        tradeList: [
          { value: '', label: '全部' },
          { value: '1', label: '导入' },
          { value: '2', label: '微信注册' },
          { value: '3', label: 'PC注册' }
        ],
        deviceList: [
          { value: '', label: '全部' },
          { value: 'pc', label: '电脑' },
          { value: 'phone', label: '手机' }
        ],
        scoreTypeList: [
          { value: '', label: '全部' },
          { value: 'big', label: '大于' },
          { value: 'small', label: '小于' },
          { value: 'equal', label: '等于' }
        ],
        userTypeList: [
          { value: '', label: '全部' },
          { value: 'new', label: '新用户' },
          { value: 'old', label: '老用户' }
        ]
      }
    },
    filters: {
      fmtTime (value) {
        let h = ((value / 3600 >> 0) + '').padStart(2, 0)
        let m = ((value / 60 % 60 >> 0) + '').padStart(2, 0)
        let s = ((value % 60 >> 0) + '').padStart(2, 0)
        return `${h}:${m}:${s}`
      }
    },
    watch: {
      enterTime (vals) {
        if (vals.length !== 2) return
        this.searchParams.endterStartDate = vals[0]
        this.searchParams.endterEndDate = vals[1]
      },
      leaveTime (vals) {
        if (vals.length !== 2) return
        this.searchParams.leaveStartDate = vals[0]
        this.searchParams.leaveEndDate = vals[1]
      }
    },
    created () {
      this.queryList()
    },
    methods: {
      goPageDetail (id) {
        this.$router.push(`/user/detail/${id}`)
      },
      changePage (pageIdx) {
        this.page = pageIdx
        this.queryList()
      },
      exportData () {
        let res = {
          'code': 200,
          'msg': null,
          'data': {
            'downUrl': 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540275596&di=578ef951e10175ca4850b13935f0f9eb&src=http://pic.92to.com/360/201604/08/19864861_13.jpg'
          }
        }
        if (res.data.downUrl) {
          let dl = document.createElement('a')
          dl.href = res.data.downUrl
          dl.click()
        }
      },
      queryList () {
        this.viewerList = [
          {
            userId: 10000,
            name: '张三',
            headImg: '/dev/111/sss/i.jpg',
            score: 50,
            level: 1,
            phoneNo: '1859912717',
            email: 'yy1221@vhall.com',
            meetingDate: '2018-10-17 10:10:19',
            watchTimes: 111002343,
            channelName: '微信'
          },
          {
            userId: 10001,
            name: '李四',
            headImg: '/dev/111/sss/i.jpg',
            score: 48,
            level: 1,
            phoneNo: '1859912717',
            email: 'yy1221@vhall.com',
            meetingDate: '2018-10-17 10:10:19',
            watchTimes: 3600,
            channelName: '手机'
          },
          {
            userId: 10002,
            name: '刘德华',
            headImg: '/dev/111/sss/i.jpg',
            score: 51,
            level: 1,
            phoneNo: '1859912717',
            email: 'yy1221@vhall.com',
            meetingDate: '2018-10-17 10:10:19',
            watchTimes: 111002343,
            channelName: '微信'
          }
        ]
      },
      searchEnter () {
      },
      cancelClick () {
        this.searchParams = {
          activityId: '',
          keyword: '',
          gender: '',
          beforeLevel: '',
          afterLevel: '',
          provinceId: '',
          cityId: '',
          tradeId: '',
          endterStartDate: '',
          endterEndDate: '',
          leaveStartDate: '',
          leaveEndDate: '',
          device: '',
          scoreType: '',
          score: '',
          userType: ''
        }
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .data-box {
    .data-pad {
      padding-top: 20px;
    }
    .search-box /deep/ {
      .search-com {
        margin: 0 10px;
      }
      input {
        height: 30px;
        line-height: 30px;
      }
    }
    .search-total {
      height: 60px;
    }
    .search-item /deep/ {
      display: inline-block;
      margin: 10px 0 10px 0;
      .el-select {
        display: inline-block;
      }
      .search-title {
        margin-right: 5px;
        font-size: 14px;
      }
    }
    .search-btns {
      text-align: center;
      margin-top: 20px;
      button {
        height: 34px;
        line-height: 34px;
        margin: 0 10px;
      }
    }
    .table-list-box {
      position: relative;
      padding-top: 30px;
      padding-bottom: 20px;
      .export-btn {
        position: absolute;
        top: -14px;
        right: 0;
        line-height: 1;
        height: 34px;
      }
      .page-pagination {
        margin-top: 20px;
        float: right;
      }
    }
    .flm {
      margin-left: 20px;
    }
  }
</style>
