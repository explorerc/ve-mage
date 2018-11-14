<template>
  <div class="data-box search-box">
    <div class="search-total">
      <button class="default-button export-btn fl" @click="exportData">导出</button>
      <div class="search-item fr">
        <com-input type="search"
                   style="width: 220px;"
                   class="search-com"
                   :value.sync="searchParams.keyword"
                   :maxLength="30"
                   @keyup.native.enter="searchEnter"
                   placeholder="输入姓名/手机号/邮箱"></com-input>
        <span class="data-link" style="font-size: 14px;margin-left: 6px;" @click="isHigh=!isHigh">高级筛选
        <i :class="{'iconfont':true, 'icon-Up':true, 'icon-down':!isHigh}"></i>
        </span>
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
      <div class="search-item flm">
        <span class="search-title">用户级别</span>
        <el-select v-model="searchParams.user_level">
          <el-option v-for="item in watcherTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">本次得分</span>
        <el-select
          v-model="searchParams.score"
          placeholder="本次得分">
          <el-option v-for="item in scoreTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">新老用户</span>
        <el-select v-model="searchParams.is_new">
          <el-option v-for="item in userTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">用户性别</span>
        <el-select v-model="searchParams.sex"
                   placeholder="用户性别">
          <el-option v-for="item in genderList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">渠道来源</span>
        <el-select v-model="searchParams.source"
                   placeholder="渠道来源">
          <el-option v-for="item in sourceList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">观看设备</span>
        <el-select v-model="searchParams.device"
                   placeholder="观看设备">
          <el-option v-for="item in deviceList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item flm">
        <span class="search-title">所属地域</span>
        <el-cascader
          v-model="citySelect"
          :options="options"
          @change="handleAreaChange">
        </el-cascader>
        <!--<el-select style="width: 100px;"-->
        <!--v-model="searchParams.provinceId">-->
        <!--<el-option v-for="item in provinceList"-->
        <!--:key="item.value"-->
        <!--:label="item.label"-->
        <!--:value="item.value">-->
        <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-select style="width: 112px;"-->
        <!--v-model="searchParams.cityId">-->
        <!--<el-option v-for="item in cityList"-->
        <!--:key="item.value"-->
        <!--:label="item.label"-->
        <!--:value="item.value">-->
        <!--</el-option>-->
        <!--</el-select>-->
      </div>
      <div class="search-item flm">
        <span class="search-title">观众出入时段</span>
        <el-date-picker
          v-model="enterOutTime"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
          type="datetimerange"
          range-separator="至"
          start-placeholder="输入进入时间"
          end-placeholder="输入离开时间">
        </el-date-picker>
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
            <div class="user-info">
              <span class="user-avatar" v-if="!scope.row.avatar"></span>
              <span class="user-avatar" v-else :style="{backgroundImage:`url(${$imgHost}/${scope.row.avatar})`}"></span>
              <div>
                <span :title="scope.row.nickname">{{scope.row.nickname?scope.row.nickname:'无'}}　{{scope.row.sex?(scope.row.sex=='M'?'男':'女'):''}}</span>
                <span :class="{
                level4:scope.row.end_user_level==4,
                level3:scope.row.end_user_level==3,
                level2:scope.row.end_user_level==2,
                level1:scope.row.end_user_level==1
                }">{{scope.row.end_user_level|fmtUserLevel}}</span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="score" sortable label="本次得分"></el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            {{scope.row.phone|isEmpty}}
          </template>
        </el-table-column>
        <el-table-column label="邮箱">
          <template slot-scope="scope">
            {{scope.row.email|isEmpty}}
          </template>
        </el-table-column>
        <el-table-column label="参会时间(首次)">
          <template slot-scope="scope">
            <span :title="scope.row.first_join_at&&scope.row.first_join_at.substring(0,16)">{{scope.row.first_join_at&&scope.row.first_join_at.substring(0,16)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="观看时长">
          <template slot-scope="scope">
            {{scope.row.watch_time|fmtTime}}
          </template>
        </el-table-column>
        <el-table-column label="渠道来源">
          <template slot-scope="scope">
            {{scope.row.source|fmtSource}}
          </template>
        </el-table-column>
        <el-table-column label="详情" width="90">
          <template slot-scope="scope">
            <span class="data-link" @click="goPageDetail(scope.row.business_consumer_uid)">详情</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="page-pagination" v-if="total>searchParams.pageSize">
        <ve-pagination :total="total"
                       :pageSize="searchParams.pageSize"
                       @changePage="changePage"/>
      </div>
    </div>
  </div>
</template>

<script>
  import VePagination from 'src/components/ve-pagination'
  import dataService from 'src/api/data-service'
  import {mapMutations} from 'vuex'
  import * as types from '../../store/mutation-types'
  import province from '../../components/province'
  import city from '../../components/city'

  export default {
    name: 'viewerList',
    components: {VePagination},
    data () {
      return {
        isHigh: false,
        enterOutTime: [],
        total: 0,
        viewerList: [],
        searchParams: {
          activityId: '',
          keyword: '',
          sex: '',
          user_level: '',
          is_new: '',
          provinceId: '',
          province: '',
          cityId: '',
          city: '',
          source: '',
          first_join_at: '',
          last_leave_at: '',
          device: '',
          score: '',
          page: 1,
          pageSize: 10
        },
        citySelect: [],
        genderList: [
          {value: '', label: '全部'},
          {value: 'M', label: '男'},
          {value: 'W', label: '女'}
        ],
        watcherTypeList: [
          {value: '', label: '全部用户'},
          {value: 1, label: '优质用户'},
          {value: 2, label: '高价值用户'},
          {value: 3, label: '一般用户'},
          {value: 4, label: '潜在用户'},
          {value: 5, label: '流失用户'}
        ],
        options: [],
        sourceList: [
          {value: '', label: '全部'},
          {value: 'IMPORT', label: '导入'},
          {value: 'MOBILE', label: '手机注册'},
          {value: 'PC', label: 'PC注册'}
        ],
        deviceList: [
          {value: '', label: '全部'},
          {value: 'PC', label: '电脑'},
          {value: 'MOBILE', label: '手机'}
        ],
        scoreTypeList: [
          {value: '', label: '全部'},
          {value: 1, label: '100>得分>90'},
          {value: 2, label: '90>得分>80'},
          {value: 3, label: '80>得分>60'},
          {value: 4, label: '60>得分'}
        ],
        userTypeList: [
          {value: '', label: '全部'},
          {value: 0, label: '老用户'},
          {value: 1, label: '新用户'}
        ]
      }
    },
    filters: {
      fmtTime (value) {
        let h = ((value / 3600 >> 0) + '').padStart(2, 0)
        let m = ((value / 60 % 60 >> 0) + '').padStart(2, 0)
        let s = ((value % 60 >> 0) + '').padStart(2, 0)
        return `${h}:${m}:${s}`
      },
      fmtUserLevel (value) {
        let obj = {
          0: '没有评级',
          1: '优质用户',
          2: '高价值用户',
          3: '一般用户',
          4: '一般用户',
          5: '流失用户'
        }
        return obj[value]
      },
      fmtSource (value) {
        let obj = {
          '': '没有来源',
          'IMPORT': '导入',
          'MOBILE': '手机注册',
          'PC': 'PC注册'
        }
        return obj[value]
      }
    },
    watch: {
      enterOutTime (vals) {
        if (!vals) {
          this.searchParams.first_join_at = ''
          this.searchParams.last_leave_at = ''
          return
        }
        this.searchParams.first_join_at = vals[0]
        this.searchParams.last_leave_at = vals[1]
      }
    },
    created () {
      this.storeSelectMenu(false)
      this.searchParams.activityId = this.$route.params.id
      this.dealSearchParam()
      this.queryList()
      this.dealWithCity()
    },
    methods: {
      ...mapMutations('dataCenter', {
        storeSelectMenu: types.DATA_SELECT_MENU
      }),
      dealWithCity () {
        let areaList = []
        for (let i = 0; i < province.length; i++) {
          let pObj = province[i]
          areaList.push({
            value: pObj.value,
            label: pObj.label,
            children: city[pObj.value]
          })
        }
        this.options = areaList
      },
      handleAreaChange (v) {
        this.searchParams.provinceId = v[0]
        this.searchParams.cityId = v[1]
        if (this.searchParams.provinceId) {
          for (let i = 0; i < province.length; i++) {
            if (province[i].value === this.searchParams.provinceId) {
              this.searchParams.province = province[i].label
              break
            }
          }
          let cityList = city[this.searchParams.provinceId]
          for (let i = 0; i < cityList.length; i++) {
            if (cityList[i].value === this.searchParams.cityId) {
              this.searchParams.city = cityList[i].label
              break
            }
          }
        }
      },
      dealSearchParam () {
        let type = this.$route.query.type
        console.log(type)
        if (type === 'old') { // 老用户
          this.searchParams.is_new = 0
        } else if (type === 'new') { // 新用户
          this.searchParams.is_new = 1
        } else if (type === 'high') { // 优质用户
          this.searchParams.user_level = 1
        } else if (type === 'vip') { // 高价值用户
          this.searchParams.user_level = 4
        } else if (type === 'ord') { // 一般用户
          this.searchParams.user_level = 3
        } else if (type === 'potent') { // 潜在用户
          this.searchParams.user_level = 2
        } else if (type === 'loss') { // 流失用户
          this.searchParams.user_level = 5
        }
      },
      goPageDetail (id) {
        this.$router.push(`/userManage/info/${id}`)
      },
      changePage (pageIdx) {
        this.searchParams.page = pageIdx
        this.queryList()
      },
      exportData () {
        let paramStr = '?'
        for (let key in this.searchParams) {
          paramStr += `${key}=${this.searchParams[key]}&`
        }
        paramStr = paramStr.substring(0, paramStr.length - 1)
        const url = process.env.API_PATH + dataService.GET_VIEWER_LIST_EXPORT + paramStr
        window.open(encodeURI(encodeURI(url)))
      },
      queryList () {
        return this.$get(dataService.GET_VIEWER_LIST, {
          ...this.searchParams
        }).then((res) => {
          if (res.code === 200) {
            if (res.data) {
              this.viewerList = res.data.list
              this.total = res.data.total
            }
          }
        })
      },
      searchEnter () {
        this.queryList()
      },
      cancelClick () {
        this.citySelect = []
        this.searchParams = {
          activityId: this.searchParams.activityId,
          keyword: '',
          sex: '',
          user_level: '',
          is_new: '',
          province: '',
          city: '',
          source: '',
          first_join_at: '',
          last_leave_at: '',
          device: '',
          score: '',
          page: 1,
          pageSize: 10
        }
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .data-box {
    .export-btn {
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
    }
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
      .iconfont {
        display: inline-block;
        font-size: 12px;
        color: #2878FF;
        transition: transform .2s;
        &.icon-down {
          transform: rotate(180deg);
        }
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
      margin-left: 14px;
    }
    .user-info {
      .user-avatar {
        margin: 8px 0;
        display: inline-block;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        vertical-align: middle;
        background-image: url("../../assets/image/avatar@2x.png");
        background-size: cover;
      }
      div {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        span {
          display: block;
          width: 82px;
          line-height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:first-child {
            color: #333;
          }
          &:last-child {
            color: #999;
          }
        }
      }
      .level1 {
        color: #0FBDAA !important;
      }
      .level2 {
        color: #714CEA !important;
      }
      .level3 {
        color: #FFAA00 !important;
      }
      .level4 {
        color: #FC5659 !important;
      }
    }
  }
</style>
