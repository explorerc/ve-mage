<template>
  <div class="data-box search-box">
    <div v-if="!isHigh" class="search-item">
      <span class="search-title">关键词搜索</span>
      <com-input type="search"
                 class="search-com"
                 :value.sync="searchParams.keyword"
                 :maxLength="30"
                 @keyup.native.enter="searchEnter"
                 placeholder="输入姓名/手机号/邮箱"></com-input>
      <span class="data-link" style="font-size: 14px;" @click="isHigh=true">高级筛选</span>
    </div>
    <div v-if="isHigh">
      <div class="search-item">
        <span class="search-title">关键词搜索</span>
        <com-input type="search"
                   class="search-com"
                   :value.sync="searchParams.keyword"
                   :maxLength="30"
                   @keyup.native.enter="searchEnter"
                   placeholder="输入姓名/手机号/邮箱"></com-input>
      </div>
      <div class="search-item">
        <span class="search-title">性别</span>
        <el-select v-model="searchParams.gender"
                   placeholder="直播状态">
          <el-option v-for="item in genderList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item">
        <span class="search-title">活动前用户级别</span>
        <el-select v-model="searchParams.level">
          <el-option v-for="item in watcherTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item">
        <span class="search-title">活动后用户级别</span>
        <el-select v-model="searchParams.aflevel">
          <el-option v-for="item in userTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item">
        <span class="search-title">地域</span>
        <el-select style="width: 100px;"
                   v-model="searchParams.province">
          <el-option v-for="item in provinceList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-select style="width: 100px;"
                   v-model="searchParams.city">
          <el-option v-for="item in cityList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item">
        <span class="search-title">行业</span>
        <el-select v-model="searchParams.trade"
                   placeholder="直播状态">
          <el-option v-for="item in tradeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-item">
        <span class="search-title">进入时间</span>
        <el-date-picker
          v-model="searchParams.enterTime"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-item">
        <span class="search-title">离开时间</span>
        <el-date-picker
          v-model="searchParams.leaveTime"
          format="yyyy-MM-dd HH:mm"
          value-format="yyyy-MM-dd HH:mm"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-item">
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
      <div class="search-item">
        <span class="search-title">本次得分</span>
        <el-select style="width: 80px;"
                   v-model="searchParams.scoreType"
                   placeholder="直播状态">
          <el-option v-for="item in scoreTypeList"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <com-input type="number"
                   :value.sync="searchParams.score"
                   :maxLength="30"></com-input>
      </div>
      <div class="search-item">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'viewerList',
    data () {
      return {
        isHigh: false,
        enterTime: [],
        leaveTime: [],
        searchParams: {
          keyword: '',
          gender: '0',
          level: '0',
          aflevel: '0',
          province: '0',
          city: '0',
          trade: '0',
          enterStartTime: '',
          enterEndTime: '',
          leaveStartTime: '',
          leaveEndTime: '',
          device: '0',
          scoreType: '0',
          score: '',
          userType: '0'
        },
        genderList: [
          {value: '0', label: '全部'},
          {value: '1', label: '男'},
          {value: '2', label: '女'}
        ],
        watcherTypeList: [
          {value: '0', label: '全部用户'},
          {value: '1', label: '优质用户'},
          {value: '2', label: '潜在用户'},
          {value: '3', label: '一般用户'},
          {value: '4', label: '高价值用户'},
          {value: '5', label: '流失用户'}
        ],
        provinceList: [
          {value: '0', label: '省'},
          {value: '1', label: '北京'},
          {value: '2', label: '河南省'},
          {value: '3', label: '河北省'},
          {value: '4', label: '黑龙江'},
          {value: '5', label: '湖北'}
        ],
        cityList: [
          {value: '0', label: '市'},
          {value: '1', label: '北京市'},
          {value: '2', label: '郑州市'},
          {value: '3', label: '天津市'}
        ],
        tradeList: [
          {value: '0', label: '全部'},
          {value: '1', label: '导入'},
          {value: '2', label: '微信注册'},
          {value: '3', label: 'PC注册'}
        ],
        deviceList: [
          {value: '0', label: '全部'},
          {value: '1', label: '电脑'},
          {value: '2', label: '手机'}
        ],
        scoreTypeList: [
          {value: '0', label: '全部'},
          {value: '1', label: '大于'},
          {value: '2', label: '小于'},
          {value: '3', label: '等于'}
        ],
        userTypeList: [
          {value: '0', label: '全部'},
          {value: '1', label: '新用户'},
          {value: '2', label: '老用户'}
        ]
      }
    },
    methods: {
      searchEnter () {
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .data-box {
    .search-box /deep/ {
      .search-com {
        margin: 0 10px;
        width: 260px;
      }
      input {
        height: 30px;
        line-height: 30px;
      }
    }
    .search-item /deep/ {
      display: inline-block;
      margin: 10px 20px 10px 0;
      .el-select {
        display: inline-block;
      }
      .search-title {
        margin-right: 5px;
        font-size: 14px;
      }
    }
  }

</style>
